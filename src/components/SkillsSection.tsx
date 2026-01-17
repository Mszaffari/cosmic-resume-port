import { Code2, Brain, Layers, Database, Cloud, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: Code2,
    color: 'primary',
    skills: ['Python', 'C', 'SQL', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'ML & AI',
    icon: Brain,
    color: 'secondary',
    skills: ['Deep Learning', 'Computer Vision', 'NLP', 'Predictive Modeling', 'Time-Series Forecasting', 'XGBoost', 'Prophet'],
  },
  {
    title: 'Frameworks',
    icon: Layers,
    color: 'accent',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'MediaPipe', 'OpenCV', 'Flask', 'Django', 'React Native'],
  },
  {
    title: 'Data Science',
    icon: Database,
    color: 'primary',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Tableau', 'Power BI', 'Excel', 'SVD Factorization', 'Feature Engineering'],
  },
  {
    title: 'Cloud & Databases',
    icon: Cloud,
    color: 'secondary',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'AWS', 'Azure'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    color: 'accent',
    skills: ['Git', 'Docker', 'Jupyter Notebook', 'VS Code', 'Streamlit'],
  },
];

const colorMap = {
  primary: 'from-primary/20 to-primary/5 border-primary/30 hover:border-primary/60',
  secondary: 'from-secondary/20 to-secondary/5 border-secondary/30 hover:border-secondary/60',
  accent: 'from-accent/20 to-accent/5 border-accent/30 hover:border-accent/60',
};

const iconColorMap = {
  primary: 'text-primary bg-primary/10',
  secondary: 'text-secondary bg-secondary/10',
  accent: 'text-accent bg-accent/10',
};

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-void">
      {/* Background Constellation Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full" />
        <div className="absolute top-40 right-40 w-1 h-1 bg-secondary rounded-full" />
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-accent rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-primary rounded-full" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Technical Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A constellation of skills powering intelligent solutions across the AI and data science universe
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`relative p-6 rounded-xl border bg-gradient-to-br transition-all duration-300 ${colorMap[category.color as keyof typeof colorMap]}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${iconColorMap[category.color as keyof typeof iconColorMap]}`}>
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-mono bg-background/50 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
