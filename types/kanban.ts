export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
  createdAt: Date;
}

export interface Column {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
}
