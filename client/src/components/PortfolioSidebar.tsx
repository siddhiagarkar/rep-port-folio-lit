import { Home, GraduationCap, Briefcase, Code, Award, Wrench, Mail, Image } from "lucide-react";
import { Link, useLocation } from "wouter";
import oceanImg from '@assets/generated_images/ocean_underwater_scene_with_nemo_clownfish.png';

const navItems = [
  { title: "Home", icon: Home, path: "/" },
  { title: "Education", icon: GraduationCap, path: "/education" },
  { title: "Experience", icon: Briefcase, path: "/experience" },
  { title: "Projects", icon: Code, path: "/projects" },
  { title: "Achievements", icon: Award, path: "/achievements" },
  { title: "Skills", icon: Wrench, path: "/skills" },
  { title: "Contact", icon: Mail, path: "/contact" },
  { title: "Gallery", icon: Image, path: "/gallery" },
];

export default function PortfolioSidebar() {
  const [location] = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-border flex flex-col z-50 hidden lg:flex">
      {/* Logo Section with Ocean Background */}
      <div 
        className="px-6 py-8 border-b border-border relative overflow-hidden"
        style={{
          backgroundImage: `url(${oceanImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '160px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="mb-3" data-testid="logo-sa">
            <div className="text-2xl font-light tracking-widest text-white" style={{ letterSpacing: '0.15em' }}>
              <span className="font-serif" style={{ fontSize: '1.5em', fontStyle: 'italic', fontWeight: '300' }}>S</span><span style={{ fontSize: '0.9em', fontWeight: '300', marginLeft: '-0.1em' }}>A</span>
            </div>
          </div>
          <p className="text-sm text-white/90 tracking-wider uppercase font-light">
            Keep Swimming
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location === item.path;

          return (
            <Link key={item.path} href={item.path} data-testid={`link-${item.title.toLowerCase()}`}>
              <div
                className={`
                  flex items-center gap-3 px-6 py-4 text-base font-light transition-colors cursor-pointer
                  relative
                  ${isActive ? "text-primary" : "text-foreground hover-elevate"}
                `}
              >
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                )}
                <Icon className="w-5 h-5" />
                <span>{item.title}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Social Links */}
      <div className="py-6 px-6 border-t border-border">
        <div className="flex gap-4">
          <a
            href="https://github.com/siddhiagarkar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            data-testid="link-github"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/siddhi-sunil-agarkar-56b7a8231/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            data-testid="link-linkedin"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
}
