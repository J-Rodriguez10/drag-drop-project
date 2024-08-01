// Drag & Drop Interfaces

/**
 * Draggable Interface
 * Represents an object that can be dragged.
 * Classes implementing this interface should handle the start and DragTarget (the container that will receive the Draggable.)
 */
export interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

export interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
}
