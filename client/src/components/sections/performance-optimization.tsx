import { motion } from "framer-motion";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Zap, Image, FileCode, Database, Server, Monitor } from "lucide-react";

export default function PerformanceOptimization() {
  const optimizationTips = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Minimize HTTP Requests",
      description: "Reduce the number of HTTP requests by combining files, using CSS sprites, and loading essential resources first.",
      tips: [
        "Bundle JavaScript files into fewer, optimized bundles",
        "Use CSS sprites for small, recurring icons",
        "Implement lazy loading for off-screen images and components",
        "Only load what's needed for the initial view"
      ]
    },
    {
      icon: <Image className="h-5 w-5" />,
      title: "Optimize Images",
      description: "Images often account for most of the downloaded bytes. Proper optimization can significantly reduce load times.",
      tips: [
        "Use modern formats like WebP with fallbacks for older browsers",
        "Resize images to match their display size",
        "Compress images with tools like ImageOptim or TinyPNG",
        "Implement lazy loading for below-the-fold images",
        "Use responsive images with the srcset attribute"
      ]
    },
    {
      icon: <FileCode className="h-5 w-5" />,
      title: "Minify and Compress Resources",
      description: "Smaller file sizes mean faster downloads and less processing time.",
      tips: [
        "Minify CSS, JavaScript, and HTML",
        "Enable Gzip or Brotli compression on your server",
        "Remove unused CSS and JavaScript",
        "Consider using CSS purging for frameworks like Tailwind"
      ]
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: "Leverage Caching",
      description: "Caching reduces server load and speeds up repeat visits by storing resources locally.",
      tips: [
        "Set appropriate cache headers for static resources",
        "Use versioned file names for cache busting when content changes",
        "Implement a service worker for PWA capabilities",
        "Consider using a CDN for global caching"
      ]
    },
    {
      icon: <Server className="h-5 w-5" />,
      title: "Optimize Rendering",
      description: "How the browser processes and displays your content affects perceived performance.",
      tips: [
        "Minimize DOM size and nesting",
        "Avoid layout shifts and repaints",
        "Load critical CSS inline for faster initial rendering",
        "Defer non-critical JavaScript",
        "Use will-change for elements that will animate"
      ]
    },
    {
      icon: <Monitor className="h-5 w-5" />,
      title: "Performance Monitoring",
      description: "Continuously track and improve your website's performance over time.",
      tips: [
        "Use Lighthouse for comprehensive audits",
        "Monitor Core Web Vitals (LCP, FID, CLS)",
        "Set up Real User Monitoring (RUM)",
        "Regularly test on both fast and slow connections",
        "Create performance budgets for your team"
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30 dark:bg-gray-900/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Website Performance Optimization</h2>
            <p className="text-xl text-muted-foreground">
              Building fast, responsive websites that provide an excellent user experience is my priority. 
              Here are some key optimization techniques I implement in every project.
            </p>
          </motion.div>
          
          <div className="grid gap-8">
            <Accordion type="single" collapsible className="w-full">
              {optimizationTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index}`} className="border border-border rounded-lg mb-4 overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 dark:hover:bg-muted/10">
                      <div className="flex items-center gap-3 text-left">
                        <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                          {tip.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-lg">{tip.title}</h3>
                          <p className="text-sm text-muted-foreground">{tip.description}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-2">
                      <ul className="space-y-2 text-muted-foreground">
                        {tip.tips.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
          
          <motion.div 
            className="mt-16 bg-card p-6 rounded-xl border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-4">Form Handling with Formspree</h3>
            <p className="mb-4 text-muted-foreground">
              For the contact form, I've implemented Formspree, a reliable and secure form backend service 
              that collects submissions and delivers them directly to your email without requiring any backend code.
            </p>
            
            <div className="bg-muted/50 dark:bg-muted/10 p-4 rounded-lg">
              <h4 className="font-medium mb-2">How to set up your Formspree account:</h4>
              <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                <li>Sign up for a free account at <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">formspree.io</a></li>
                <li>Create a new form and get your unique form ID</li>
                <li>Replace "yourformid" in the contact form action URL with your actual form ID</li>
                <li>Test the form to ensure submissions arrive in your email</li>
                <li>Free tier includes 50 submissions per month (paid plans available for higher volumes)</li>
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}