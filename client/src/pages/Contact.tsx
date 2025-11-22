import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "siddhiagarkar1203@gmail.com",
      href: "mailto:siddhiagarkar1203@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9372583314",
      href: "tel:+919372583314",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Navi Mumbai, Maharashtra, India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/siddhi-agarkar/",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/siddhiagarkar",
    },
    {
      icon: Globe,
      label: "Portfolio",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen px-8 md:px-16 lg:px-24 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-4">Contact</h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Let's connect and discuss opportunities
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-3xl font-normal mb-6">Get in Touch</h2>
            <div className="grid grid-cols-1 gap-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <Card className="hover-elevate transition-all duration-300">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm text-muted-foreground font-light tracking-wider uppercase mb-1">
                          {item.label}
                        </div>
                        <div className="text-base font-light truncate">{item.value}</div>
                      </div>
                    </CardContent>
                  </Card>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block"
                    data-testid={`link-${item.label.toLowerCase()}`}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label} data-testid={`info-${item.label.toLowerCase()}`}>
                    {content}
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-normal mb-6">Social Links</h2>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-4 bg-card rounded-lg border border-card-border hover-elevate transition-all duration-300"
                    data-testid={`link-${link.label.toLowerCase()}`}
                  >
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="font-light">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </section>

          <section className="pt-8">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <p className="text-lg font-light leading-relaxed">
                  I'm always open to discussing new opportunities, collaborations, and innovative projects. 
                  Feel free to reach out!
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}
