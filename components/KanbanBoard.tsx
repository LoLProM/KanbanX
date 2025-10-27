'use client';

import { useState, useEffect } from 'react';
import { Task, Column } from '@/types/kanban';
import KanbanColumn from './KanbanColumn';
import TaskModal from './TaskModal';

const COLUMNS: Column[] = [
  { id: '1', title: 'To Do', status: 'todo' },
  { id: '2', title: 'In Progress', status: 'in-progress' },
  { id: '3', title: 'Done', status: 'done' },
];

const INITIAL_TASKS: Task[] = [
  {
    id: '1',
    title: 'Setup Next.js Project',
    description: 'Initialize a new Next.js project with TypeScript and Tailwind CSS',
    status: 'done',
    createdAt: new Date('2025-01-01'),
  },
  {
    id: '2',
    title: 'Create Kanban Board',
    description: 'Build a functional Kanban board with drag-and-drop functionality',
    status: 'in-progress',
    createdAt: new Date('2025-01-02'),
  },
  {
    id: '3',
    title: 'Add Task Management',
    description: 'Implement add, edit, and delete functionality for tasks',
    status: 'todo',
    createdAt: new Date('2025-01-03'),
  },
];

export default function KanbanBoard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | undefined>();
  const [defaultStatus, setDefaultStatus] = useState<'todo' | 'in-progress' | 'done'>('todo');

  useEffect(() => {
    // Load tasks from localStorage (client-side only)
    if (typeof window !== 'undefined') {
      const savedTasks = localStorage.getItem('kanban-tasks');
      if (savedTasks) {
        const parsedTasks = JSON.parse(savedTasks);
        setTasks(parsedTasks.map((task: Task) => ({
          ...task,
          createdAt: new Date(task.createdAt),
        })));
      } else {
        setTasks(INITIAL_TASKS);
      }
    }
  }, []);

  useEffect(() => {
    // Save tasks to localStorage (client-side only)
    if (typeof window !== 'undefined' && tasks.length > 0) {
      localStorage.setItem('kanban-tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleAddTask = (status: 'todo' | 'in-progress' | 'done') => {
    setEditingTask(undefined);
    setDefaultStatus(status);
    setIsModalOpen(true);
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleDeleteTask = (taskId: string) => {
    if (confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter((task) => task.id !== taskId));
    }
  };

  const handleSaveTask = (taskData: Partial<Task>) => {
    if (editingTask) {
      // Update existing task
      setTasks(
        tasks.map((task) =>
          task.id === editingTask.id
            ? { ...task, ...taskData }
            : task
        )
      );
    } else {
      // Add new task
      const newTask: Task = {
        id: crypto.randomUUID(),
        title: taskData.title || '',
        description: taskData.description || '',
        status: taskData.status || 'todo',
        createdAt: new Date(),
      };
      setTasks([...tasks, newTask]);
    }
  };

  const handleDrop = (taskId: string, newStatus: 'todo' | 'in-progress' | 'done') => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const getTasksByStatus = (status: 'todo' | 'in-progress' | 'done') => {
    return tasks.filter((task) => task.status === status);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            KanbanX Board
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your tasks with ease using drag-and-drop
          </p>
        </header>

        <div className="flex gap-6 overflow-x-auto pb-4">
          {COLUMNS.map((column) => (
            <KanbanColumn
              key={column.id}
              column={column}
              tasks={getTasksByStatus(column.status)}
              onAddTask={handleAddTask}
              onEditTask={handleEditTask}
              onDeleteTask={handleDeleteTask}
              onDrop={handleDrop}
            />
          ))}
        </div>
      </div>

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveTask}
        task={editingTask}
        defaultStatus={defaultStatus}
      />
    </div>
  );
}
