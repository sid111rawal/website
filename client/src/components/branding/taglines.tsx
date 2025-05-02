import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TaglinesProps {
  developerName?: string;
}

export default function Taglines({ developerName = "John Doe" }: TaglinesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Branding taglines as requested
  const taglines = [
    `Crafting Digital Experiences That Perform as Good as They Look`,
    `Building Tomorrow's Web, Solving Today's Problems`,
    `Code That Converts: Web Development With Business Impact`,
    `Bridging Design and Functionality: Web Solutions That Work`,
    `Digital Craftsmanship for the Modern Web`,
    `Transforming Ideas into Pixel-Perfect Reality`,
    `Beyond Websites: Creating Digital Experiences That Matter`,
    `Code. Create. Convert. Your Vision, My Expertise`,
    `Where Technical Excellence Meets Creative Innovation`,
    `Web Development That Works as Hard as You Do`
  ];
  
  const handleTaglineChange = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % taglines.length);
  };
  
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className="mb-6 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
              <Sparkles className="mr-2 h-4 w-4" />
              Branding Options
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Potential Taglines for {developerName}
          </motion.h2>
          
          <motion.div
            className="bg-card p-8 md:p-10 rounded-xl shadow-sm border border-border mb-8 min-h-[120px] flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            key={currentIndex} // Force motion animation on index change
          >
            <p className="text-xl md:text-2xl font-medium italic text-center">
              "{taglines[currentIndex]}"
            </p>
          </motion.div>
          
          <Button
            onClick={handleTaglineChange}
            variant="outline"
            size="lg"
            className="gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Show Another Tagline
          </Button>
        </div>
      </div>
    </section>
  );
}