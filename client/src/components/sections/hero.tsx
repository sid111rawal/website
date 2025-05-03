import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary blur-lg opacity-20"></div>
              <img 
                src="/src/images/my-new-profile.png" 
                alt="Sid Rawal" 
                className="w-32 h-32 md:w-36 md:h-36 rounded-full object-contain border-4 border-background relative z-10"
              />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Crafting Digital <span className="gradient-text">Experiences</span> That Matter
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I'm a web developer focused on building beautiful, functional, and user-friendly websites that help businesses grow and succeed in the digital landscape.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button asChild size="lg" className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium">
              <a href="#work">View My Work</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-6 py-3 border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary">
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-8 text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="w-full md:w-auto px-8 py-4 bg-card rounded-lg shadow-sm border border-border">
            <div className="text-3xl font-bold text-primary mb-1">5+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          
          <div className="w-full md:w-auto px-8 py-4 bg-card rounded-lg shadow-sm border border-border">
            <div className="text-3xl font-bold text-primary mb-1">100+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          
          <div className="w-full md:w-auto px-8 py-4 bg-card rounded-lg shadow-sm border border-border">
            <div className="text-3xl font-bold text-primary mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
