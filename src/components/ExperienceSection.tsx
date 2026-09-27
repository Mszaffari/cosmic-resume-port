import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Business Analytics Intern',
    company: 'Outlook Publishers',
    period: 'Completed',
    current: false,
    highlights: [
      'Conducting comprehensive business data analysis identifying KPIs and growth opportunities across 50+ datasets',
      'Developing interactive Power BI dashboards improving stakeholder decision-making efficiency by 35%',
      'Performing competitive market analysis and statistical modeling to support strategic business initiatives',
      'Collaborating with cross-functional teams to translate complex business requirements into actionable solutions',
    ],
  },
  {
    title: 'Data Science Intern (Python)',
    company: 'Qspider',
    period: 'Completed',
    current: false,
    highlights: [
      'Implementing end-to-end machine learning pipelines using Python for predictive analytics projects',
      'Processing and analyzing large-scale datasets with advanced data preprocessing and feature engineering',
      'Developing automated ETL pipelines using pandas and NumPy reducing data processing time by 45%',
      'Building and optimizing ML models using scikit-learn and TensorFlow achieving 90+ accuracy',
    ],
  },
  {
    title: 'Data Analytics Specialist',
    company: 'Accenture (Virtual Internship)',
    period: '2024',
    current: false,
    highlights: [
      'Processed 10,000+ records using Python & Excel generating actionable insights for client decisions',
      'Built interactive dashboards with 30% improvement in business intelligence delivery speed',
      'Applied ML forecasting models achieving 92% accuracy on business trend predictions',
      'Automated ETL pipelines reducing data preparation time by 40% through Python scripting',
    ],
  },
  {
    title: 'Software Development Engineer Intern',
    company: 'Prodigy InfoTech (Virtual)',
    period: '2023',
    current: false,
    highlights: [
      'Developed 5+ full-stack web applications with REST APIs serving 1,000+ concurrent users',
      'Ensured 98% mobile compatibility through responsive design and cross-browser testing',
      'Optimized backend systems cutting load times by 60% through database query optimization',
      'Delivered features ahead of sprint deadlines following Agile development methodologies',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Professional Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Navigating through diverse missions in data science and software engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line transform -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'
              }`}
            >
              {/* Timeline Node */}
              <div
                className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 ${
                  exp.current ? 'bg-primary animate-glow-pulse' : 'bg-secondary'
                }`}
                style={{ top: '1.5rem' }}
              >
                <div className={`absolute inset-0 rounded-full ${exp.current ? 'bg-primary' : 'bg-secondary'} animate-ping opacity-20`} />
              </div>

              {/* Content Card */}
              <div className="glass-card p-6 rounded-xl ml-8 md:ml-0">
                <div className="flex flex-wrap items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Briefcase className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="font-mono">{exp.period}</span>
                    {exp.current && (
                      <span className="ml-2 px-2 py-0.5 text-xs bg-aurora/20 text-aurora rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1.5">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
