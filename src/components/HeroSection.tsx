import { ArrowDown, Mail, Layers } from 'lucide-react';
import blackHole from '@/assets/cinematic-black-hole.jpg';

const HeroSection = () => {
  return (
    <section className="space-hero relative flex items-center overflow-hidden">
      <img src={blackHole} alt="Gravitational lensing around a distant black hole" width={1920} height={1080} className="hero-media" />
      <div className="hero-vignette" />
      <div className="hero-grain" />
      <div className="hero-orbit" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 md:py-40">
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="font-mono text-primary text-xs md:text-sm mb-6 tracking-[0.18em] uppercase">
            AI/ML Engineer · Data Scientist · Space Tech Enthusiast
          </p>
        </div>
        
        <h1 className="max-w-4xl text-5xl sm:text-6xl md:text-8xl font-display font-semibold leading-[0.98] mb-7 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <span className="text-foreground">Meraj Saleheen</span>
          <br />
          <span className="text-gradient glow-text">Zaffari</span>
        </h1>
        
        <p className="text-base md:text-xl text-muted-foreground max-w-xl mb-10 animate-fade-in font-body leading-relaxed" style={{ animationDelay: '0.6s' }}>
          Engineering intelligent systems at the intersection of{' '}
          <span className="text-primary font-medium">Artificial Intelligence</span>,{' '}
          <span className="text-secondary font-medium">Data Science</span>, and{' '}
          <span className="text-accent font-medium">Interstellar Exploration</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <a
            href="mailto:mszaffari17.01@gmail.com"
            className="cosmic-btn px-8 py-4 rounded-full text-foreground font-display font-semibold flex items-center justify-center gap-2 relative z-10"
          >
            <Mail className="w-5 h-5" />
            <span className="relative z-10">Contact Me</span>
          </a>
          <a
            href="#projects"
            className="cosmic-btn-outline px-8 py-4 rounded-full font-display font-semibold flex items-center justify-center gap-2"
          >
            <Layers className="w-5 h-5" />
            View Projects
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-4 md:left-8 animate-fade-in">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs font-mono">Explore</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
