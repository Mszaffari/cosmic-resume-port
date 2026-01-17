import { ArrowDown, Mail, Layers } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Nebula Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
      
      {/* Orbital Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-primary/10 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-secondary/10 rounded-full" />
      
      {/* Orbiting Dots */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="orbit" style={{ '--orbit-duration': '15s', '--orbit-radius': '250px' } as React.CSSProperties}>
          <div className="w-3 h-3 bg-primary rounded-full shadow-lg" style={{ boxShadow: '0 0 20px hsl(258 90% 66%)' }} />
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="orbit" style={{ '--orbit-duration': '25s', '--orbit-radius': '350px' } as React.CSSProperties}>
          <div className="w-2 h-2 bg-secondary rounded-full shadow-lg" style={{ boxShadow: '0 0 15px hsl(217 91% 60%)' }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="font-mono text-primary text-sm md:text-base mb-4 tracking-wider">
            &lt; AI/ML Engineer • Data Scientist • Space Tech Enthusiast /&gt;
          </p>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <span className="text-foreground">MERAJ SALEHEEN</span>
          <br />
          <span className="text-gradient glow-text">ZAFFARI</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in font-body" style={{ animationDelay: '0.6s' }}>
          Engineering intelligent systems at the intersection of{' '}
          <span className="text-primary font-medium">Artificial Intelligence</span>,{' '}
          <span className="text-secondary font-medium">Data Science</span>, and{' '}
          <span className="text-accent font-medium">Interstellar Exploration</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs font-mono">Explore</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
