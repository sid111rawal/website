import { Helmet } from "react-helmet";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import PerformanceOptimization from "@/components/sections/performance-optimization";
import CTASection from "@/components/sections/cta-section";
import { motion } from "framer-motion";
import { Gauge, Star, Rocket, Zap, Cpu, BarChart } from "lucide-react";

export default function PerformancePage() {
  // Performance metrics with explanations
  const webVitals = [
    {
      icon: <Gauge className="h-6 w-6" />,
      name: "Largest Contentful Paint (LCP)",
      description: "Measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.",
      importance: "High"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      name: "First Input Delay (FID)",
      description: "Measures interactivity. To provide a good user experience, pages should have a FID of 100 milliseconds or less.",
      importance: "High"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      name: "Cumulative Layout Shift (CLS)",
      description: "Measures visual stability. To provide a good user experience, pages should maintain a CLS of 0.1 or less.",
      importance: "High"
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      name: "First Contentful Paint (FCP)",
      description: "Measures the time from when the page starts loading to when any part of the page's content is rendered on the screen.",
      importance: "Medium"
    },
    {
      icon: <Star className="h-6 w-6" />,
      name: "Time to Interactive (TTI)",
      description: "Measures how long it takes a page to become fully interactive for the user.",
      importance: "Medium"
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      name: "Total Blocking Time (TBT)",
      description: "Measures the total amount of time that a page is blocked from responding to user input, such as mouse clicks, screen taps, or keyboard presses.",
      importance: "Medium"
    }
  ];

  // Advanced optimization techniques
  const advancedTechniques = [
    {
      title: "Implement Server-Side Rendering (SSR) or Static Site Generation (SSG)",
      description: "Pre-rendering pages on the server improves initial load time and SEO. Next.js, Nuxt.js, and similar frameworks offer these capabilities out of the box."
    },
    {
      title: "Optimize Critical Rendering Path",
      description: "Identify and prioritize the assets needed for initial rendering. Load critical CSS inline and defer non-critical resources to reduce blocking time."
    },
    {
      title: "Use Resource Hints",
      description: "Implement preload, prefetch, preconnect, and dns-prefetch to inform the browser about resources that will be needed soon."
    },
    {
      title: "Implement Code Splitting",
      description: "Break your JavaScript bundle into smaller chunks that load on demand, reducing the initial payload size and improving TTI."
    },
    {
      title: "Optimize Web Fonts",
      description: "Use font-display: swap, preload key fonts, use variable fonts, and limit the number of font weights and styles to improve performance."
    },
    {
      title: "Implement Browser Caching",
      description: "Set appropriate cache headers (Cache-Control, ETag, Last-Modified) to reduce server requests for returning visitors."
    },
    {
      title: "Monitor and Analyze Performance",
      description: "Regularly audit your site with tools like Lighthouse, WebPageTest, and Google PageSpeed Insights to identify optimization opportunities."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Website Performance Optimization | John Doe</title>
        <meta 
          name="description" 
          content="Learn about the performance optimization techniques I implement to ensure fast, responsive websites that provide excellent user experiences." 
        />
        <meta 
          name="keywords" 
          content="website performance, optimization, core web vitals, page speed, user experience" 
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
                Performance-Driven Web Development
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Speed matters. I create lightning-fast websites that engage users and rank higher in search results.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Core Web Vitals Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Core Web Vitals & Performance Metrics</h2>
                <p className="text-lg text-muted-foreground">
                  These key measurements help us understand how users experience your website. 
                  I optimize for all of these metrics to ensure the best possible performance.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {webVitals.map((metric, index) => (
                  <motion.div 
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                        {metric.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-lg">{metric.name}</h3>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            metric.importance === "High" 
                              ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" 
                              : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                          }`}>
                            {metric.importance}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{metric.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Main PerformanceOptimization component from the home page */}
        <PerformanceOptimization />
        
        {/* Advanced Techniques Section */}
        <section className="py-16 bg-muted/30 dark:bg-gray-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Advanced Optimization Techniques</h2>
                <p className="text-lg text-muted-foreground">
                  Beyond the basics, I implement these specialized techniques to push performance even further.
                </p>
              </div>
              
              <div className="space-y-6">
                {advancedTechniques.map((technique, index) => (
                  <motion.div 
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 shadow-sm"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <h3 className="font-bold text-lg mb-2">{technique.title}</h3>
                    <p className="text-muted-foreground">{technique.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Performance Testing Tools Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Performance Testing Tools</h2>
                <p className="text-lg text-muted-foreground">
                  I use these industry-standard tools to measure, analyze, and improve website performance.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  className="bg-card border border-border rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">Lighthouse</h3>
                    <p className="text-muted-foreground mb-4">
                      An open-source, automated tool for improving the quality of web pages. It audits performance, accessibility, SEO, and more.
                    </p>
                    <a 
                      href="https://developers.google.com/web/tools/lighthouse" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center"
                    >
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-card border border-border rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">Google PageSpeed Insights</h3>
                    <p className="text-muted-foreground mb-4">
                      Analyzes the content of a web page and generates suggestions to make it faster for both mobile and desktop.
                    </p>
                    <a 
                      href="https://pagespeed.web.dev/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center"
                    >
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-card border border-border rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">WebPageTest</h3>
                    <p className="text-muted-foreground mb-4">
                      Provides detailed performance analysis from multiple locations around the globe using real browsers.
                    </p>
                    <a 
                      href="https://www.webpagetest.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center"
                    >
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-card border border-border rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">GTmetrix</h3>
                    <p className="text-muted-foreground mb-4">
                      Combines data from Lighthouse and WebPageTest to provide comprehensive performance reports and recommendations.
                    </p>
                    <a 
                      href="https://gtmetrix.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center"
                    >
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        <CTASection variant="secondary" />
      </main>
      
      <Footer />
    </>
  );
}