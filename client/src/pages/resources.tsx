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
import { ChevronRight, ExternalLink, BookOpen, Code, Server, Box, Globe, Settings, FileText, Layout } from "lucide-react";
import CTASection from "@/components/sections/cta-section";

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState("frontend");
  
  return (
    <>
      <Helmet>
        <title>Web Development Resources | John Doe</title>
        <meta 
          name="description" 
          content="Comprehensive resources for modern web development including frontend frameworks, backend options, hosting, and design best practices." 
        />
        <meta 
          name="keywords" 
          content="web development resources, React, Next.js, backend options, hosting, SEO" 
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
                Web Development Resources
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                A comprehensive guide to modern web development technologies, tools, and best practices.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Resources Tabs */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <Tabs 
                defaultValue="frontend" 
                value={activeTab}
                onValueChange={setActiveTab}
                className="space-y-8"
              >
                <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
                  <TabsTrigger value="frontend" className="gap-2">
                    <Code className="h-4 w-4" />
                    <span className="hidden sm:inline">Frontend</span>
                  </TabsTrigger>
                  <TabsTrigger value="backend" className="gap-2">
                    <Server className="h-4 w-4" />
                    <span className="hidden sm:inline">Backend</span>
                  </TabsTrigger>
                  <TabsTrigger value="hosting" className="gap-2">
                    <Globe className="h-4 w-4" />
                    <span className="hidden sm:inline">Hosting</span>
                  </TabsTrigger>
                  <TabsTrigger value="structure" className="gap-2">
                    <Layout className="h-4 w-4" />
                    <span className="hidden sm:inline">Site Structure</span>
                  </TabsTrigger>
                </TabsList>
                
                {/* Frontend Tab */}
                <TabsContent value="frontend" className="space-y-6">
                  <div className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h2 className="text-2xl font-bold">Frontend Frameworks</h2>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        Essential
                      </span>
                    </div>
                    
                    <div className="prose prose-lg max-w-none dark:prose-invert">
                      <p>
                        Modern JavaScript frameworks create fast, interactive user interfaces. Popular choices include:
                      </p>
                      
                      <ul className="space-y-4 mt-4">
                        <li className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center flex-shrink-0 mt-1">
                            <Box className="h-4 w-4" />
                          </div>
                          <div>
                            <strong>React with Next.js</strong> - React powers component-based UIs while Next.js adds server-side rendering, static generation, and routing. Great for SEO and performance.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 flex items-center justify-center flex-shrink-0 mt-1">
                            <Box className="h-4 w-4" />
                          </div>
                          <div>
                            <strong>Vue.js with Nuxt</strong> - Approachable framework with gentle learning curve. Nuxt provides similar benefits to Next.js in the Vue ecosystem.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 flex items-center justify-center flex-shrink-0 mt-1">
                            <Box className="h-4 w-4" />
                          </div>
                          <div>
                            <strong>Svelte with SvelteKit</strong> - Compiler-based approach that ships minimal JavaScript. SvelteKit provides full-stack capabilities.
                          </div>
                        </li>
                      </ul>
                      
                      <p className="mt-4">
                        These frameworks support server-side rendering and static generation, making pages load quickly and ensuring good SEO. 
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6">CSS Solutions</h3>
                      
                      <p>
                        For styling, consider these modern approaches:
                      </p>
                      
                      <ul className="space-y-2 mt-2">
                        <li><strong>Tailwind CSS</strong> - Utility-first CSS framework for rapid, custom styling without writing CSS</li>
                        <li><strong>CSS Modules</strong> - Scoped CSS that prevents styling conflicts</li>
                        <li><strong>Styled Components</strong> - CSS-in-JS with dynamic styling based on props</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold mt-6">UI Components</h3>
                      
                      <p>
                        Don't reinvent the wheel. Use component libraries for accessible UI elements:
                      </p>
                      
                      <ul className="space-y-2 mt-2">
                        <li><strong>Radix UI</strong> - Unstyled, accessible components you can customize with your own styles</li>
                        <li><strong>Headless UI</strong> - Similar to Radix, pairs well with Tailwind CSS</li>
                        <li><strong>Chakra UI / Material UI</strong> - Pre-styled components for faster development</li>
                      </ul>
                      
                      <p className="mt-4">
                        For animations, <strong>Framer Motion</strong> provides smooth transitions and interactive effects while maintaining good performance.
                      </p>
                    </div>
                    
                    <div className="mt-6 flex flex-wrap gap-4">
                      <Button variant="outline" className="gap-2" asChild>
                        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
                          Next.js Docs
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      
                      <Button variant="outline" className="gap-2" asChild>
                        <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
                          Tailwind CSS
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      
                      <Button variant="outline" className="gap-2" asChild>
                        <a href="https://www.radix-ui.com" target="_blank" rel="noopener noreferrer">
                          Radix UI
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                {/* Backend Tab */}
                <TabsContent value="backend" className="space-y-6">
                  <div className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h2 className="text-2xl font-bold">Backend Options</h2>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        Flexible
                      </span>
                    </div>
                    
                    <div className="prose prose-lg max-w-none dark:prose-invert">
                      <p>
                        For dynamic functionality like form handling, authentication, and database operations, you have several options:
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6">Traditional Backends</h3>
                      
                      <ul className="space-y-4 mt-4">
                        <li className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 flex items-center justify-center flex-shrink-0 mt-1">
                            <Server className="h-4 w-4" />
                          </div>
                          <div>
                            <strong>Node.js with Express/Fastify</strong> - JavaScript on the server, minimal and flexible. Great for APIs and works well with MongoDB or PostgreSQL databases.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center flex-shrink-0 mt-1">
                            <Server className="h-4 w-4" />
                          </div>
                          <div>
                            <strong>Python with Django/Flask</strong> - Python's ecosystem offers robust options from minimal (Flask) to batteries-included (Django).
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 flex items-center justify-center flex-shrink-0 mt-1">
                            <Server className="h-4 w-4" />
                          </div>
                          <div>
                            <strong>Ruby on Rails</strong> - Mature full-stack framework with convention over configuration approach.
                          </div>
                        </li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold mt-6">Serverless Approach</h3>
                      
                      <p>
                        Modern alternatives with less maintenance overhead:
                      </p>
                      
                      <ul className="space-y-2 mt-2">
                        <li><strong>Firebase</strong> - Full-featured backend as a service with auth, database, storage</li>
                        <li><strong>Supabase</strong> - Open-source Firebase alternative with PostgreSQL database</li>
                        <li><strong>AWS Lambda / Vercel Functions</strong> - Serverless functions for specific tasks</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold mt-6">Full-Stack Frameworks</h3>
                      
                      <p>
                        For a unified approach, these frameworks handle both frontend and backend:
                      </p>
                      
                      <ul className="space-y-2 mt-2">
                        <li><strong>Next.js</strong> - React framework with API routes and full-stack capabilities</li>
                        <li><strong>Nuxt.js</strong> - Similar to Next.js but for Vue</li>
                        <li><strong>SvelteKit</strong> - Full-stack framework for Svelte applications</li>
                        <li><strong>Remix</strong> - React framework focusing on web fundamentals and nested routing</li>
                      </ul>
                      
                      <div className="bg-muted/50 p-4 rounded-lg mt-6">
                        <h4 className="text-lg font-medium">Static Sites with APIs</h4>
                        <p className="text-sm mt-1">
                          If your site is mostly static, you might not need a traditional backend. Consider the Jamstack approach: pre-rendered pages (built with Next.js, Astro, etc.) that fetch data from APIs as needed.
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex flex-wrap gap-4">
                      <Button variant="outline" className="gap-2" asChild>
                        <a href="https://expressjs.com" target="_blank" rel="noopener noreferrer">
                          Express.js
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      
                      <Button variant="outline" className="gap-2" asChild>
                        <a href="https://firebase.google.com" target="_blank" rel="noopener noreferrer">
                          Firebase
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      
                      <Button variant="outline" className="gap-2" asChild>
                        <a href="https://supabase.com" target="_blank" rel="noopener noreferrer">
                          Supabase
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                {/* Hosting Tab */}
                <TabsContent value="hosting" className="space-y-6">
                  <div className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h2 className="text-2xl font-bold">Hosting & Deployment</h2>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        Performance
                      </span>
                    </div>
                    
                    <div className="prose prose-lg max-w-none dark:prose-invert">
                      <p>
                        Modern hosting platforms make deployment seamless with features like automatic builds, global CDNs, and preview environments.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6">Static & Jamstack Hosting</h3>
                      
                      <ul className="space-y-4 mt-4">
                        <li className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 mt-1">
                            <Globe className="h-4 w-4" />
                          </div>
                          <div>
                            <strong>Vercel</strong> - Perfect for Next.js deployments with automatic preview deployments, analytics, and global edge network. Makes CI/CD effortless with GitHub integration.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300 flex items-center justify-center flex-shrink-0 mt-1">
                            <Globe className="h-4 w-4" />
                          </div>
                          <div>
                            <strong>Netlify</strong> - Similar to Vercel with additional features like form handling and serverless functions. Great for any static site or Jamstack application.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 flex items-center justify-center flex-shrink-0 mt-1">
                            <Globe className="h-4 w-4" />
                          </div>
                          <div>
                            <strong>Cloudflare Pages</strong> - Fast global deployment with large free tier and integration with Cloudflare's other services.
                          </div>
                        </li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold mt-6">Full-Stack & Container Hosting</h3>
                      
                      <p>
                        For applications with more complex backend needs:
                      </p>
                      
                      <ul className="space-y-2 mt-2">
                        <li><strong>DigitalOcean App Platform</strong> - Simplified PaaS for static sites and containerized apps</li>
                        <li><strong>Heroku</strong> - Pioneer in PaaS, easy deployment but can get expensive</li>
                        <li><strong>AWS (Amplify, Elastic Beanstalk)</strong> - Enterprise-grade but steeper learning curve</li>
                        <li><strong>Railway</strong> - Modern platform for full-stack and database deployments</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold mt-6">CI/CD & DevOps</h3>
                      
                      <p>
                        Automate your build and deployment pipeline:
                      </p>
                      
                      <ul className="space-y-2 mt-2">
                        <li><strong>GitHub Actions</strong> - Integrated CI/CD in your GitHub repository</li>
                        <li><strong>GitLab CI</strong> - Similar to GitHub Actions but for GitLab repositories</li>
                        <li><strong>CircleCI</strong> - Dedicated CI/CD solution with powerful configuration options</li>
                      </ul>
                      
                      <div className="bg-muted/50 p-4 rounded-lg mt-6">
                        <h4 className="text-lg font-medium">Essential Hosting Features</h4>
                        <ul className="text-sm mt-2 space-y-1">
                          <li>• SSL/HTTPS enabled by default</li>
                          <li>• Custom domain support</li>
                          <li>• Automatic builds on Git commits</li>
                          <li>• Preview environments for branches/PRs</li>
                          <li>• Global CDN for fast loading worldwide</li>
                          <li>• Easy rollbacks to previous versions</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex flex-wrap gap-4">
                      <Button variant="outline" className="gap-2" asChild>
                        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
                          Vercel
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      
                      <Button variant="outline" className="gap-2" asChild>
                        <a href="https://netlify.com" target="_blank" rel="noopener noreferrer">
                          Netlify
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      
                      <Button variant="outline" className="gap-2" asChild>
                        <a href="https://pages.cloudflare.com" target="_blank" rel="noopener noreferrer">
                          Cloudflare Pages
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                {/* Site Structure Tab */}
                <TabsContent value="structure" className="space-y-6">
                  <div className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h2 className="text-2xl font-bold">Website Structure & Pages</h2>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        Organization
                      </span>
                    </div>
                    
                    <div className="prose prose-lg max-w-none dark:prose-invert">
                      <p>
                        A clear, intuitive structure helps visitors navigate your site and find information quickly. Here's a recommended page structure for a professional website:
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6">Essential Pages</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6 mt-4">
                        <div className="bg-muted/20 p-5 rounded-lg border border-border/50">
                          <h4 className="font-bold text-lg mb-2">Home</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Hero section with name/title and tagline</li>
                            <li>• Featured projects (2-3 with visuals)</li>
                            <li>• Brief introduction of services</li>
                            <li>• About me teaser section</li>
                            <li>• Primary call-to-action buttons</li>
                            <li>• Sticky navigation bar</li>
                          </ul>
                        </div>
                        
                        <div className="bg-muted/20 p-5 rounded-lg border border-border/50">
                          <h4 className="font-bold text-lg mb-2">Services</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Detailed description of each service</li>
                            <li>• Benefits or process for each service</li>
                            <li>• Optional pricing information</li>
                            <li>• Icons or images for visual appeal</li>
                            <li>• Service-specific CTAs</li>
                            <li>• Testimonials or client logos</li>
                          </ul>
                        </div>
                        
                        <div className="bg-muted/20 p-5 rounded-lg border border-border/50">
                          <h4 className="font-bold text-lg mb-2">Portfolio / Projects</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Grid/gallery of project screenshots</li>
                            <li>• Brief descriptions for each project</li>
                            <li>• Technologies used per project</li>
                            <li>• Filter options by category</li>
                            <li>• Links to case studies or live sites</li>
                            <li>• Visual focus with high-quality images</li>
                          </ul>
                        </div>
                        
                        <div className="bg-muted/20 p-5 rounded-lg border border-border/50">
                          <h4 className="font-bold text-lg mb-2">About</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Professional photo of yourself</li>
                            <li>• Your background and experience</li>
                            <li>• Skills and expertise (visual elements)</li>
                            <li>• Education and certifications</li>
                            <li>• Personal story and motivation</li>
                            <li>• Downloadable résumé/CV</li>
                          </ul>
                        </div>
                        
                        <div className="bg-muted/20 p-5 rounded-lg border border-border/50">
                          <h4 className="font-bold text-lg mb-2">Blog (Optional)</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• List of articles with featured images</li>
                            <li>• Publication dates and read times</li>
                            <li>• Category/tag filtering</li>
                            <li>• Search functionality</li>
                            <li>• Clean typography for readability</li>
                            <li>• Social sharing options</li>
                          </ul>
                        </div>
                        
                        <div className="bg-muted/20 p-5 rounded-lg border border-border/50">
                          <h4 className="font-bold text-lg mb-2">Contact</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Simple contact form (essential fields only)</li>
                            <li>• Email address with mailto link</li>
                            <li>• Alternative contact methods</li>
                            <li>• Social media profile links</li>
                            <li>• Optional scheduling link (Calendly)</li>
                            <li>• Anti-spam measures</li>
                          </ul>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold mt-8">Additional Considerations</h3>
                      
                      <ul className="mt-4 space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center flex-shrink-0 mt-1">
                            <Settings className="h-4 w-4" />
                          </div>
                          <div>
                            <strong>Accessibility</strong> - Use semantic HTML, ensure keyboard navigation works, provide ARIA labels for dynamic content, and maintain sufficient color contrast. Test with screen readers.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 flex items-center justify-center flex-shrink-0 mt-1">
                            <Settings className="h-4 w-4" />
                          </div>
                          <div>
                            <strong>Performance</strong> - Optimize image sizes, use lazy loading, minify CSS/JS, implement code splitting, and leverage caching. Consider a CDN for faster global delivery.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 flex items-center justify-center flex-shrink-0 mt-1">
                            <Settings className="h-4 w-4" />
                          </div>
                          <div>
                            <strong>Mobile Responsiveness</strong> - Design mobile-first, use responsive layouts with flexbox/grid, ensure touch targets are large enough, and test on various device sizes.
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="mt-6 flex flex-wrap gap-4">
                      <Button variant="outline" className="gap-2" asChild>
                        <a href="https://kinsta.com/blog/web-developer-portfolio/" target="_blank" rel="noopener noreferrer">
                          Portfolio Inspiration
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      
                      <Button variant="outline" className="gap-2" asChild>
                        <a href="https://blog.uxfol.io/portfolio-tips/" target="_blank" rel="noopener noreferrer">
                          UX Portfolio Tips
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="mt-12 flex justify-center">
                <Button className="gap-2" asChild>
                  <a href="/blog">
                    <BookOpen className="h-4 w-4" />
                    Read Related Blog Posts
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Tech Stack Comparison */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Technology Stack Comparison</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="p-4 text-left font-medium">Stack Type</th>
                      <th className="p-4 text-left font-medium">Technologies</th>
                      <th className="p-4 text-left font-medium">Best For</th>
                      <th className="p-4 text-left font-medium">Considerations</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-4 font-medium">Modern JavaScript</td>
                      <td className="p-4">
                        Next.js, React, TailwindCSS, TypeScript
                      </td>
                      <td className="p-4">
                        Performance-focused sites requiring SEO and interactive UI
                      </td>
                      <td className="p-4">
                        Learning curve for TypeScript, but excellent developer experience
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">JAMstack</td>
                      <td className="p-4">
                        Astro, Netlify/Vercel, Headless CMS
                      </td>
                      <td className="p-4">
                        Content-heavy sites with infrequent updates
                      </td>
                      <td className="p-4">
                        Simple deployment, excellent performance, limited dynamic features
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Full-Stack JS</td>
                      <td className="p-4">
                        MERN (MongoDB, Express, React, Node)
                      </td>
                      <td className="p-4">
                        Applications requiring custom backend logic and APIs
                      </td>
                      <td className="p-4">
                        Single language (JavaScript) throughout stack, more maintenance
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Backend-as-Service</td>
                      <td className="p-4">
                        React/Vue + Firebase/Supabase
                      </td>
                      <td className="p-4">
                        Apps needing auth, real-time data without custom backend
                      </td>
                      <td className="p-4">
                        Quick to build, potential vendor lock-in, pricing scales with usage
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        
        <CTASection variant="quaternary" />
      </main>
      
      <Footer />
    </>
  );
}