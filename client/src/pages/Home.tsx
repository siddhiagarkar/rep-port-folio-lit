import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import profileImg from '@assets/WhatsApp Image 2025-11-22 at 6.41.41 PM (1)_1763820505036.jpeg';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="min-h-screen flex items-center px-0 md:px-0 lg:px-0 py-16 lg:py-0">
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
          {/* Left Content */}
          <motion.div 
            className="space-y-6 px-8 md:px-16 lg:px-24 flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide">
                Siddhi Sunil Agarkar
              </h1>
              <p className="text-2xl md:text-3xl text-teal-600 dark:text-teal-400 font-light tracking-wide">
                Keep Swimming
              </p>
            </div>
            <p className="text-lg text-foreground/80 font-light leading-relaxed max-w-2xl">
              B.Tech student at NIT Durgapur with experience in full-stack development, 
              AI/ML systems, and cloud infrastructure. Passionate about building scalable 
              solutions that make a real impact.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 pb-12">
              <a href="/attached_assets/Siddhi Agarkar_Review_1763814617656.pdf" download>
                <Button 
                  size="lg" 
                  data-testid="button-download-resume"
                  className="bg-primary/90 hover:bg-primary/100 text-white backdrop-blur-sm border border-primary/20 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Download Resume
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/siddhi-sunil-agarkar-56b7a8231/" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  data-testid="button-linkedin"
                  className="bg-blue-600 hover:bg-blue-700 text-white backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  LinkedIn
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Image - Full Height */}
          <motion.div 
            className="hidden lg:flex h-screen items-stretch"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
              <img
                src={profileImg}
                alt="Siddhi Agarkar"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>

        {/* Mobile Image - Full Width Below Content */}
        <motion.div 
          className="lg:hidden w-full px-0 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full h-80 overflow-hidden flex items-center justify-center">
            <img
              src={profileImg}
              alt="Siddhi Agarkar"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>
      </section>

      <section className="px-8 md:px-16 lg:px-24 py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center" data-testid="stat-experience">
              <div className="text-4xl font-light text-primary mb-2">4+</div>
              <div className="text-sm text-muted-foreground tracking-wider uppercase font-light">
                Years of Education
              </div>
            </div>
            <div className="text-center" data-testid="stat-projects">
              <div className="text-4xl font-light text-primary mb-2">6+</div>
              <div className="text-sm text-muted-foreground tracking-wider uppercase font-light">
                Major Projects
              </div>
            </div>
            <div className="text-center" data-testid="stat-technologies">
              <div className="text-4xl font-light text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground tracking-wider uppercase font-light">
                Technologies
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
