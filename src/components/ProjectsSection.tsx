import { ExternalLink, Github, Sparkles, Star } from 'lucide-react';

const projects = [
  {
    title: 'EduGuardian.AI',
    subtitle: 'AI-Powered Educational Companion Platform',
    period: '2024–2025',
    featured: true,
    isSpaceProject: false,
    description: 'Comprehensive AI-driven student success platform integrating 5 specialized intelligence engines for dropout prevention, engagement monitoring, and personalized learning pathways.',
    highlights: [
      'Risk Assessment Engine using XGBoost achieving 88% accuracy in predicting student dropout probability',
      'Real-time attention monitoring with MediaPipe tracking 468 facial landmarks (sub-200ms latency)',
      'Performance Prediction Engine with Facebook Prophet for time-series GPA forecasting (85% accuracy)',
      'Personalized Recommendation System using SVD Matrix Factorization for adaptive learning paths',
      'Multilingual AI chatbot with NLP-based language detection for 24/7 academic support',
    ],
    techStack: ['XGBoost', 'MediaPipe', 'Prophet', 'NLP', 'Node.js', 'Flask', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/Mszaffari',
    live: null,
  },
  {
    title: 'Stellar Classification & Pulsar Detection AI',
    subtitle: 'Deep Learning for Astronomical Discovery',
    period: '2025',
    featured: true,
    isSpaceProject: true,
    description: 'Advanced machine learning system for processing stellar observations and detecting pulsars from astronomical datasets.',
    highlights: [
      'Processed 50,000+ stellar observations from HTRU2 dataset with advanced ML pipelines',
      'Achieved 92% classification accuracy using ensemble methods and dimensionality reduction',
      'Designed interactive HR diagram visualizations improving astronomical insights by 15%',
      'Implemented Random Forest, SVM with GridSearchCV optimization',
    ],
    techStack: ['Python', 'Deep Learning', 'Random Forest', 'SVM', 'GridSearchCV', 'Astronomy'],
    github: 'https://github.com/Mszaffari',
    live: true,
  },
  {
    title: 'Deep-Fake Image Detection System',
    subtitle: 'Computer Vision Security',
    period: '2024',
    featured: false,
    isSpaceProject: false,
    description: 'Real-time deepfake detection system using state-of-the-art neural network architectures.',
    highlights: [
      'Developed real-time detection using EfficientNet and BlazeFace architectures',
      'Built modular inference pipeline for scalable deployment with color-coded confidence UI',
      'Achieved high-precision detection on DFDC & FaceForensics++ datasets through transfer learning',
      'Data augmentation techniques improving model robustness by 18%',
    ],
    techStack: ['Python', 'PyTorch', 'EfficientNet', 'BlazeFace', 'Computer Vision'],
    github: 'https://github.com/Mszaffari',
    live: null,
  },
  {
    title: 'Image-Based Product Recommendation System',
    subtitle: 'Visual AI for E-Commerce',
    period: '2024',
    featured: false,
    isSpaceProject: false,
    description: 'Deep learning recommendation engine using CNNs for visual similarity matching.',
    highlights: [
      'Built deep learning engine using CNNs for visual similarity matching',
      'Transfer learning with ResNet50 for feature extraction achieving 92% accuracy',
      'Flask-based web interface enabling real-time recommendations with cosine similarity',
      'Optimized preprocessing pipeline reducing inference time by 35%',
    ],
    techStack: ['CNN', 'ResNet50', 'Flask', 'Transfer Learning', 'Cosine Similarity'],
    github: 'https://github.com/Mszaffari',
    live: null,
  },
  {
    title: 'Advanced Diabetes Risk Prediction System',
    subtitle: 'Healthcare ML Application',
    period: '2024',
    featured: false,
    isSpaceProject: false,
    description: 'ML classification system for real-time diabetes risk assessment deployed via Streamlit.',
    highlights: [
      'Built ML classification system with 95% accuracy for real-time risk assessment',
      'Applied ensemble learning techniques and hyperparameter tuning',
      'Deployed via Streamlit serving 500+ users with sub-second latency',
      'SMOTE for handling class imbalance improving minority class detection by 22%',
    ],
    techStack: ['Python', 'Scikit-learn', 'Streamlit', 'SMOTE', 'Ensemble Learning'],
    github: 'https://github.com/Mszaffari',
    live: null,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-void">
      {/* Nebula Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] -z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Signature Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Engineering solutions that push the boundaries of AI, from Earth to the stars
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card glass-card rounded-xl overflow-hidden ${
                project.featured ? 'lg:col-span-2' : ''
              } ${project.isSpaceProject ? 'ring-2 ring-accent/30' : ''}`}
            >
              {/* Header */}
              <div className="p-6 border-b border-border/50">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {project.isSpaceProject && (
                        <Star className="w-5 h-5 text-accent fill-accent/30" />
                      )}
                      {project.featured && !project.isSpaceProject && (
                        <Sparkles className="w-5 h-5 text-primary" />
                      )}
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-primary text-sm font-medium">{project.subtitle}</p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                    {project.period}
                  </span>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                <ul className="space-y-2 mb-6">
                  {project.highlights.slice(0, project.featured ? 5 : 3).map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-accent mt-1">◆</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/20 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cosmic-btn-outline px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    GitHub Repo
                  </a>
                  {project.live && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cosmic-btn px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 text-foreground relative z-10"
                    >
                      <ExternalLink className="w-4 h-4 relative z-10" />
                      <span className="relative z-10">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
