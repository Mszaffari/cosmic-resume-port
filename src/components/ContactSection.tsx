import { Mail, Linkedin, Github, Globe, Phone, MapPin } from 'lucide-react';

const contactLinks = [
  {
    label: 'Email',
    value: 'mszaffari17.01@gmail.com',
    href: 'mailto:mszaffari17.01@gmail.com',
    icon: Mail,
    color: 'primary',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/meraj-saleheen-zaffari',
    href: 'https://linkedin.com/in/meraj-saleheen-zaffari',
    icon: Linkedin,
    color: 'secondary',
  },
  {
    label: 'GitHub',
    value: 'github.com/Mszaffari',
    href: 'https://github.com/Mszaffari',
    icon: Github,
    color: 'accent',
  },
  {
    label: 'Hugging Face',
    value: 'huggingface.co/Meraj21',
    href: 'https://huggingface.co/Meraj21',
    icon: Globe,
    color: 'aurora',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to explore the next frontier together? Reach out through any channel.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Location Info */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Davanagere, Karnataka, India</span>
            </div>
            <div className="inline-flex items-center gap-2 text-muted-foreground ml-6">
              <Phone className="w-4 h-4" />
              <span>+91-9480672165</span>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="glass-card p-6 rounded-xl flex items-center gap-5 group hover:border-primary/50 transition-all duration-300"
              >
                <div className={`p-4 rounded-xl bg-${link.color}/10 group-hover:bg-${link.color}/20 transition-colors`} style={{ backgroundColor: `hsl(var(--${link.color}) / 0.1)` }}>
                  <link.icon className="w-6 h-6" style={{ color: `hsl(var(--${link.color}))` }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">{link.label}</p>
                  <p className="font-medium text-foreground truncate group-hover:text-primary transition-colors">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="mailto:mszaffari17.01@gmail.com"
              className="cosmic-btn inline-flex items-center gap-2 px-8 py-4 rounded-full text-foreground font-display font-semibold relative z-10"
            >
              <Mail className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Send Me a Message</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
