import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { sendContactEmail } from "./services/email";

export async function registerRoutes(app: Express): Promise<Server> {
  // API prefix
  const apiPrefix = "/api";


  // Contact form submission
  app.post(`${apiPrefix}/contact`, async (req, res) => {
    try {
      // Validate request body using Zod schema
      const validatedData = contactMessageSchema.parse(req.body);

      // Store message in database
      const [savedMessage] = await storage.insertContactMessage(validatedData);

      // Send email notification
      if (savedMessage) {
        await sendContactEmail({
          name: savedMessage.name,
          email: savedMessage.email,
          subject: savedMessage.subject || "New contact form submission",
          message: savedMessage.message,
        });
      }

      return res.status(200).json({
        success: true,
        message: "Your message has been sent successfully.",
      });
    } catch (error) {
      console.error("Error handling contact form submission:", error);

      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors,
        });
      }

      return res.status(500).json({
        success: false,
        message:
          "An error occurred while sending your message. Please try again.",
      });
    }
  });
  // Get portfolio projects
  app.get(`${apiPrefix}/projects`, async (req, res) => {
    try {
      const category = req.query.category as string | undefined;
      
      const projects = await storage.getProjects(category);
      
      return res.status(200).json(projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred while fetching projects." 
      });
    }
  });

  // Get testimonials
  app.get(`${apiPrefix}/testimonials`, async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      
      return res.status(200).json(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred while fetching testimonials." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}