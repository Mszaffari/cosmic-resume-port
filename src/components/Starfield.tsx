import { useEffect, useRef } from 'react';

const Starfield = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const starCount = window.matchMedia('(max-width: 767px)').matches ? 72 : 118;
    
    // Clear existing stars
    container.innerHTML = '';
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      const size = Math.random() * 3 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 4 + 2;
      const delay = Math.random() * 4;
      const minOpacity = Math.random() * 0.3 + 0.1;
      const maxOpacity = Math.random() * 0.5 + 0.5;
      
      star.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}%;
        top: ${y}%;
        --duration: ${duration}s;
        --delay: ${delay}s;
        --min-opacity: ${minOpacity};
        --max-opacity: ${maxOpacity};
      `;
      
      // Add occasional colored stars
      if (Math.random() > 0.9) {
        const colors = ['hsl(var(--secondary))', 'hsl(var(--primary))', 'hsl(var(--accent))'];
        star.style.background = colors[Math.floor(Math.random() * colors.length)];
        star.style.boxShadow = `0 0 ${size * 2}px ${star.style.background}`;
      }
      
      container.appendChild(star);
    }
  }, []);

  return <div ref={containerRef} className="starfield" />;
};

export default Starfield;
