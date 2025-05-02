import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type ProjectCategory = 'all' | 'web' | 'e-commerce' | 'mobile';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: ProjectCategory;
  technologies: string[];
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Modern Business Website",
      description: "A sleek corporate website with custom animations and interactive elements",
      imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "web",
      technologies: ["React", "TailwindCSS"]
    },
    {
      id: 2,
      title: "Fashion E-commerce Platform",
      description: "A full-featured online store with product filtering and secure checkout",
      imageUrl: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "e-commerce",
      technologies: ["Next.js", "Shopify"]
    },
    {
      id: 3,
      title: "Fitness Tracking App",
      description: "A mobile app that helps users track workouts and manage fitness goals",
      imageUrl: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "mobile",
      technologies: ["React Native", "Firebase"]
    },
    {
      id: 4,
      title: "SaaS Dashboard",
      description: "A complex data visualization dashboard for a marketing platform",
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "web",
      technologies: ["Vue.js", "D3.js"]
    },
    {
      id: 5,
      title: "Food Delivery Platform",
      description: "An online ordering system for a restaurant chain with real-time tracking",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "e-commerce",
      technologies: ["React", "Node.js"]
    },
    {
      id: 6,
      title: "Real Estate Browser",
      description: "A mobile app for browsing and filtering real estate listings",
      imageUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "mobile",
      technologies: ["Flutter", "GraphQL"]
    }
  ];

  const filters: {label: string; value: ProjectCategory}[] = [
    { label: "All", value: "all" },
    { label: "Web Design", value: "web" },
    { label: "E-commerce", value: "e-commerce" },
    { label: "Mobile App", value: "mobile" }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Work</h2>
          <p className="text-lg text-muted-foreground">
            Browse through some of my recent projects and see how I've helped clients achieve their digital goals.
          </p>
        </motion.div>
        
        {/* Portfolio filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              className={cn(
                "px-4 py-2 rounded-md",
                activeFilter === filter.value ? "bg-primary text-white" : ""
              )}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </Button>
          ))}
        </div>
        
        {/* Portfolio grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="portfolio-item relative overflow-hidden rounded-xl group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-200 text-sm mb-3">{item.description}</p>
                <div className="flex gap-2">
                  {item.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-primary/20 text-white rounded text-xs">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Button 
            asChild
            variant="link" 
            className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
          >
            <a href="#contact">
              Like what you see? Let's work together
              <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
