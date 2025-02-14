export class Student {
    id?: number; // Auto-incremented ID (optional since the backend assigns it)
    name!: string;
    age?: number;
    email!: string;
    course!: string;
  }