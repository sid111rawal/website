import { db } from "./index";
import * as schema from "@shared/schema";

async function seed() {
  try {
    console.log("Starting seed process...");

    // Check if we already have projects seeded
    const existingProjects = await db.query.projects.findMany();
    
    if (existingProjects.length === 0) {
      console.log("Seeding portfolio projects...");
      
      // Project data based on the design
      const projectsData = [
        {
          title: "Modern Business Website",
          description: "A sleek corporate website with custom animations and interactive elements",
          imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          category: "web",
          technologies: ["React", "TailwindCSS"]
        },
        {
          title: "Fashion E-commerce Platform",
          description: "A full-featured online store with product filtering and secure checkout",
          imageUrl: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          category: "e-commerce",
          technologies: ["Next.js", "Shopify"]
        },
        {
          title: "Fitness Tracking App",
          description: "A mobile app that helps users track workouts and manage fitness goals",
          imageUrl: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          category: "mobile",
          technologies: ["React Native", "Firebase"]
        },
        {
          title: "SaaS Dashboard",
          description: "A complex data visualization dashboard for a marketing platform",
          imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          category: "web",
          technologies: ["Vue.js", "D3.js"]
        },
        {
          title: "Food Delivery Platform",
          description: "An online ordering system for a restaurant chain with real-time tracking",
          imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          category: "e-commerce",
          technologies: ["React", "Node.js"]
        },
        {
          title: "Real Estate Browser",
          description: "A mobile app for browsing and filtering real estate listings",
          imageUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          category: "mobile",
          technologies: ["Flutter", "GraphQL"]
        }
      ];
      
      // Insert each project and its technologies
      for (const projectData of projectsData) {
        const { technologies, ...projectDetails } = projectData;
        
        // Insert project
        const [newProject] = await db.insert(schema.projects).values({
          title: projectDetails.title,
          description: projectDetails.description,
          imageUrl: projectDetails.imageUrl,
          category: projectDetails.category
        }).returning();
        
        // Insert technologies
        if (technologies.length > 0) {
          await db.insert(schema.projectTechnologies).values(
            technologies.map(tech => ({
              projectId: newProject.id,
              technology: tech
            }))
          );
        }
        
        console.log(`Inserted project: ${projectDetails.title}`);
      }
    } else {
      console.log(`Found ${existingProjects.length} existing projects, skipping project seed.`);
    }
    
    // Check if we already have testimonials seeded
    const existingTestimonials = await db.query.testimonials.findMany();
    
    if (existingTestimonials.length === 0) {
      console.log("Seeding testimonials...");
      
      // Testimonial data based on the design
      const testimonialsData = [
        {
          name: "Emily Johnson",
          role: "CEO",
          company: "Tech Startup",
          image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
          rating: 5,
          text: "John completely transformed our website. Not only does it look amazing, but we've seen a 40% increase in user engagement and a significant boost in conversions. His attention to detail and technical expertise are unmatched.",
          project: "Company Website Redesign"
        },
        {
          name: "Michael Thompson",
          role: "E-commerce Business Owner",
          company: "Fashion Brand",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
          rating: 5,
          text: "Working with John was exceptional. The e-commerce site he built has dramatically improved our sales process. His understanding of user behavior and conversion optimization was invaluable. The site loads quickly and customers love how easy it is to use.",
          project: "E-commerce Platform Development"
        },
        {
          name: "Sarah Rodriguez",
          role: "Marketing Director",
          company: "Agency",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
          rating: 5,
          text: "John's work on our marketing website was superb. He implemented everything with SEO in mind from the start, and our organic traffic has increased by 150% since launch. His communication was clear and he delivered ahead of schedule.",
          project: "SEO-Optimized Marketing Website"
        }
      ];
      
      // Insert testimonials
      for (const testimonialData of testimonialsData) {
        await db.insert(schema.testimonials).values(testimonialData);
        console.log(`Inserted testimonial from: ${testimonialData.name}`);
      }
    } else {
      console.log(`Found ${existingTestimonials.length} existing testimonials, skipping testimonial seed.`);
    }
    
    console.log("Seed completed successfully!");
  } catch (error) {
    console.error("Error during seed process:", error);
  }
}

seed();
