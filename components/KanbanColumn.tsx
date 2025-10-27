'use client';

import { Task, Column } from '@/types/kanban';
import TaskCard from './TaskCard';

interface KanbanColumnProps {
  column: Column;
  tasks: Task[];
  onAddTask: (status: 'todo' | 'in-progress' | 'done') => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: string) => void;
  onDrop: (taskId: string, newStatus: 'todo' | 'in-progress' | 'done') => void;
}

export default function KanbanColumn({
  column,
  tasks,
  onAddTask,
  onEditTask,
  onDeleteTask,
  onDrop,
}: KanbanColumnProps) {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    if (taskId) {
      onDrop(taskId, column.status);
    }
  };

  const getColumnColor = () => {
    switch (column.status) {
      case 'todo':
        return 'bg-gray-100 dark:bg-gray-900';
      case 'in-progress':
        return 'bg-blue-50 dark:bg-blue-950';
      case 'done':
        return 'bg-green-50 dark:bg-green-950';
      default:
        return 'bg-gray-100 dark:bg-gray-900';
    }
  };

  const getHeaderColor = () => {
    switch (column.status) {
      case 'todo':
        return 'bg-gray-200 dark:bg-gray-800';
      case 'in-progress':
        return 'bg-blue-200 dark:bg-blue-900';
      case 'done':
        return 'bg-green-200 dark:bg-green-900';
      default:
        return 'bg-gray-200 dark:bg-gray-800';
    }
  };

  return (
    <div
      className={`${getColumnColor()} rounded-lg p-4 min-w-[300px] flex-1`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className={`${getHeaderColor()} rounded-lg p-3 mb-4 flex justify-between items-center`}>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          {column.title} ({tasks.length})
        </h2>
        <button
          onClick={() => onAddTask(column.status)}
          className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
          aria-label={`Add task to ${column.title}`}
        >
          + Add
        </button>
      </div>
      <div className="space-y-3 min-h-[200px]">
        {tasks.map((task) => (
          <div
            key={task.id}
            draggable
            onDragStart={(e) => e.dataTransfer.setData('taskId', task.id)}
          >
            <TaskCard task={task} onEdit={onEditTask} onDelete={onDeleteTask} />
          </div>
        ))}
      </div>
    </div>
  );
}
