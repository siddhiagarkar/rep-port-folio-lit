import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import profileImg from '@assets/generated_images/professional_headshot_portrait.png';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="min-h-[80vh] flex items-center px-8 md:px-16 lg:px-24 py-24">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <motion.div 
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide">
                Siddhi Sunil Agarkar
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-light tracking-wide">
                Software Engineer & Problem Solver
              </p>
            </div>
            <p className="text-lg text-foreground/80 font-light leading-relaxed max-w-2xl">
              B.Tech student at NIT Durgapur with experience in full-stack development, 
              AI/ML systems, and cloud infrastructure. Passionate about building scalable 
              solutions that make a real impact.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="/attached_assets/Siddhi Agarkar_Resume_Review_1763814617656.pdf" download>
                <Button size="lg" data-testid="button-download-resume">
                  Download Resume
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-72 h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src={profileImg}
                alt="Siddhi Agarkar"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
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
