import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
  project: string;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Emily Johnson",
      role: "CEO",
      company: "Tech Startup",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 5,
      text: "John completely transformed our website. Not only does it look amazing, but we've seen a 40% increase in user engagement and a significant boost in conversions. His attention to detail and technical expertise are unmatched.",
      project: "Company Website Redesign"
    },
    {
      id: 2,
      name: "Michael Thompson",
      role: "E-commerce Business Owner",
      company: "Fashion Brand",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 5,
      text: "Working with John was exceptional. The e-commerce site he built has dramatically improved our sales process. His understanding of user behavior and conversion optimization was invaluable. The site loads quickly and customers love how easy it is to use.",
      project: "E-commerce Platform Development"
    },
    {
      id: 3,
      name: "Sarah Rodriguez",
      role: "Marketing Director",
      company: "Agency",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 5,
      text: "John's work on our marketing website was superb. He implemented everything with SEO in mind from the start, and our organic traffic has increased by 150% since launch. His communication was clear and he delivered ahead of schedule.",
      project: "SEO-Optimized Marketing Website"
    }
  ];

  const maxIndex = testimonials.length - (isMobile ? 1 : 2);

  const updatePosition = () => {
    if (sliderRef.current) {
      const slidePercentage = isMobile ? 100 : 50;
      sliderRef.current.style.transform = `translateX(-${activeIndex * slidePercentage}%)`;
    }
  };

  useEffect(() => {
    updatePosition();
  }, [activeIndex, isMobile]);

  const goToPrevious = () => {
    setActiveIndex(prev => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setActiveIndex(prev => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground">
            Here's what some of my clients have to say about my work and our collaboration.
          </p>
        </motion.div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${activeIndex * (isMobile ? 100 : 50)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <motion.div 
                  key={testimonial.id}
                  className="w-full lg:w-1/2 flex-shrink-0 px-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-card p-8 rounded-xl shadow-sm border border-border h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full overflow-hidden">
                        <img src={testimonial.image} alt={testimonial.name} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex text-yellow-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <blockquote className="italic text-muted-foreground mb-4">
                      "{testimonial.text}"
                    </blockquote>
                    <p className="text-sm text-muted-foreground">Project: {testimonial.project}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <Button 
            onClick={goToPrevious}
            disabled={activeIndex === 0}
            className="testimonial-prev absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            size="icon"
            variant="ghost"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button 
            onClick={goToNext}
            disabled={activeIndex >= maxIndex}
            className="testimonial-next absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            size="icon"
            variant="ghost"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
