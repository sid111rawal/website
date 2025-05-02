import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { useMobile } from "@/hooks/use-mobile";
import { cn, getInitials } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const isMobile = useMobile();
  const [location] = useLocation();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Resources", href: "/resources" },
    { label: "Case Studies", href: "/case-studies/ecommerce-project" },
  ];

  // On the home page we still have anchor links to sections
  const homePageSections = location === "/" ? [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ] : [];

  const isActive = (href: string) => {
    // For routes
    if (href.startsWith('/') && location === href) return true;
    // For case studies
    if (href.startsWith('/case-studies') && location.startsWith('/case-studies')) return true;
    // For home
    if (location === "/" && href === "/") return true;
    
    return false;
  };

  return (
    <header className={cn(
      "fixed w-full z-50 backdrop-blur-md transition duration-300 border-b",
      isScrolled ? "bg-background/80" : "bg-background/60",
      "border-border"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
            JD
          </span>
          <span className="hidden sm:inline-block">John Doe</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                isActive(item.href) ? "text-primary" : "hover:text-primary"
              )}
            >
              {item.label}
            </a>
          ))}
          
          {/* Show section anchors when on homepage */}
          {location === "/" && homePageSections.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          {/* Dark mode toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            aria-label="Toggle dark mode"
            className="rounded-full"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          
          {/* Contact button (desktop only) */}
          <a 
            href="#contact" 
            className="hidden md:flex items-center justify-center px-4 py-2 rounded-md bg-primary hover:bg-primary/90 text-white text-sm font-medium transition-colors"
          >
            Let's Talk
          </a>
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={cn(
        "md:hidden bg-background border-b border-border",
        isMenuOpen ? "block" : "hidden"
      )}>
        <div className="container mx-auto px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 font-medium"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          
          {/* Show section anchors when on homepage */}
          {location === "/" && homePageSections.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 font-medium"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          
          {/* Extra links for mobile */}
          <div className="pt-2 border-t border-border mt-2">
            <a
              href="/branding"
              className="block py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 font-medium"
              onClick={closeMenu}
            >
              Branding
            </a>
            <a
              href="/content-calendar"
              className="block py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 font-medium"
              onClick={closeMenu}
            >
              Content Calendar
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
