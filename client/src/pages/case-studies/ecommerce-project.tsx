import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  CheckCircle, 
  Sparkles, 
  BarChart3, 
  ShoppingCart, 
  Search, 
  Smartphone, 
  Lock, 
  TrendingUp,
  ArrowRight
} from "lucide-react";

export default function EcommerceProjectCaseStudy() {
  return (
    <>
      <Helmet>
        <title>Fashion E-commerce Platform Case Study</title>
        <meta 
          name="description" 
          content="Case study: How we transformed an online fashion retailer's platform, increasing conversions by 35% and reducing cart abandonment by 25%." 
        />
        <meta 
          name="keywords" 
          content="e-commerce case study, fashion website, conversion optimization, mobile shopping experience" 
        />
      </Helmet>
      
      <Header />
      
      <main className="text-gray-900 dark:text-gray-100">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.span 
                className="inline-block px-4 py-1 mb-4 bg-primary/10 text-primary rounded-full text-sm font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                E-Commerce Case Study
              </motion.span>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Revolutionizing Online Shopping for FashionHub
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                How we transformed a struggling fashion retailer into a conversion powerhouse with a seamless shopping experience.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4 justify-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5" />
                  <span>4-month project</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Completed in 2024</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Sparkles className="h-5 w-5 text-yellow-500" />
                  <span>35% Conversion Increase</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Project Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Executive Summary</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-6">
                    FashionHub, a mid-sized fashion retailer with both physical and online presence, was struggling with an outdated e-commerce platform that resulted in poor conversion rates, high cart abandonment, and limited mobile sales despite growing traffic.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    We completely redesigned and rebuilt their e-commerce platform with a focus on mobile-first design, streamlined checkout, personalized product discovery, and performance optimization.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <span><strong>35% increase</strong> in conversion rate</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <span><strong>25% reduction</strong> in cart abandonment</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <span><strong>52% growth</strong> in mobile sales</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <span><strong>3x increase</strong> in page load speed</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-lg opacity-50"></div>
                <img 
                  src="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="FashionHub E-commerce Platform" 
                  loading="lazy"
                  decoding="async"
                  className="relative rounded-2xl shadow-lg border border-border w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Client Background */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Client Background</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-6">
                    FashionHub is a mid-sized fashion retailer founded in 2010. With 12 physical stores in major cities and an e-commerce presence since 2015, they cater to fashion-conscious young professionals ages 25-40 with contemporary clothing and accessories.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Despite a strong brand identity and quality merchandise, their digital presence wasn't delivering results proportionate to their marketing investment. The company was losing market share to more digitally-savvy competitors with superior online shopping experiences.
                  </p>
                  <p className="text-muted-foreground">
                    Prior to our engagement, FashionHub was operating on a generic e-commerce template with limited customization, poor mobile compatibility, and disconnected systems for inventory and order management between their online and physical stores.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* The Challenge */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-6">
                    FashionHub approached us with several critical challenges that were impacting their online sales and brand perception:
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                        <Smartphone className="h-6 w-6" />
                      </div>
                      <h3 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Poor Mobile Experience</h3>
                      <p className="text-sm text-muted-foreground">
                        Despite 70% of their traffic coming from mobile devices, their site was difficult to navigate on smartphones, with tiny product images and a cumbersome checkout process.
                      </p>
                    </div>
                    
                    <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                        <ShoppingCart className="h-6 w-6" />
                      </div>
                      <h3 className="font-bold mb-2 text-gray-900 dark:text-gray-100">High Cart Abandonment</h3>

                      <p className="text-sm text-muted-foreground">
                        A staggering 82% cart abandonment rate compared to the industry average of 70%, with most customers dropping off during the checkout process.
                      </p>
                    </div>
                    
                    <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                        <Search className="h-6 w-6" />
                      </div>
                      <h3 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Limited Product Discovery</h3>
                      <p className="text-sm text-muted-foreground">
                        Ineffective search and filtering capabilities made finding specific items difficult, and there was no personalization to help customers discover relevant products.
                      </p>
                    </div>
                    
                    <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                        <BarChart3 className="h-6 w-6" />
                      </div>
                      <h3 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Technical Debt</h3>
                      <p className="text-sm text-muted-foreground">
                        The existing platform had accumulated significant technical debt with outdated libraries, poor performance, and security vulnerabilities that made updates difficult.
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground">
                    These challenges were further complicated by the need to maintain operational continuity during the transition and ensure seamless integration with their existing inventory management and physical store systems.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Discovery Process */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Discovery Process</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-6">
                    We began with a comprehensive discovery phase to fully understand FashionHub's business model, customer behavior, and technical landscape:
                  </p>
                  
                  <div className="space-y-6 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">User Research</h3>
                        <p className="text-muted-foreground">
                          We conducted interviews with 20 current customers and analyzed 500+ customer support interactions to identify pain points and opportunities. Heat mapping and session recordings on the existing site revealed navigation issues and abandonment triggers.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Competitive Analysis</h3>
                        <p className="text-muted-foreground">
                          We benchmarked FashionHub against 8 competitors to identify industry best practices and differentiation opportunities, with special attention to mobile experiences and checkout processes.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Technical Audit</h3>
                        <p className="text-muted-foreground">
                          Our comprehensive audit of the existing platform revealed critical performance bottlenecks, including unoptimized images, excessive JavaScript, and database query inefficiencies that were causing 5+ second load times.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Business Workshop</h3>
                        <p className="text-muted-foreground">
                          We facilitated a 2-day workshop with FashionHub's leadership team to align on business goals, KPIs, and brand positioning, ensuring our solution would drive meaningful business outcomes beyond just technical improvements.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground">
                    This discovery process revealed that the core issues were deeper than just technical limitations—there was a significant disconnect between the brand's premium positioning and the subpar digital experience they were providing.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Solution Strategy */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Solution Strategy</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-6">
                    Based on our discovery findings, we developed a comprehensive solution strategy centered around four key pillars:
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                      <h3 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Technology Stack</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        We selected a modern, scalable tech stack that would provide excellent performance and flexibility:
                      </p>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>React for the frontend UI</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Node.js for API development</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>PostgreSQL for data storage</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Headless CMS for content management</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                      <h3 className="font-bold mb-2 text-gray-900 dark:text-gray-100">User Experience Approach</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        We applied a mobile-first design philosophy with a focus on key shopping journeys:
                      </p>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Simplified navigation structure</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Visual-focused product browsing</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Single-page checkout experience</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Personalized product recommendations</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                      <h3 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Performance Optimization</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        We implemented robust performance strategies to ensure fast loading on all devices:
                      </p>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Server-side rendering for fast initial loads</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Advanced image optimization pipeline</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Code splitting and lazy loading</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Global CDN with edge caching</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                      <h3 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Integration Architecture</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        We designed a robust integration layer to connect with existing systems:
                      </p>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Real-time inventory synchronization</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Unified customer profiles across channels</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Omnichannel order management</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Analytics data pipeline</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground">
                    This comprehensive strategy addressed both the immediate pain points while establishing a foundation for future growth. We presented detailed wireframes, technical specifications, and an implementation roadmap which received enthusiastic approval from FashionHub's leadership team.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Implementation Process */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Implementation Process</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-6">
                    We followed an agile implementation process with two-week sprints and regular stakeholder reviews. The project was divided into four key phases over a 4-month timeline:
                  </p>
                  
                  <div className="relative space-y-8 mb-6 pl-4 border-l-2 border-muted">
                    <div className="relative">
                      <div className="absolute -left-[17px] w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                        1
                      </div>
                      <div className="pl-6">
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Foundation Building (Weeks 1-3)</h3>
                        <p className="text-muted-foreground">
                          We established the core technical infrastructure, including development environments, CI/CD pipelines, and the baseline architecture. The design team finalized the design system and high-fidelity mockups for key user journeys.
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-[17px] w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                        2
                      </div>
                      <div className="pl-6">
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Core Functionality (Weeks 4-8)</h3>
                        <p className="text-muted-foreground">
                          We implemented the product catalog, search/filtering capabilities, user accounts, and shopping cart functionality. This phase included regular user testing sessions with target customers to validate design decisions.
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-[17px] w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                        3
                      </div>
                      <div className="pl-6">
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Advanced Features (Weeks 9-13)</h3>
                        <p className="text-muted-foreground">
                          We built the streamlined checkout process, personalization engine, integrated payment gateways, and completed the integrations with inventory and order management systems. This phase also included comprehensive performance optimization.
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-[17px] w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                        4
                      </div>
                      <div className="pl-6">
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Testing and Launch (Weeks 14-16)</h3>
                        <p className="text-muted-foreground">
                          Comprehensive testing included load testing, security audits, cross-browser compatibility checks, and a beta program with select customers. We implemented analytics tracking and conducted team training before a phased launch approach.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground">
                    Throughout the implementation, we maintained a collaborative approach with the client, holding weekly progress reviews and maintaining a transparent issue tracking system that allowed stakeholders to monitor progress in real-time.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Key Features */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center">Key Features Delivered</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <motion.div
                  className="bg-card rounded-xl overflow-hidden shadow-sm border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                      alt="Advanced product filtering interface" 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">Advanced Product Discovery</h3>
                    <p className="text-muted-foreground mb-4">
                      We implemented an intuitive filtering system with instant results, visual attribute selection, and smart search with autocomplete and typo tolerance. The system remembers user preferences to personalize future browsing sessions.
                    </p>
                    <div className="flex items-center gap-2 text-primary">
                      <Search className="h-5 w-5" />
                      <span>48% increase in product page views</span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  className="bg-card rounded-xl overflow-hidden shadow-sm border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                      alt="Streamlined checkout process" 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">Streamlined Checkout</h3>
                    <p className="text-muted-foreground mb-4">
                      We reduced the checkout process from 5 steps to a single-page experience with intelligent form validation, multiple payment options, and address auto-completion. Express checkout options remember returning customers' preferences.
                    </p>
                    <div className="flex items-center gap-2 text-primary">
                      <ShoppingCart className="h-5 w-5" />
                      <span>25% reduction in cart abandonment</span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  className="bg-card rounded-xl overflow-hidden shadow-sm border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                      alt="Mobile-first responsive design" 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">Mobile-First Design</h3>
                    <p className="text-muted-foreground mb-4">
                      The entire interface was redesigned with mobile users as the priority, featuring touch-friendly elements, simplified navigation, and optimized product imagery. The responsive design scales seamlessly across all device sizes.
                    </p>
                    <div className="flex items-center gap-2 text-primary">
                      <Smartphone className="h-5 w-5" />
                      <span>52% increase in mobile conversions</span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  className="bg-card rounded-xl overflow-hidden shadow-sm border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                      alt="Personalization engine" 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">Personalization Engine</h3>
                    <p className="text-muted-foreground mb-4">
                      We implemented a sophisticated recommendation system that analyzes browsing patterns, purchase history, and similar customer profiles to suggest relevant products throughout the shopping journey.
                    </p>
                    <div className="flex items-center gap-2 text-primary">
                      <Sparkles className="h-5 w-5" />
                      <span>22% higher average order value</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Technical Highlights */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Technical Highlights</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-6">
                    Behind the scenes, we implemented several technical innovations to ensure performance, security, and scalability:
                  </p>
                  
                  <div className="space-y-6 mb-6">
                    <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                      <h3 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Performance Optimization</h3>
                      <p className="text-muted-foreground mb-4">
                        We reduced page load times from 5.2 seconds to 1.7 seconds through:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Automated image optimization pipeline with WebP format and responsive sizes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Server-side rendering for critical pages with client-side hydration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Efficient bundling with code splitting and tree shaking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Strategic caching with service workers for offline capabilities</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                      <h3 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Security Measures</h3>
                      <p className="text-muted-foreground mb-4">
                        Enhanced security was implemented throughout:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Lock className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>PCI-DSS compliant payment processing with tokenization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Lock className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>GDPR-compliant data handling with explicit consent management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Lock className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Protection against common vulnerabilities (XSS, CSRF, injection)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Lock className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Rate limiting and bot protection to prevent abuse</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                      <h3 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Scalability Solutions</h3>
                      <p className="text-muted-foreground mb-4">
                        The architecture was designed to handle growth:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <TrendingUp className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Containerized microservices deployed with Kubernetes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <TrendingUp className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Auto-scaling infrastructure based on demand patterns</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <TrendingUp className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Database sharding for efficient data management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <TrendingUp className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Global CDN with edge caching for international customers</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground">
                    These technical innovations not only solved immediate performance issues but provided FashionHub with a sustainable platform that could grow with their business and adapt to changing market conditions.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Results and Impact */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Results and Impact</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-6">
                    The impact of the new platform was immediate and substantial. When comparing the three months post-launch to the same period in the previous year:
                  </p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                    <div className="bg-card p-6 rounded-xl shadow-sm border border-border text-center">
                      <h3 className="text-4xl font-bold text-primary mb-2 text-gray-900 dark:text-gray-100">+35%</h3>
                      <p className="text-sm text-muted-foreground">Conversion Rate</p>
                    </div>
                    
                    <div className="bg-card p-6 rounded-xl shadow-sm border border-border text-center">
                      <h3 className="text-4xl font-bold text-primary mb-2 text-gray-900 dark:text-gray-100">-25%</h3>
                      <p className="text-sm text-muted-foreground">Cart Abandonment</p>
                    </div>
                    
                    <div className="bg-card p-6 rounded-xl shadow-sm border border-border text-center">
                      <h3 className="text-4xl font-bold text-primary mb-2 text-gray-900 dark:text-gray-100">+52%</h3>
                      <p className="text-sm text-muted-foreground">Mobile Sales</p>
                    </div>
                    
                    <div className="bg-card p-6 rounded-xl shadow-sm border border-border text-center">
                      <h3 className="text-4xl font-bold text-primary mb-2 text-gray-900 dark:text-gray-100">+22%</h3>
                      <p className="text-sm text-muted-foreground">Avg. Order Value</p>
                    </div>
                  </div>
                  
                  <div className="bg-card p-6 rounded-xl shadow-sm border border-border mb-8">
                    <blockquote className="text-lg italic mb-4">
                      "The transformation of our e-commerce platform has exceeded our expectations in every way. Not only have we seen significant growth in sales and customer engagement, but we've also received overwhelmingly positive feedback from our customers about the improved shopping experience. This has truly been a game-changer for our business."
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <span className="font-bold">SL</span>
                      </div>
                      <div>
                        <p className="font-bold">Sarah Lewis</p>
                        <p className="text-sm text-muted-foreground">CEO, FashionHub</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    Beyond the quantitative metrics, the project delivered several qualitative benefits:
                  </p>
                  
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Enhanced brand perception</strong> with a digital experience that matched the premium positioning of the products</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Improved operational efficiency</strong> through the integration of online and in-store inventory and order management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Valuable customer insights</strong> from the analytics implementation that informed both online and in-store merchandising decisions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Increased customer loyalty</strong> with repeat purchase rate increasing by 18% within six months of launch</span>
                    </li>
                  </ul>
                  
                  <p className="text-muted-foreground">
                    Most importantly, FashionHub achieved a full return on their investment within 5 months, significantly faster than the 12-month projection in the initial business case.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Conclusion */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-6">
                    The FashionHub e-commerce project demonstrates how a strategic approach to digital transformation can deliver substantial business impact. By addressing both technical limitations and user experience challenges, we created a platform that not only resolved immediate pain points but positioned the business for sustainable growth.
                  </p>
                  
                  <p className="text-muted-foreground mb-6">
                    Key success factors included:
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>A thorough discovery process that uncovered root issues beyond surface symptoms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Mobile-first design that aligned with actual customer behavior</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Strategic technical choices that prioritized performance and scalability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Continuous collaboration with stakeholders throughout the development process</span>
                    </li>
                  </ul>
                  
                  <p className="text-muted-foreground mb-8">
                    Following the successful launch, we've continued our partnership with FashionHub on a retainer basis, implementing quarterly feature enhancements and ensuring the platform evolves with changing market trends and customer expectations.
                  </p>
                  
                  <div className="bg-card rounded-xl p-8 shadow-sm border border-border text-center">
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Ready to Transform Your E-Commerce Experience?</h3>
                    <p className="text-muted-foreground mb-6">
                      Let's discuss how we can apply these same strategies to help your business achieve similar results.
                    </p>
                    <Button className="bg-primary hover:bg-primary/90">
                      Contact Me
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}