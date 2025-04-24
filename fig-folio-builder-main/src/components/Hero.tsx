
import React from "react";
import Button from "./Button";

interface HeroProps {
  showButtons?: boolean;
}

const Hero: React.FC<HeroProps> = ({ showButtons = true }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 md:py-16">
          <div className="flex flex-col justify-center order-2 lg:order-1 animate-fade-in">
            <p className="text-portfolio-yellow font-medium mb-3">UI/UX DESIGNER</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Hello, my name is <br /> Madelyn Torff
            </h1>
            <p className="text-portfolio-gray max-w-md mb-8">
              Short text with details about you, what you do or your professional 
              career. You can add more information on the about page.
            </p>
            
            {showButtons && (
              <div className="flex flex-wrap gap-4">
                <Button href="/projects">Projects</Button>
                <Button 
                  href="https://linkedin.com" 
                  variant="secondary"
                  external
                >
                  LinkedIn
                </Button>
              </div>
            )}
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-portfolio-yellow hero-blob -z-10 transform scale-110"></div>
            <img
              src="/lovable-uploads/ee697242-64af-4fc4-9a09-1af69a44b6ed.png"
              alt="Madelyn Torff - UI/UX Designer"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
