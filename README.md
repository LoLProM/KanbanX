# KanbanX

A modern Kanban board application built with Next.js, React, and Tailwind CSS for practicing full-stack development skills.

## Features

- ✨ **Drag-and-Drop**: Move tasks between columns with smooth drag-and-drop functionality
- 📝 **Task Management**: Create, edit, and delete tasks with ease
- 🎨 **Modern UI**: Beautiful, responsive interface built with Tailwind CSS
- 🌙 **Dark Mode**: Automatic dark mode support based on system preferences
- 💾 **Persistent Storage**: Tasks are saved to local storage
- 🚀 **Fast**: Built with Next.js 16 and React 19

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Frontend**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/LoLProM/KanbanX.git
cd KanbanX
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
KanbanX/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles with Tailwind
├── components/            # React components
│   ├── KanbanBoard.tsx   # Main Kanban board component
│   ├── KanbanColumn.tsx  # Column component
│   ├── TaskCard.tsx      # Individual task card
│   └── TaskModal.tsx     # Modal for creating/editing tasks
├── types/                # TypeScript type definitions
│   └── kanban.ts         # Kanban-related types
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Usage

### Adding a Task

1. Click the "+ Add" button in any column (To Do, In Progress, or Done)
2. Fill in the task title and description
3. Select the status (optional, defaults to the column you clicked)
4. Click "Create" to add the task

### Editing a Task

1. Click the edit icon (pencil) on any task card
2. Modify the task details
3. Click "Update" to save changes

### Deleting a Task

1. Click the delete icon (trash) on any task card
2. Confirm the deletion in the dialog

### Moving Tasks

Simply drag a task card and drop it into another column to change its status.

## Features in Detail

### Kanban Columns

The board has three columns:
- **To Do**: Tasks that need to be started
- **In Progress**: Tasks currently being worked on
- **Done**: Completed tasks

### Local Storage

All tasks are automatically saved to your browser's local storage, so your data persists between sessions.

### Responsive Design

The application is fully responsive and works on desktop, tablet, and mobile devices.

## License

ISC

## Author

Full Stack Developer practicing with modern web technologies
