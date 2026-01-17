import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="relative py-24 md:py-32 bg-void">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Academic foundation in Information Science & Engineering
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl overflow-hidden">
            {/* Header with gradient */}
            <div className="relative p-8 bg-gradient-to-r from-primary/20 via-secondary/10 to-accent/10 border-b border-border/50">
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-xl bg-background/50 backdrop-blur-sm">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                    Bachelor of Engineering (B.E)
                  </h3>
                  <p className="text-lg text-primary font-medium">
                    Information Science & Engineering
                  </p>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">G M Institute of Technology</p>
                    <p className="text-sm text-muted-foreground">Davanagere, Karnataka</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">2022 – 2026</p>
                    <p className="text-sm text-muted-foreground">Expected Graduation</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-5 h-5 text-secondary" />
                  <span className="text-muted-foreground">Affiliated with</span>
                </div>
                <p className="font-medium text-foreground text-lg">
                  Visvesvaraya Technological University, Belagavi
                </p>
              </div>

              <div className="pt-6 border-t border-border/50 flex items-center justify-between">
                <span className="text-muted-foreground">Current CGPA</span>
                <div className="flex items-center gap-2">
                  <span className="font-display text-3xl font-bold text-gradient">7.47</span>
                  <span className="text-muted-foreground">/10.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
