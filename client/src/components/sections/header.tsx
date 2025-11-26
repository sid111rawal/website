import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { useMobile } from "@/hooks/use-mobile";
import { cn, getInitials } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
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

  // Determine if switch should be checked (dark mode)
  useEffect(() => {
    const updateDarkMode = () => {
      if (theme === "dark") {
        setIsDarkMode(true);
      } else if (theme === "light") {
        setIsDarkMode(false);
      } else if (theme === "system") {
        setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
      }
    };
    
    updateDarkMode();
    
    // Listen for system theme changes when theme is "system"
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", updateDarkMode);
      return () => mediaQuery.removeEventListener("change", updateDarkMode);
    }
  }, [theme]);

  const toggleTheme = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Portfolio", href: "/#work" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ];

  // Removed home page section anchors to simplify navigation

  const isActive = (href: string) => {
    // For home route
    if (location === "/" && href === "/") return true;
    // For hash links on home page
    if (location === "/" && href.startsWith('/#')) return true;
    
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
          SR
          </span>
          <span className="hidden sm:inline-block">Sid Rawal</span>
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
          
          {/* Resources dropdown could go here in the future */}
        </nav>
        
        <div className="flex items-center gap-4">
          {/* Dark mode toggle */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border">
            <Sun className="h-4 w-4 text-yellow-500" />
            <Switch
              checked={isDarkMode}
              onCheckedChange={toggleTheme}
              aria-label="Toggle dark mode"
              className="data-[state=checked]:bg-primary"
            />
            <Moon className="h-4 w-4 text-purple-500" />
          </div>
          
          {/* Contact button (desktop only) */}
          <a 
            href="/#contact" 
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
            className="md:hidden rounded-md hover:bg-muted"
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
              className="block py-2 px-3 rounded-md hover:bg-muted font-medium"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          
        </div>
      </div>
    </header>
  );
}
