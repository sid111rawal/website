import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Code, Layers, Database, Lock, LineChart, Star, Zap, ExternalLink } from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>SaaS Development Services | John Doe</title>
        <meta name="description" content="Specialized web development services for SaaS startups. From MVP to scale, build a product that grows with your business." />
        <meta name="keywords" content="SaaS development, startup development, web application, React, Node.js, API development" />
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
                Specialized Web Development for SaaS Startups
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Turning innovative ideas into scalable, user-focused products that drive growth and delight users.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <a href="/#contact"><Button size="lg" className="bg-primary hover:bg-primary/90">
                  Schedule a Discovery Call
                </Button></a>                
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive SaaS Development Services</h2>
              <p className="text-lg text-muted-foreground">
                End-to-end services designed specifically for SaaS businesses at every stage of growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <motion.div 
                className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Code className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Full-Stack SaaS Development</h3>
                <p className="text-muted-foreground mb-6">
                  End-to-end development of scalable SaaS applications, from MVP to enterprise-ready solutions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>MVP development and iterative builds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Feature expansion and optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Scalability planning and implementation</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">React</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Node.js</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">TypeScript</span>
                </div>
              </motion.div>
              
              {/* Service Card 2 */}
              <motion.div 
                className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Layers className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">User-Centered Interface Design</h3>
                <p className="text-muted-foreground mb-6">
                  Creating intuitive, engaging interfaces that enhance user experience and drive product adoption.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Wireframing and prototyping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>User testing and iteration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Design systems for scalable products</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">UI/UX</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Figma</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Design Systems</span>
                </div>
              </motion.div>
              
              {/* Service Card 3 */}
              <motion.div 
                className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Database className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Seamless API Architecture</h3>
                <p className="text-muted-foreground mb-6">
                  Building robust APIs that power your SaaS functionality and integrate with third-party services.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>RESTful and GraphQL API development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Third-party service integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>API documentation and maintenance</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Express</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">GraphQL</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">API Design</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Process Timeline */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Development Process</h2>
              <p className="text-lg text-muted-foreground">
                A structured approach to bring your SaaS vision to life, from initial concept to market-ready product.
              </p>
            </div>
            
            <div className="relative max-w-5xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-border transform md:-translate-x-1/2 hidden md:block"></div>
              
              {/* Timeline Steps */}
              <div className="space-y-12 md:space-y-0">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-center md:space-x-8">
                  <motion.div 
                    className="w-full md:w-1/2 md:text-right mb-6 md:mb-0 md:pr-8"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                      <h3 className="text-xl font-bold mb-2">Discovery</h3>
                      <p className="text-muted-foreground">
                        In-depth analysis of your business goals, target users, and market requirements to shape the product vision.
                      </p>
                    </div>
                  </motion.div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white">
                    <span className="font-bold">1</span>
                  </div>
                  <div className="w-full md:w-1/2 md:pl-8 hidden md:block"></div>
                </div>
                
                {/* Step 2 */}
                <div className="flex flex-col md:flex-row items-center md:space-x-8">
                  <div className="w-full md:w-1/2 md:text-right mb-6 md:mb-0 md:pr-8 hidden md:block"></div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white">
                    <span className="font-bold">2</span>
                  </div>
                  <motion.div 
                    className="w-full md:w-1/2 md:pl-8"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                      <h3 className="text-xl font-bold mb-2">Planning</h3>
                      <p className="text-muted-foreground">
                        Creating detailed technical specifications, architecture plans, and development roadmaps.
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-center md:space-x-8">
                  <motion.div 
                    className="w-full md:w-1/2 md:text-right mb-6 md:mb-0 md:pr-8"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                      <h3 className="text-xl font-bold mb-2">Design</h3>
                      <p className="text-muted-foreground">
                        Creating intuitive user interfaces and experiences that align with your brand and user needs.
                      </p>
                    </div>
                  </motion.div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white">
                    <span className="font-bold">3</span>
                  </div>
                  <div className="w-full md:w-1/2 md:pl-8 hidden md:block"></div>
                </div>
                
                {/* Step 4 */}
                <div className="flex flex-col md:flex-row items-center md:space-x-8">
                  <div className="w-full md:w-1/2 md:text-right mb-6 md:mb-0 md:pr-8 hidden md:block"></div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white">
                    <span className="font-bold">4</span>
                  </div>
                  <motion.div 
                    className="w-full md:w-1/2 md:pl-8"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                      <h3 className="text-xl font-bold mb-2">Development</h3>
                      <p className="text-muted-foreground">
                        Agile development cycles with regular demos and feedback sessions to ensure alignment with your vision.
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                {/* Step 5 */}
                <div className="flex flex-col md:flex-row items-center md:space-x-8">
                  <motion.div 
                    className="w-full md:w-1/2 md:text-right mb-6 md:mb-0 md:pr-8"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                      <h3 className="text-xl font-bold mb-2">Testing</h3>
                      <p className="text-muted-foreground">
                        Comprehensive testing for functionality, performance, security, and user experience.
                      </p>
                    </div>
                  </motion.div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white">
                    <span className="font-bold">5</span>
                  </div>
                  <div className="w-full md:w-1/2 md:pl-8 hidden md:block"></div>
                </div>
                
                {/* Step 6 */}
                <div className="flex flex-col md:flex-row items-center md:space-x-8">
                  <div className="w-full md:w-1/2 md:text-right mb-6 md:mb-0 md:pr-8 hidden md:block"></div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white">
                    <span className="font-bold">6</span>
                  </div>
                  <motion.div 
                    className="w-full md:w-1/2 md:pl-8"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                      <h3 className="text-xl font-bold mb-2">Launch</h3>
                      <p className="text-muted-foreground">
                        Smooth deployment with continuous monitoring to ensure a successful market entry.
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                {/* Step 7 */}
                <div className="flex flex-col md:flex-row items-center md:space-x-8">
                  <motion.div 
                    className="w-full md:w-1/2 md:text-right mb-6 md:mb-0 md:pr-8"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                      <h3 className="text-xl font-bold mb-2">Support</h3>
                      <p className="text-muted-foreground">
                        Ongoing maintenance, performance optimization, and feature enhancements to keep your SaaS competitive.
                      </p>
                    </div>
                  </motion.div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white">
                    <span className="font-bold">7</span>
                  </div>
                  <div className="w-full md:w-1/2 md:pl-8 hidden md:block"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* SaaS-Specific Features */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">SaaS-Specific Features</h2>
              <p className="text-lg text-muted-foreground">
                Specialized components and functionality tailored for subscription-based software businesses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <motion.div 
                className="bg-card p-6 rounded-xl shadow-sm border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Authentication & User Management</h3>
                <p className="text-sm text-muted-foreground">
                  Secure login systems, role-based access control, and user profile management.
                </p>
              </motion.div>
              
              {/* Feature 2 */}
              <motion.div 
                className="bg-card p-6 rounded-xl shadow-sm border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Subscription Billing Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Seamless integration with payment processors, subscription management, and billing portals.
                </p>
              </motion.div>
              
              {/* Feature 3 */}
              <motion.div 
                className="bg-card p-6 rounded-xl shadow-sm border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <LineChart className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Analytics & Reporting</h3>
                <p className="text-sm text-muted-foreground">
                  Custom dashboards, user behavior tracking, and business intelligence tools.
                </p>
              </motion.div>
              
              {/* Feature 4 */}
              <motion.div 
                className="bg-card p-6 rounded-xl shadow-sm border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Star className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Scalable Cloud Infrastructure</h3>
                <p className="text-sm text-muted-foreground">
                  Cloud-native architecture designed for growth, with automated scaling and high availability.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Case Studies */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-lg text-muted-foreground">
                See how we've helped SaaS startups transform their ideas into successful products.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Case Study 1 */}
              <motion.div 
                className="bg-card rounded-xl overflow-hidden shadow-sm border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="SaaS Dashboard" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">AnalyticsPro Dashboard</h3>
                  <p className="text-muted-foreground mb-4">
                    Building a real-time analytics platform for e-commerce businesses that increased customer insights by 200%.
                  </p>
                  <div className="flex items-center gap-2 text-primary mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Star className="h-4 w-4" />
                    </div>
                    <span className="font-medium">Increased user engagement by 45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Tech Startup Inc.</span>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      View Case Study
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </motion.div>
              
              {/* Case Study 2 */}
              <motion.div 
                className="bg-card rounded-xl overflow-hidden shadow-sm border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="E-commerce Platform" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">SubscribeFlow Platform</h3>
                  <p className="text-muted-foreground mb-4">
                    Creating a subscription management system that reduced customer churn by 30% and streamlined billing.
                  </p>
                  <div className="flex items-center gap-2 text-primary mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Star className="h-4 w-4" />
                    </div>
                    <span className="font-medium">Reduced churn by 30%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Fashion Brand Co.</span>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      View Case Study
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </motion.div>
              
              {/* Case Study 3 */}
              <motion.div 
                className="bg-card rounded-xl overflow-hidden shadow-sm border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Mobile App" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">TeamCollab App</h3>
                  <p className="text-muted-foreground mb-4">
                    Developing a team collaboration tool that increased productivity by 25% and improved communication.
                  </p>
                  <div className="flex items-center gap-2 text-primary mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Star className="h-4 w-4" />
                    </div>
                    <span className="font-medium">200% increase in user adoption</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Agency Inc.</span>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      View Case Study
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Pricing/Packages */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Engagement Models</h2>
              <p className="text-lg text-muted-foreground">
                Choose the collaboration approach that works best for your startup's needs and growth stage.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Starter Package */}
              <motion.div 
                className="bg-card rounded-xl overflow-hidden shadow-sm border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2">Starter</h3>
                  <p className="text-muted-foreground mb-6">Perfect for validating your SaaS concept with an MVP</p>
                  <div className="mb-6">
                    <p className="text-3xl font-bold">Custom Quote</p>
                    <p className="text-sm text-muted-foreground">Starting from $10,000</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Core feature development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Basic user authentication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Responsive design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Deployment setup</span>
                    </li>
                  </ul>
                  <a href="/#contact">
                    <Button className="w-full">Request Quote</Button>
                  </a>
                </div>
              </motion.div>
              
              {/* Growth Package */}
              <motion.div 
                className="bg-card rounded-xl overflow-hidden shadow-sm border-2 border-primary relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-xs font-bold">
                  POPULAR
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2">Growth</h3>
                  <p className="text-muted-foreground mb-6">For startups ready to scale their product and user base</p>
                  <div className="mb-6">
                    <p className="text-3xl font-bold">Custom Quote</p>
                    <p className="text-sm text-muted-foreground">Starting from $25,000</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>All Starter features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Advanced user management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Payment gateway integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Analytics dashboard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Premium support</span>
                    </li>
                  </ul>
                  <a href="/#contact">
                    <Button className="w-full">Request Quote</Button>
                  </a>
                </div>
              </motion.div>
              
              {/* Enterprise Package */}
              <motion.div 
                className="bg-card rounded-xl overflow-hidden shadow-sm border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                  <p className="text-muted-foreground mb-6">For established SaaS businesses with complex requirements</p>
                  <div className="mb-6">
                    <p className="text-3xl font-bold">Custom Quote</p>
                    <p className="text-sm text-muted-foreground">Tailored to your needs</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>All Growth features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Advanced security features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Dedicated support team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Performance optimization</span>
                    </li>
                  </ul>
                  <a href="/#contact">
                    <Button className="w-full">Request Quote</Button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Common questions SaaS founders ask about our development process and services.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {/* FAQ Item 1 */}
                <motion.div 
                  className="bg-card rounded-xl p-6 shadow-sm border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-lg font-bold mb-2">How long does it typically take to build a SaaS MVP?</h3>
                  <p className="text-muted-foreground">
                    The timeline for a SaaS MVP can vary based on complexity, but typically ranges from 2-4 months. We focus on launching with core features that validate your business model, allowing you to gather user feedback quickly and iterate.
                  </p>
                </motion.div>
                
                {/* FAQ Item 2 */}
                <motion.div 
                  className="bg-card rounded-xl p-6 shadow-sm border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h3 className="text-lg font-bold mb-2">What technologies do you use for SaaS development?</h3>
                  <p className="text-muted-foreground">
                    Our tech stack is tailored to each project's needs, but we commonly use React, Next.js, Node.js, and PostgreSQL for SaaS applications. We prioritize technologies that enable scalability, security, and rapid development cycles.
                  </p>
                </motion.div>
                
                {/* FAQ Item 3 */}
                <motion.div 
                  className="bg-card rounded-xl p-6 shadow-sm border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-lg font-bold mb-2">How do you handle ongoing maintenance and updates?</h3>
                  <p className="text-muted-foreground">
                    We offer flexible maintenance plans that include regular updates, security patches, and performance optimizations. Our team provides continuous monitoring and support to ensure your SaaS runs smoothly as it scales.
                  </p>
                </motion.div>
                
                {/* FAQ Item 4 */}
                <motion.div 
                  className="bg-card rounded-xl p-6 shadow-sm border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="text-lg font-bold mb-2">Can you help integrate third-party services and APIs?</h3>
                  <p className="text-muted-foreground">
                    Yes, we specialize in integrating third-party services such as payment gateways, authentication providers, analytics tools, and other APIs that enhance your SaaS functionality without building everything from scratch.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Ready to Build Your SaaS Solution?
              </motion.h2>
              <motion.p 
                className="text-lg text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Let's discuss how we can bring your SaaS vision to life and create a product that stands out in the market.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <a href="/#contact"><Button size="lg" className="bg-primary hover:bg-primary/90">
                  Schedule Your Discovery Call
                </Button></a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}