import { db } from "@db";
import { 
  contactMessages, 
  projects, 
  projectTechnologies, 
  testimonials,
  type InsertContactMessage,
  type InsertProject,
  type InsertTestimonial
} from "@shared/schema";
import { eq, and, desc, sql } from "drizzle-orm";

export const storage = {
  // Contact messages
  async insertContactMessage(message: InsertContactMessage) {
    return await db.insert(contactMessages).values(message).returning();
  },
  
  async getContactMessages() {
    return await db.query.contactMessages.findMany({
      orderBy: [desc(contactMessages.createdAt)]
    });
  },
  
  async markContactMessageAsRead(id: number) {
    return await db
      .update(contactMessages)
      .set({ isRead: true })
      .where(eq(contactMessages.id, id))
      .returning();
  },
  
  // Projects
  async getProjects(category?: string) {
    const projectsData = await db.query.projects.findMany({
      orderBy: [desc(projects.createdAt)],
      where: category && category !== 'all' 
        ? eq(projects.category, category) 
        : undefined,
      with: {
        technologies: true
      }
    });
    
    // Transform the data to include technologies as an array of strings
    return projectsData.map(project => ({
      ...project,
      technologies: project.technologies.map(tech => tech.technology)
    }));
  },
  
  async getProjectById(id: number) {
    const project = await db.query.projects.findFirst({
      where: eq(projects.id, id),
      with: {
        technologies: true
      }
    });
    
    if (!project) return null;
    
    return {
      ...project,
      technologies: project.technologies.map(tech => tech.technology)
    };
  },
  
  async insertProject(projectData: InsertProject, technologies: string[]) {
    // Start a transaction to ensure both the project and its technologies are inserted
    return await db.transaction(async (tx) => {
      const [newProject] = await tx.insert(projects).values(projectData).returning();
      
      if (technologies.length > 0) {
        await tx.insert(projectTechnologies).values(
          technologies.map(tech => ({
            projectId: newProject.id,
            technology: tech
          }))
        );
      }
      
      return newProject;
    });
  },
  
  // Testimonials
  async getTestimonials() {
    return await db.query.testimonials.findMany({
      where: eq(testimonials.isVisible, true),
      orderBy: [desc(testimonials.createdAt)]
    });
  },
  
  async insertTestimonial(testimonialData: InsertTestimonial) {
    return await db.insert(testimonials).values(testimonialData).returning();
  }
};
