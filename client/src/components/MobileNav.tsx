import { useState } from "react";
import { Menu, X, Home, GraduationCap, Briefcase, Code, Award, Wrench, Mail, Image } from "lucide-react";
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

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <div className="lg:hidden">
      <header 
        className="fixed top-0 left-0 right-0 h-16 border-b border-border flex items-center justify-between px-4 z-50 relative overflow-hidden bg-white"
        style={{
          backgroundImage: `url(${oceanImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Ocean overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/40" />
        
        {/* Content */}
        <h1 className="text-xl font-normal tracking-wide text-white relative z-10">Siddhi Agarkar</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover-elevate rounded-md text-white relative z-10"
          data-testid="button-menu-toggle"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-16">
          <nav className="flex flex-col items-center justify-center h-full gap-2 px-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location === item.path;

              return (
                <Link key={item.path} href={item.path} data-testid={`link-${item.title.toLowerCase()}`}>
                  <div
                    onClick={() => setIsOpen(false)}
                    className={`
                      flex items-center gap-3 px-8 py-4 text-lg font-light rounded-md w-full
                      ${isActive ? "text-primary bg-primary/10" : "text-foreground hover-elevate"}
                    `}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.title}</span>
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}
