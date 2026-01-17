import { Award, ExternalLink, Trophy, Zap } from 'lucide-react';

const certifications = [
  {
    title: 'Machine Learning Professional Certificate',
    description: 'Advanced ML Algorithms',
    verifyLink: '#',
    icon: Award,
  },
  {
    title: 'Data Science Mastery Certification',
    description: 'End-to-End Pipeline Development',
    verifyLink: '#',
    icon: Award,
  },
  {
    title: 'Accenture Analytics Professional',
    description: 'Advanced Data Analytics & Visualization',
    verifyLink: '#',
    icon: Award,
  },
  {
    title: 'HackerRank Certified Developer',
    description: 'Python & SQL Proficiency',
    verifyLink: '#',
    icon: Award,
  },
  {
    title: 'RV Institute Workshop',
    description: 'Applied ML & Statistical Analysis',
    verifyLink: '#',
    icon: Award,
  },
];

const achievements = [
  {
    metric: '5+',
    label: 'Production ML Models',
    detail: 'Accuracy exceeding 85%',
  },
  {
    metric: '100K+',
    label: 'Data Records Processed',
    detail: 'Using Python, SQL & statistical techniques',
  },
  {
    metric: '30 FPS',
    label: 'Real-time CV Apps',
    detail: 'Sub-200ms latency',
  },
  {
    metric: '26',
    label: 'Academic Papers',
    detail: 'Literature review for research project',
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Achievements & Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Recognition for excellence in AI, data science, and technical expertise
          </p>
        </div>

        {/* Key Achievements Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((item, index) => (
            <div
              key={item.label}
              className="glass-card p-6 rounded-xl text-center group hover:border-primary/50 transition-all"
            >
              <div className="flex justify-center mb-3">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="font-display text-3xl font-bold text-gradient mb-1">
                {item.metric}
              </div>
              <div className="font-medium text-foreground text-sm mb-1">
                {item.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="w-6 h-6 text-primary" />
            <h3 className="font-display text-xl font-semibold text-foreground">
              Professional Certifications
            </h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <a
                key={cert.title}
                href={cert.verifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 rounded-xl flex items-start gap-4 group hover:border-primary/50 transition-all cursor-pointer"
              >
                <div className="p-2.5 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <cert.icon className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground text-sm mb-1 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {cert.description}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
