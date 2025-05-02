import { Check, Code, Layout, Zap } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
  hoverColor: string;
  delay: number;
}

const ServiceItem = ({ icon, title, description, features, color, hoverColor, delay }: ServiceItemProps) => {
  return (
    <motion.div 
      className="service-card group bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className={`service-icon w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-6 ${hoverColor} transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className={`text-xl font-bold mb-3 group-hover:${hoverColor} transition-colors duration-300`}>
        {title}
      </h3>
      <p className="text-muted-foreground mb-4">
        {description}
      </p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default function Services() {
  const services = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web Development",
      description: "Custom-built responsive websites and web applications using modern technologies and best practices.",
      features: [
        "Responsive Design",
        "Frontend & Backend Development",
        "E-commerce Solutions"
      ],
      color: "bg-primary/10 dark:bg-primary/20",
      hoverColor: "text-primary",
      delay: 0.1
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive, engaging, and accessible digital experiences.",
      features: [
        "User Research & Personas",
        "Wireframing & Prototyping",
        "Visual Design & Branding"
      ],
      color: "bg-secondary/10 dark:bg-secondary/20",
      hoverColor: "text-secondary",
      delay: 0.2
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "Speed up your website to increase conversions, improve user experience, and boost SEO rankings.",
      features: [
        "Performance Auditing",
        "Image & Asset Optimization",
        "Core Web Vitals Improvement"
      ],
      color: "bg-accent/10 dark:bg-accent/20",
      hoverColor: "text-accent",
      delay: 0.3
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive web development solutions tailored to your specific needs and business goals.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceItem 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              color={service.color}
              hoverColor={service.hoverColor}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
