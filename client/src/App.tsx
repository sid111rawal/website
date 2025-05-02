import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import ServicesPage from "@/pages/services";
import BlogIndex from "@/pages/blog";
import BrandingPage from "@/pages/branding";
import ContentCalendarPage from "@/pages/content-calendar";
import ResourcesPage from "@/pages/resources";
import EcommerceProjectCaseStudy from "@/pages/case-studies/ecommerce-project";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/blog" component={BlogIndex} />
      <Route path="/branding" component={BrandingPage} />
      <Route path="/content-calendar" component={ContentCalendarPage} />
      <Route path="/resources" component={ResourcesPage} />
      <Route path="/case-studies/ecommerce-project" component={EcommerceProjectCaseStudy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
        <Router />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
