import { motion } from "framer-motion";
import oceanImg from '@assets/generated_images/ocean_underwater_scene_with_nemo_clownfish.png';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <motion.div 
      className="relative h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden mb-12 shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <img 
        src={oceanImg} 
        alt="Ocean header" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white mb-2">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
