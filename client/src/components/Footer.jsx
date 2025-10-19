export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">
              <span className="text-primary">Shreevariya</span> Consultancy
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building Visions. Guiding Growth.
              <br />
              Expert consultancy for property and construction projects.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {["Home", "About", "Services", "Projects", "Team", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 px-2 py-1 rounded-md text-left"
                  data-testid={`link-footer-${item.toLowerCase()}`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>123 Business District</p>
              <p>Mumbai, Maharashtra 400001</p>
              <p className="pt-2">+91 98765 43210</p>
              <p>info@shreevariya.com</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Shreevariya Consultancy Services. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

