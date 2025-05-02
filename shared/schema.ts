import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

// Users table (kept as required by the starter template)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact messages table
export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  isRead: boolean("is_read").default(false).notNull(),
});

export const contactMessageSchema = createInsertSchema(contactMessages, {
  name: (schema) => schema.min(2, "Name must be at least 2 characters"),
  email: (schema) => schema.email("Please provide a valid email address"),
  message: (schema) => schema.min(10, "Message must be at least 10 characters"),
});

export type InsertContactMessage = z.infer<typeof contactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

// Portfolio projects table
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  category: text("category").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Project technologies junction table
export const projectTechnologies = pgTable("project_technologies", {
  id: serial("id").primaryKey(),
  projectId: integer("project_id").references(() => projects.id).notNull(),
  technology: text("technology").notNull(),
});

// Testimonials table
export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  company: text("company").notNull(),
  image: text("image").notNull(),
  rating: integer("rating").notNull().default(5),
  text: text("text").notNull(),
  project: text("project").notNull(),
  isVisible: boolean("is_visible").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Define relations
export const projectsRelations = relations(projects, ({ many }) => ({
  technologies: many(projectTechnologies),
}));

export const projectTechnologiesRelations = relations(projectTechnologies, ({ one }) => ({
  project: one(projects, {
    fields: [projectTechnologies.projectId],
    references: [projects.id],
  }),
}));

// Project schema for validation
export const projectSchema = createInsertSchema(projects, {
  title: (schema) => schema.min(3, "Title must be at least 3 characters"),
  description: (schema) => schema.min(10, "Description must be at least 10 characters"),
  imageUrl: (schema) => schema.url("Image URL must be a valid URL"),
  category: (schema) => schema.refine(val => ["web", "e-commerce", "mobile"].includes(val), {
    message: "Category must be one of: web, e-commerce, mobile"
  }),
});

export type InsertProject = z.infer<typeof projectSchema>;
export type Project = typeof projects.$inferSelect;

// Testimonial schema for validation
export const testimonialSchema = createInsertSchema(testimonials, {
  name: (schema) => schema.min(2, "Name must be at least 2 characters"),
  role: (schema) => schema.min(2, "Role must be at least 2 characters"),
  company: (schema) => schema.min(2, "Company must be at least 2 characters"),
  image: (schema) => schema.url("Image must be a valid URL"),
  rating: (schema) => schema.min(1, "Rating must be at least 1").max(5, "Rating must be at most 5"),
  text: (schema) => schema.min(20, "Testimonial text must be at least 20 characters"),
  project: (schema) => schema.min(3, "Project must be at least 3 characters"),
});

export type InsertTestimonial = z.infer<typeof testimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;
