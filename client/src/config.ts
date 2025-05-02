/**
 * Site Configuration
 * 
 * This file contains configurable variables used throughout the website.
 * Update these values to customize the site without having to edit component files.
 */

// Personal Information
export const PERSONAL_INFO = {
  name: "John Doe",
  title: "Web Developer & Designer",
  email: "your-email@example.com", // Replace with your actual email for FormSubmit
  phone: "+1 (123) 456-7890",
  location: "San Francisco, CA",
}

// Social Media Links
export const SOCIAL_LINKS = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  instagram: "https://instagram.com",
}

// Form Configuration
export const FORM_CONFIG = {
  formSubmitEmail: "your-email@example.com", // Replace with your actual email for the FormSubmit endpoint
  redirectUrl: "https://your-website.com/?thankyou=true", // URL to redirect after form submission
  subject: "New portfolio website inquiry",
  useTableTemplate: true, // Whether to use the table template in FormSubmit
  enableCaptcha: true, // Whether to enable captcha protection in FormSubmit
}

// Website Meta Information
export const SITE_META = {
  title: "John Doe | Web Developer & Designer",
  description: "Professional web developer specializing in creating high-performance, beautiful websites that drive business growth.",
  keywords: "web development, web design, react, typescript, frontend developer, full-stack developer",
  ogImage: "/og-image.jpg", // Open Graph image for social media sharing
}

// Performance Settings
export const PERFORMANCE = {
  enableLazyLoading: true, // Whether to use lazy loading for images
  enableAsyncDecoding: true, // Whether to use async decoding for images
}

// Theme Settings
export const THEME = {
  defaultTheme: "light", // Options: "light", "dark", "system"
  enableDarkMode: true, // Whether to enable dark mode toggle
}

// Navigation Links
export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/#services" },
  { label: "Work", path: "/#work" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/#contact" },
]

// Additional Navigation Links for Footer or Mobile Menu
export const ADDITIONAL_LINKS = [
  { label: "Resources", path: "/resources" },
  { label: "Branding", path: "/branding" },
  { label: "Content Calendar", path: "/content-calendar" },
  { label: "Performance", path: "/performance" },
  { label: "Case Studies", path: "/case-studies/ecommerce-project" },
]