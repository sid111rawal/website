import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  variant?: "primary" | "secondary" | "tertiary" | "quaternary" | "quinary";
}

export default function CTASection({ variant = "primary" }: CTAProps) {
  // Collection of compelling CTA headlines as requested
  const ctaVariants = {
    primary: {
      headline: "Transform Your Digital Vision Into Reality — Let's Build Together",
      subtext: "Ready to create a website that truly represents your brand and delivers results?",
      buttonText: "Start Your Project",
    },
    secondary: {
      headline: "Ready for a Website That Works as Hard as You Do? Let's Talk",
      subtext: "Schedule a free consultation to discuss how we can help your business grow online.",
      buttonText: "Schedule Consultation",
    },
    tertiary: {
      headline: "Don't Just Exist Online — Stand Out. Start Your Project Today",
      subtext: "In a crowded digital landscape, your website needs to capture attention and drive action.",
      buttonText: "Let's Make It Happen",
    },
    quaternary: {
      headline: "Elevate Your Digital Presence. Schedule Your Free Consultation",
      subtext: "Discover how a professionally designed website can transform your business.",
      buttonText: "Book Your Call",
    },
    quinary: {
      headline: "From Concept to Code to Conversion — Begin Your Journey Now",
      subtext: "Turn your vision into a high-performing website that converts visitors into customers.",
      buttonText: "Start the Journey",
    },
  };

  const selectedCTA = ctaVariants[variant];

  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {selectedCTA.headline}
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {selectedCTA.subtext}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-6">
              {selectedCTA.buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}