import { Rocket, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 border-t border-border/50 bg-void">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-primary" />
            <span className="font-display text-sm font-semibold text-gradient">
              Meraj Saleheen Zaffari
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} All rights reserved. Built with{' '}
            <Heart className="w-4 h-4 inline text-destructive fill-destructive" /> AI & Passion for Space
          </p>
          
          <div className="text-xs text-muted-foreground font-mono">
            v1.0.0 • Last Updated 2025
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
