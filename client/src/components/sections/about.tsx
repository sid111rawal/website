import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/config";

export default function About() {
  const skills = [
    "HTML5/CSS3",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "UI/UX Design",
    "Responsive Design",
    "SEO Optimization"
  ];

  return (
    <section id="about" className="py-20 bg-muted/50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
              <p className="text-lg text-muted-foreground mb-6">
                I'm Sid Rawal, a passionate web developer with over 5 years of experience creating exceptional digital experiences. I combine technical expertise with a keen eye for design to build websites that not only look great but also perform flawlessly.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                My journey in web development began when I built my first website in college. Since then, I've worked with startups, agencies, and established companies to create digital solutions that drive business growth.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                I specialize in building responsive, user-friendly websites and web applications using modern technologies. My goal is to deliver high-quality work that exceeds client expectations and helps them achieve their business objectives.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold">My Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-lg opacity-50"></div>
              <div className="relative bg-card p-6 rounded-xl shadow-sm overflow-hidden border border-border">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 dark:bg-primary/20 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 dark:bg-secondary/20 rounded-full -ml-16 -mb-16"></div>
                
                <div className="relative z-10">
                  <img 
                    src="/images/my-new-profile.png"
                    alt="Sid Rawal - Web Developer" 
                    className="w-full h-auto rounded-lg mb-6"
                  />
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                    <h4 className="text-sm text-muted-foreground mb-1">Location</h4>
                    <p className="font-medium">Toronto, Canada and India</p>                  </div>
                    <div>
                      <h4 className="text-sm text-muted-foreground mb-1">Experience</h4>
                      <p className="font-medium">5+ Years</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-muted-foreground mb-1">Availability</h4>
                      <p className="font-medium">Freelance & Full-time</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-muted-foreground mb-1">Languages</h4>
                      <p className="font-medium">English, Hindi</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={SOCIAL_LINKS.linkedin}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors" 
                      aria-label="LinkedIn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
