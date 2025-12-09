import { Mail, Linkedin, Instagram, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-nav-bg text-primary-foreground py-8 mt-auto">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Jørund Vatle Sandgren</h3>
            <p className="text-sm opacity-90">Aspiring Backend Developer</p>
          </div>

          <div className="flex gap-6">
            <a
              href="mailto:jorund.sandgren@gmail.com"
              className="hover:text-accent-light transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/jaurund"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-light transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-light transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-light transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          <div className="text-sm opacity-75">
            © 2025 Jørund Vatle Sandgren
          </div>
        </div>
      </div>
    </footer>
  );
};
