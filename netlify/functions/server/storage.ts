import fs from 'fs/promises';
import path from 'path';
import { type ContactFormData, type Project, type Testimonial } from '../../../shared/schema';

const dataDir = path.join(__dirname, 'data');
const contactFilePath = path.join(dataDir, 'contacts.json');
const projectsFilePath = path.join(dataDir, 'projects.json');
const testimonialsFilePath = path.join(dataDir, 'testimonials.json');

async function ensureDataDir() {
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

async function readData<T>(filePath: string): Promise<T[]> {
  try {
    await ensureDataDir()
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data) as T[];
  } catch (error) {
    console.error(`Error reading data from ${filePath}:`, error);
    return [];
  }
}

async function writeData<T>(filePath: string, data: T[]): Promise<void> {
    await ensureDataDir()
  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error(`Error writing data to ${filePath}:`, error);
  }
}

export const storage = {
  async insertContactMessage(message: ContactFormData): Promise<ContactFormData[]> {
    const contacts = await readData<ContactFormData>(contactFilePath);
    contacts.push(message);
    await writeData(contactFilePath, contacts);
    return [message];
  },

  async getProjects(category?: string): Promise<Project[]> {
    const projects = await readData<Project>(projectsFilePath);
    if (category) {
      return projects.filter(project => project.category === category);
    }
    return projects;
  },

  async insertProject(project: Project): Promise<Project[]> {
    const projects = await readData<Project>(projectsFilePath);
    projects.push(project);
    await writeData(projectsFilePath, projects);
    return [project];
  },
  
  async getTestimonials(): Promise<Testimonial[]> {
    return await readData<Testimonial>(testimonialsFilePath);
  },
  
  async insertTestimonial(testimonial: Testimonial): Promise<Testimonial[]> {
    const testimonials = await readData<Testimonial>(testimonialsFilePath);
    testimonials.push(testimonial);
    await writeData(testimonialsFilePath, testimonials);
    return [testimonial];
  },
};