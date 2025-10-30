import { type Project, type InsertProject, type Folder, type InsertFolder } from "@shared/schema";

export interface IStorage {
  getProject(id: string): Promise<Project | undefined>;
  getAllProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  
  getFolder(id: string): Promise<Folder | undefined>;
  getAllFolders(): Promise<Folder[]>;
  createFolder(folder: InsertFolder): Promise<Folder>;
  updateFolder(id: string, folder: Partial<InsertFolder>): Promise<Folder>;
  deleteFolder(id: string): Promise<void>;
}

export class MemStorage implements IStorage {
  private projects: Map<string, Project> = new Map();
  private folders: Map<string, Folder> = new Map();
  private projectIdCounter = 1;
  private folderIdCounter = 1;

  async getProject(id: string): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async getAllProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = `project-${this.projectIdCounter++}`;
    const project: Project = {
      id,
      ...insertProject,
      folderId: insertProject.folderId || null,
      createdAt: new Date(),
    };
    this.projects.set(id, project);
    return project;
  }

  async getFolder(id: string): Promise<Folder | undefined> {
    return this.folders.get(id);
  }

  async getAllFolders(): Promise<Folder[]> {
    return Array.from(this.folders.values());
  }

  async createFolder(insertFolder: InsertFolder): Promise<Folder> {
    const id = `folder-${this.folderIdCounter++}`;
    const folder: Folder = {
      id,
      ...insertFolder,
      parentId: insertFolder.parentId || null,
      createdAt: new Date(),
    };
    this.folders.set(id, folder);
    return folder;
  }

  async updateFolder(id: string, folderData: Partial<InsertFolder>): Promise<Folder> {
    const folder = this.folders.get(id);
    if (!folder) {
      throw new Error("Folder not found");
    }
    const updatedFolder: Folder = {
      ...folder,
      ...folderData,
    };
    this.folders.set(id, updatedFolder);
    return updatedFolder;
  }

  async deleteFolder(id: string): Promise<void> {
    this.folders.delete(id);
  }
}

export const storage = new MemStorage();
