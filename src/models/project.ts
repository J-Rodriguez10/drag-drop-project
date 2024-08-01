/**
 * ProjectStatus Enum
 * Enum representing the possible statuses of a project.
 * - Active: The project is currently active and ongoing.
 * - Finished: The project has been completed.
 */
export enum ProjectStatus {
  Active,
  Finished,
}

/**
 * Project Class
 * Represents a project with an ID, title, description, number of people involved, and status.
 */
export class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}
