import express from "express";
import { registerRoutes } from "../server/routes.js";
import { serveStatic } from "../server/vite.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Initialize routes
let initialized = false;

async function initializeApp() {
  if (!initialized) {
    // Register API routes
    await registerRoutes(app);
    
    // Serve static files in production
    serveStatic(app);
    
    initialized = true;
  }
  return app;
}

// Export the Express app as a serverless function
export default async function handler(req, res) {
  const app = await initializeApp();
  return app(req, res);
}

