
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Linkedin, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center space-x-6 mb-6">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-dark hover:text-portfolio-yellow transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-dark hover:text-portfolio-yellow transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:info@madelyntorff.com"
              className="text-portfolio-dark hover:text-portfolio-yellow transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
          <p className="text-sm text-portfolio-lightGray">
            Madelyn Torff {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
