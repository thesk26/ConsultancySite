# Design Guidelines: Shreevariya Consultancy Services

## Design Approach
**Reference-Based Approach**: Drawing inspiration from premium property consultancy firms (CBRE, JLL, Cushman & Wakefield) combined with corporate professionalism of Deloitte and McKinsey. Focus on establishing trust, expertise, and sophistication while maintaining accessibility.

## Core Design Elements

### A. Color Palette

**Primary Colors (Dark Mode):**
- Background: 222 14% 10% (deep charcoal)
- Surface: 222 12% 15% (elevated charcoal)
- Text Primary: 0 0% 98%
- Text Secondary: 220 9% 70%

**Primary Colors (Light Mode):**
- Background: 0 0% 100% (pure white)
- Surface: 220 13% 97% (subtle gray)
- Text Primary: 222 14% 10%
- Text Secondary: 220 9% 46%

**Brand Colors:**
- Primary Blue: 217 91% 42% (professional corporate blue)
- Blue Hover: 217 91% 35%
- Gold Accent: 43 84% 55% (subtle, used sparingly for highlights only)

### B. Typography

**Font Families:**
- Headings: 'Inter', sans-serif (weights: 600, 700)
- Body: 'Inter', sans-serif (weights: 400, 500)
- Accent: 'Playfair Display', serif (for tagline/special headings)

**Hierarchy:**
- H1 (Hero): text-6xl md:text-7xl, font-bold, tracking-tight
- H2 (Section): text-4xl md:text-5xl, font-semibold
- H3 (Cards): text-2xl md:text-3xl, font-semibold
- Body Large: text-lg md:text-xl
- Body: text-base

### C. Layout System

**Spacing Units:** Consistent use of 4, 8, 12, 16, 20, 24 (tailwind scale)
- Section padding: py-20 md:py-32
- Container max-width: max-w-7xl
- Card padding: p-8
- Element gaps: gap-8 md:gap-12

**Grid Systems:**
- Services: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Projects: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Team: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- About columns: grid-cols-1 md:grid-cols-3

### D. Component Library

**Navigation:**
- Fixed transparent nav on scroll with blur backdrop
- Logo left, nav center, CTA button right
- Smooth scroll behavior to sections

**Hero Section:**
- Full viewport (min-h-screen) with gradient overlay
- Large hero image (property/construction)
- Centered content with serif tagline
- Primary CTA with arrow icon

**Service Cards:**
- White/surface background with subtle shadow
- Icon top (48x48), title, description
- Hover: lift effect (translate-y-1) and enhanced shadow
- Border with brand blue on hover

**Project Gallery:**
- Grid layout with aspect-ratio-square containers
- Overlay on hover revealing project name and category
- Smooth scale transform on hover

**Testimonials:**
- Card-based carousel with navigation dots
- Client photo (rounded), quote, name, company
- Subtle quotation mark graphic

**Contact Form:**
- Two-column layout (form left, map/info right)
- Input fields with border focus states
- Blue submit button, full-width

**Team Cards:**
- Professional headshot placeholder
- Name, role beneath photo
- LinkedIn icon link on hover

### E. Animations

**Framer Motion Patterns:**
- Fade-in on scroll: opacity 0→1, y: 50→0
- Stagger children animations (0.1s delay)
- Scale on hover for cards: 1→1.02
- Smooth scroll offset: -80px for fixed nav

**Animation Timing:**
- duration: 0.6s for entrances
- duration: 0.3s for hover states
- ease: [0.6, -0.05, 0.01, 0.99] (custom easing)

## Images

**Hero Section:**
- Large, high-quality image of modern construction/architecture (1920x1080 minimum)
- Dark overlay (40% opacity) for text readability
- Suggested: aerial view of commercial development or modern building facade

**Project Gallery (6-9 images):**
- Commercial buildings, construction sites, architectural renders
- Consistent aspect ratio (square or 4:3)
- Professional photography style

**Team Section:**
- Professional headshots on neutral background
- Consistent styling across all photos

**About Section:**
- Optional: subtle icon graphics for three expertise columns
- Minimal, line-art style icons

## Key Design Principles

1. **Professional Hierarchy:** Clear visual separation between sections using generous spacing
2. **Trust Through Imagery:** High-quality project visuals establish credibility
3. **Balanced Minimalism:** Clean layouts with purposeful gold accents (icons, borders, bullets)
4. **Smooth Interactions:** Subtle animations enhance without distracting
5. **Mobile-First Grid:** Responsive breakpoints ensuring professional appearance on all devices
6. **Corporate Sophistication:** Blue conveys trust, gold adds premium touch sparingly