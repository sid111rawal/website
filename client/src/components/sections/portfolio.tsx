import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

type ProjectCategory = 'all' | 'web' | 'marketing';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: ProjectCategory;
  technologies: string[];
  url: string;
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  
  const portfolioItems: PortfolioItem[] = [
    // Web Development Projects
    {
      id: 1,
      title: "Maximum Car Detailing",
      description: "Premium car detailing service website with booking system and service showcase",
      imageUrl: "/images/portfolio/maximum.png",
      category: "web",
      technologies: ["React", "Vite", "TailwindCSS"],
      url: "https://car-wash-green.vercel.app/"
    },
    {
      id: 2,
      title: "Lawgical Station",
      description: "Professional legal services platform with modern design and user-friendly interface",
      imageUrl: "/images/portfolio/lawgical.png",
      category: "web",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      url: "https://lawgicalstation.com"
    },
    {
      id: 3,
      title: "Ramason",
      description: "Elegant business website showcasing services and brand identity",
      imageUrl: "/images/portfolio/ramason.png",
      category: "web",
      technologies: ["React", "Next.js", "TailwindCSS"],
      url: "https://ramason.in"
    },
    {
      id: 4,
      title: "Taj Petha",
      description: "Traditional sweets business website with product showcase and ordering system",
      imageUrl: "/images/portfolio/tajpetha.png",
      category: "web",
      technologies: ["React", "Vite", "TailwindCSS"],
      url: "https://tajpetha.in"
    },
    {
      id: 5,
      title: "Level Up Math Academy",
      description: "Educational platform for math learning with course management and booking system",
      imageUrl: "/images/portfolio/leveup.png",
      category: "web",
      technologies: ["React", "Next.js", "TailwindCSS"],
      url: "https://levelupmathacademy.ca/"
    },
    {
      id: 6,
      title: "New Stylo Furniture",
      description: "Modern furniture e-commerce website with product showcase and online ordering",
      imageUrl: "/images/portfolio/newstylo.png",
      category: "web",
      technologies: ["React", "Vite", "TailwindCSS"],
      url: "https://furnitore.com"
    },
    // Digital Marketing Projects
    {
      id: 7,
      title: "Chopra Jewellers",
      description: "Instagram marketing and content strategy for luxury jewelry brand",
      imageUrl: "/images/portfolio/chopra_in.jpg",
      category: "marketing",
      technologies: ["Instagram", "Content Creation", "Social Media"],
      url: "https://www.instagram.com/choprajewellersltd?igsh=aDduZWZjcnl0cmx5"
    },
    {
      id: 8,
      title: "Maximum Car Detailing",
      description: "Social media marketing and Instagram growth strategy for car detailing business",
      imageUrl: "/images/portfolio/maximum_in.jpg",
      category: "marketing",
      technologies: ["Instagram", "Meta Ads", "Lead Generation"],
      url: "https://www.instagram.com/maximumcardetailingto?igsh=eGY1OXgzZGI4MXJy"
    },
    {
      id: 9,
      title: "Lawgical Station",
      description: "Professional Instagram presence and digital marketing for legal services",
      imageUrl: "/images/portfolio/lawgical_in.jpg",
      category: "marketing",
      technologies: ["Instagram", "Content Strategy", "SEO"],
      url: "https://www.instagram.com/lawgical_station?igsh=M3dhaGZ5MjdteG4z"
    },
    {
      id: 10,
      title: "Parantha Palace",
      description: "Restaurant Instagram marketing with food photography and engagement campaigns",
      imageUrl: "/images/portfolio/parantha_in.jpg",
      category: "marketing",
      technologies: ["Instagram", "Food Photography", "Video Content"],
      url: "https://www.instagram.com/parantha_palace?igsh=dWlvenRxd25oanl6"
    }
  ];

  const filters: {label: string; value: ProjectCategory}[] = [
    { label: "All", value: "all" },
    { label: "Web Development", value: "web" },
    { label: "Digital Marketing", value: "marketing" }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
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
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-item relative overflow-hidden rounded-xl group cursor-pointer block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                loading="lazy"
                decoding="async"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  // Fallback to a gradient placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (!target.parentElement?.querySelector('.image-placeholder')) {
                    const placeholder = document.createElement('div');
                    placeholder.className = 'image-placeholder w-full h-64 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center';
                    placeholder.innerHTML = `<span class="text-muted-foreground text-sm">${item.title}</span>`;
                    target.parentElement?.appendChild(placeholder);
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  <ExternalLink className="h-5 w-5 text-white flex-shrink-0 mt-1" />
                </div>
                <p className="text-gray-200 text-sm mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-primary/20 text-white rounded text-xs">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.a>
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
