import { ProjectInput } from './components/project-input.js';
import { ProjectList } from './components/project-list.js';

// Main Entry Point of the Application

// Instantiate a new ProjectInput to handle project creation form
new ProjectInput();

/**
 * Instantiate a new ProjectList for active projects.
 * This will manage and render the list of active projects.
 */
new ProjectList('active');

/**
 * Instantiate a new ProjectList for finished projects.
 * This will manage and render the list of finished projects.
 */
new ProjectList('finished');
