import { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, Tag, ChevronRight, ArrowRight } from "lucide-react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// Define blog post type
interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured?: boolean;
}

export default function BlogIndex() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Blog posts data - focused on performance optimization
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Beyond Page Speed: How Core Web Vitals Impact Your SEO Strategy",
      slug: "beyond-page-speed-core-web-vitals-seo",
      excerpt: "Learn how Core Web Vitals like LCP, FID, and CLS affect your search rankings and how to optimize them for better visibility and user experience.",
      date: "May 1, 2025",
      readTime: "8 min",
      category: "Performance",
      tags: ["SEO", "Core Web Vitals", "Page Speed"],
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      featured: true
    },
    {
      id: 2,
      title: "The Developer's Guide to Image Optimization: Techniques that Preserve Quality",
      slug: "developers-guide-image-optimization-techniques",
      excerpt: "Discover advanced techniques for optimizing images while maintaining visual quality, including next-gen formats, responsive images, and automation tools.",
      date: "April 28, 2025",
      readTime: "6 min",
      category: "Performance",
      tags: ["Images", "Optimization", "WebP"],
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "JavaScript Bundling Strategies: When to Split and When to Combine",
      slug: "javascript-bundling-strategies-split-combine",
      excerpt: "Analyze different JavaScript bundling approaches and learn when to use code splitting, lazy loading, or bundle combining for optimal performance.",
      date: "April 22, 2025",
      readTime: "7 min",
      category: "Performance",
      tags: ["JavaScript", "Bundling", "Webpack"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "Lazy Loading Done Right: Best Practices for Modern Websites",
      slug: "lazy-loading-best-practices-modern-websites",
      excerpt: "Master the art of lazy loading images, videos, and JavaScript components to dramatically improve initial page load times and user experience.",
      date: "April 15, 2025",
      readTime: "5 min",
      category: "Performance",
      tags: ["Lazy Loading", "JavaScript", "Images"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "The Hidden Cost of Third-Party Scripts: How to Measure and Optimize",
      slug: "hidden-cost-third-party-scripts-measure-optimize",
      excerpt: "Uncover the performance impact of analytics, ads, and other third-party scripts, and implement strategies to minimize their effect on page speed.",
      date: "April 8, 2025",
      readTime: "9 min",
      category: "Performance",
      tags: ["Third-party", "Scripts", "Analytics"],
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      title: "Server-Side Rendering vs. Static Site Generation: Performance Showdown",
      slug: "ssr-vs-ssg-performance-showdown",
      excerpt: "Compare SSR and SSG approaches across different use cases to determine which rendering strategy delivers the best performance for your specific needs.",
      date: "April 1, 2025",
      readTime: "10 min",
      category: "Performance",
      tags: ["SSR", "SSG", "Rendering"],
      image: "https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 7,
      title: "Database Query Optimization: Fixing the Backend Bottlenecks",
      slug: "database-query-optimization-backend-bottlenecks",
      excerpt: "Identify and resolve common database performance issues that slow down your web applications, from indexing strategies to query refactoring.",
      date: "March 25, 2025",
      readTime: "8 min",
      category: "Performance",
      tags: ["Database", "SQL", "Backend"],
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 8,
      title: "CDN Configuration Mastery: Global Performance on a Budget",
      slug: "cdn-configuration-mastery-global-performance",
      excerpt: "Learn how to properly configure CDNs to maximize caching efficiency, reduce latency, and deliver lightning-fast content to users worldwide.",
      date: "March 18, 2025",
      readTime: "7 min",
      category: "Performance",
      tags: ["CDN", "Caching", "Global"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 9,
      title: "Mobile-First Performance: Optimizing for Low-Bandwidth Environments",
      slug: "mobile-first-performance-low-bandwidth",
      excerpt: "Discover strategies for creating high-performing websites that work well even in challenging network conditions and on less powerful devices.",
      date: "March 11, 2025",
      readTime: "6 min",
      category: "Performance",
      tags: ["Mobile", "Low-bandwidth", "Optimization"],
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 10,
      title: "Perceived Performance: UX Tricks to Make Your Site Feel Lightning Fast",
      slug: "perceived-performance-ux-tricks-fast-sites",
      excerpt: "Explore psychological techniques and UI patterns that create the perception of speed, even while heavy resources are loading behind the scenes.",
      date: "March 4, 2025",
      readTime: "5 min",
      category: "Performance",
      tags: ["UX", "Perceived Performance", "Design"],
      image: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
  ];
  
  // Extract all unique tags from blog posts
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags))).sort();
  
  // Filter posts based on search query and selected tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTag = selectedTag === null || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });
  
  // Get featured post (if any)
  const featuredPost = blogPosts.find(post => post.featured);
  
  return (
    <>
      <Helmet>
        <title>Blog | Web Performance Optimization | John Doe</title>
        <meta name="description" content="Expert insights on web performance optimization, Core Web Vitals, and techniques to make your website lightning fast." />
        <meta name="keywords" content="web performance, optimization, page speed, Core Web Vitals, image optimization" />
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
                Web Performance Insights
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Expert tips and strategies for optimizing website performance, improving user experience, and boosting conversions.
              </motion.p>
              
              {/* Search Bar */}
              <motion.div
                className="max-w-2xl mx-auto relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  type="search"
                  placeholder="Search articles..."
                  className="pl-10 h-12 rounded-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
              
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-card rounded-xl overflow-hidden shadow-sm border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="lg:col-span-2 h-full">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                </div>
                <div className="lg:col-span-3 p-8 flex flex-col justify-between">
                  <div>
                    <Badge className="mb-3">{featuredPost.category}</Badge>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground mb-6">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {featuredPost.date}
                      </span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime} read
                      </span>
                    </div>
                  </div>
                  <Button 
                    variant="default"
                    className="w-fit"
                  >
                    Read Article
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        )}
        
        {/* All Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <h2 className="text-2xl font-bold">All Articles</h2>
              
              {/* Tags Filter */}
              <div className="flex flex-wrap gap-2 max-w-full overflow-x-auto pb-2">
                <Button 
                  variant={selectedTag === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(null)}
                >
                  All Topics
                </Button>
                {allTags.map(tag => (
                  <Button 
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Blog Post Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
                  <motion.article 
                    key={post.id}
                    className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <Badge className="absolute top-3 left-3">{post.category}</Badge>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime} read
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map(tag => (
                          <span 
                            key={tag} 
                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs cursor-pointer"
                            onClick={() => setSelectedTag(tag)}
                          >
                            <Tag className="h-3 w-3 inline mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button 
                        variant="link" 
                        className="p-0 h-auto text-primary flex items-center"
                      >
                        Read Article
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </motion.article>
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <p className="text-muted-foreground">No articles found matching your search criteria.</p>
                  <Button 
                    variant="link" 
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedTag(null);
                    }}
                  >
                    Reset filters
                  </Button>
                </div>
              )}
            </div>
            
            {/* Newsletter Subscription */}
            <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-muted-foreground mb-6">
                  Get the latest web performance tips and strategies delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input 
                    type="email" 
                    placeholder="Your email address" 
                    className="h-12"
                  />
                  <Button>Subscribe</Button>
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