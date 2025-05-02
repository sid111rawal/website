import { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Tag, ChevronRight, Download } from "lucide-react";

// Define the content calendar type
interface ContentItem {
  title: string;
  description: string;
  week: number;
  tags: string[];
}

interface ContentMonth {
  name: string;
  focus: string;
  items: ContentItem[];
}

export default function ContentCalendarPage() {
  const [activeMonth, setActiveMonth] = useState("1");
  
  // Content calendar for JavaScript frameworks blog (6 months)
  const contentCalendar: ContentMonth[] = [
    {
      name: "Month 1",
      focus: "React Fundamentals & Best Practices",
      items: [
        {
          title: "React in 2025: What's Changed and What Remains Essential",
          description: "A comprehensive overview of React's evolution and the core principles that continue to make it a leading frontend framework.",
          week: 1,
          tags: ["React", "JavaScript", "Web Development"]
        },
        {
          title: "Performance Optimization Techniques for React Applications",
          description: "Practical strategies to improve React app performance, from component memoization to bundle optimization.",
          week: 2,
          tags: ["React", "Performance", "Optimization"]
        },
        {
          title: "State Management Battle: Context API vs. Redux vs. Zustand",
          description: "A detailed comparison of popular state management solutions for React applications with practical examples.",
          week: 3,
          tags: ["React", "State Management", "Redux", "Context API"]
        },
        {
          title: "Building Accessible React Components: A Comprehensive Guide",
          description: "Best practices for creating accessible UI components in React, including ARIA attributes, keyboard navigation, and screen reader support.",
          week: 4,
          tags: ["React", "Accessibility", "UI Components"]
        }
      ]
    },
    {
      name: "Month 2",
      focus: "Next.js Deep Dive",
      items: [
        {
          title: "Next.js App Router: Migration Guide and Best Practices",
          description: "A step-by-step guide to migrating from Pages Router to App Router, with strategies for handling complex use cases.",
          week: 1,
          tags: ["Next.js", "App Router", "Migration"]
        },
        {
          title: "Server Components vs. Client Components: Making the Right Choice",
          description: "Decision framework for choosing between server and client components in Next.js applications.",
          week: 2,
          tags: ["Next.js", "Server Components", "React"]
        },
        {
          title: "Next.js Deployment Strategies: Vercel, AWS, and Self-Hosted Options",
          description: "Comparing deployment options for Next.js applications with practical configuration examples.",
          week: 3,
          tags: ["Next.js", "Deployment", "DevOps"]
        },
        {
          title: "Building a Full-Stack Application with Next.js and Prisma",
          description: "End-to-end tutorial on creating a complete web application with Next.js, Prisma ORM, and PostgreSQL.",
          week: 4,
          tags: ["Next.js", "Prisma", "Full-Stack"]
        }
      ]
    },
    {
      name: "Month 3",
      focus: "Vue.js Exploration",
      items: [
        {
          title: "Vue 3 Composition API: Practical Examples and Use Cases",
          description: "Hands-on guide to Vue 3's Composition API with real-world examples demonstrating its advantages over Options API.",
          week: 1,
          tags: ["Vue.js", "Composition API", "JavaScript"]
        },
        {
          title: "Pinia vs. Vuex: Modern State Management for Vue Applications",
          description: "Comparing Vue's state management libraries with migration strategies and performance benchmarks.",
          week: 2,
          tags: ["Vue.js", "Pinia", "Vuex", "State Management"]
        },
        {
          title: "Building Large-Scale Applications with Nuxt 3",
          description: "Architecture patterns and organizational strategies for enterprise-level Nuxt 3 applications.",
          week: 3,
          tags: ["Vue.js", "Nuxt", "Enterprise"]
        },
        {
          title: "Migrating from Vue 2 to Vue 3: Strategies and Pitfalls",
          description: "Practical migration path from Vue 2 to Vue 3, including handling breaking changes and leveraging new features.",
          week: 4,
          tags: ["Vue.js", "Migration", "Upgrade"]
        }
      ]
    },
    {
      name: "Month 4",
      focus: "Angular Focus",
      items: [
        {
          title: "Modern Angular Development in 2025: What's Changed",
          description: "Overview of Angular's latest features, performance improvements, and ecosystem changes.",
          week: 1,
          tags: ["Angular", "JavaScript", "TypeScript"]
        },
        {
          title: "RxJS Mastery: Simplifying Complex Asynchronous Operations",
          description: "Deep dive into RxJS operators and patterns for managing complex async flows in Angular applications.",
          week: 2,
          tags: ["Angular", "RxJS", "Async"]
        },
        {
          title: "Angular Signals vs. NgRx: When to Use Each",
          description: "Decision framework for choosing between Angular's new Signals API and NgRx for state management.",
          week: 3,
          tags: ["Angular", "Signals", "NgRx", "State Management"]
        },
        {
          title: "Building High-Performance Angular Applications: Advanced Techniques",
          description: "Strategies for optimizing Angular applications, including change detection, lazy loading, and server-side rendering.",
          week: 4,
          tags: ["Angular", "Performance", "Optimization"]
        }
      ]
    },
    {
      name: "Month 5",
      focus: "Emerging Frameworks & Alternatives",
      items: [
        {
          title: "Svelte and SvelteKit: Building Fast, Efficient Web Applications",
          description: "Introduction to Svelte's compiler-based approach and building full-stack applications with SvelteKit.",
          week: 1,
          tags: ["Svelte", "SvelteKit", "JavaScript"]
        },
        {
          title: "Solid.js: React-like Development with Better Performance",
          description: "Exploring Solid.js's reactive primitives and how they enable React-like development with improved performance.",
          week: 2,
          tags: ["Solid.js", "JavaScript", "Performance"]
        },
        {
          title: "Exploring Qwik: The HTML-First Framework",
          description: "Deep dive into Qwik's resumability model and how it enables near-instant page loads.",
          week: 3,
          tags: ["Qwik", "Performance", "JavaScript"]
        },
        {
          title: "Astro: The Future of Multi-Framework Development",
          description: "How Astro enables using multiple frameworks in a single project while delivering optimized static sites.",
          week: 4,
          tags: ["Astro", "Multi-framework", "Static Sites"]
        }
      ]
    },
    {
      name: "Month 6",
      focus: "Cross-Framework Topics",
      items: [
        {
          title: "Framework Performance Showdown: Benchmarking the Top Contenders",
          description: "Comparative performance analysis of React, Vue, Angular, Svelte, and other frameworks across various metrics.",
          week: 1,
          tags: ["Performance", "Benchmarking", "Frameworks"]
        },
        {
          title: "Microfrontends: Integrating Multiple Frameworks in One Application",
          description: "Architectural patterns and implementation strategies for microfrontends using different JavaScript frameworks.",
          week: 2,
          tags: ["Microfrontends", "Architecture", "Integration"]
        },
        {
          title: "Isomorphic JavaScript: Server-Side Rendering Across Frameworks",
          description: "Comparative analysis of SSR approaches in React, Vue, Angular, and other frameworks.",
          week: 3,
          tags: ["SSR", "Isomorphic", "JavaScript"]
        },
        {
          title: "The Future of JavaScript Frameworks: Trends and Predictions",
          description: "Analysis of emerging patterns, compiler-based approaches, and predictions for the next generation of frameworks.",
          week: 4,
          tags: ["Future", "Trends", "JavaScript"]
        }
      ]
    },
  ];
  
  return (
    <>
      <Helmet>
        <title>JavaScript Frameworks Content Calendar | John Doe</title>
        <meta 
          name="description" 
          content="6-month content calendar covering React, Next.js, Vue, Angular, and emerging JavaScript frameworks for web developers." 
        />
        <meta 
          name="keywords" 
          content="JavaScript frameworks, content calendar, React, Next.js, Vue, Angular, web development blog" 
        />
      </Helmet>
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                JavaScript Frameworks Content Calendar
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                A comprehensive 6-month plan for a technical blog focused on modern JavaScript frameworks and web development.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button size="lg" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download Full Calendar
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Content Calendar */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <Tabs 
                defaultValue="1" 
                value={activeMonth}
                onValueChange={setActiveMonth}
                className="space-y-8"
              >
                <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full">
                  {contentCalendar.map((month, index) => (
                    <TabsTrigger 
                      key={index + 1} 
                      value={(index + 1).toString()}
                      className="text-sm md:text-base"
                    >
                      {month.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {contentCalendar.map((month, index) => (
                  <TabsContent key={index + 1} value={(index + 1).toString()} className="space-y-8">
                    <div className="space-y-4">
                      <h2 className="text-2xl md:text-3xl font-bold">{month.name}: {month.focus}</h2>
                      <p className="text-muted-foreground">
                        Each article should be 1,500-2,500 words with code examples, diagrams, and practical tips.
                      </p>
                    </div>
                    
                    <div className="space-y-6">
                      {month.items.map((item, itemIndex) => (
                        <motion.div 
                          key={itemIndex}
                          className="bg-card rounded-xl p-6 shadow-sm border border-border"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                        >
                          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                            <Calendar className="h-4 w-4" />
                            <span>Week {item.week}</span>
                            <span className="mx-2">•</span>
                            <Clock className="h-4 w-4" />
                            <span>Est. reading time: 8-10 min</span>
                          </div>
                          
                          <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                          <p className="text-muted-foreground mb-4">{item.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {item.tags.map((tag, tagIndex) => (
                              <span 
                                key={tagIndex} 
                                className="px-2 py-1 bg-primary/10 text-primary rounded text-xs flex items-center gap-1"
                              >
                                <Tag className="h-3 w-3" />
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <Button 
                            variant="link" 
                            className="p-0 h-auto text-primary flex items-center"
                          >
                            View Content Outline
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>
        
        {/* Editorial Guidelines */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Editorial Guidelines</h2>
              <div className="space-y-8">
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                  <h3 className="font-bold mb-2">Content Format</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Each article should have a clear introduction, body with 3-5 main sections, and conclusion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Include working code examples with explanations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Use diagrams or illustrations to explain complex concepts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>End with practical takeaways or next steps for readers</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                  <h3 className="font-bold mb-2">Technical Depth</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Assume intermediate knowledge of JavaScript and web development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Explain framework-specific concepts from first principles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Include both basic examples and advanced use cases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Link to relevant documentation or additional resources</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                  <h3 className="font-bold mb-2">Publication Schedule</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Publish one article per week, consistently on the same day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Promote across social media channels and developer communities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Prepare content at least two weeks in advance of publication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Revisit and update older articles as frameworks evolve</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}