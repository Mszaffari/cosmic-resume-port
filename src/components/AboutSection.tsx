import { Brain, Database, Telescope, Cpu } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'AI/ML Engineering',
    description: 'Building production-ready intelligent systems with deep learning and computer vision',
  },
  {
    icon: Database,
    title: 'Data Science',
    description: 'End-to-end ML pipelines, predictive analytics, and data-driven decision systems',
  },
  {
    icon: Telescope,
    title: 'Space & Astronomy AI',
    description: 'Applying AI to stellar classification, pulsar detection, and astronomical research',
  },
  {
    icon: Cpu,
    title: 'Full-Stack Development',
    description: 'Scalable applications with React, Node.js, Python Flask, and cloud infrastructure',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 section-title">
            <span className="text-gradient">About Me</span>
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-12 mt-8">
            Results-driven AI/ML Engineer and Data Scientist with expertise in developing production-ready 
            intelligent systems. I specialize in building end-to-end ML pipelines, predictive analytics 
            platforms, and computer vision applications. With a deep passion for astronomy and space technology, 
            I apply cutting-edge AI techniques to explore the cosmos while addressing real-world challenges 
            in education technology, predictive modeling, and data-driven decision-making.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6 rounded-xl group hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
