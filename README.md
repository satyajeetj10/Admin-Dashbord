# Nexus UI - Admin Dashboard

A modern, high-performance, and fully responsive Admin Dashboard built with React, TypeScript, and Vite. This project provides a robust foundation for building complex, data-heavy administrative interfaces with an emphasis on beautiful UI, accessibility, and excellent developer experience.

## ✨ Features

- **Modern Tech Stack**: React 19, TypeScript, and Vite for lightning-fast development.
- **Beautiful UI Components**: Built on top of [Radix UI](https://www.radix-ui.com/) and styled with [Tailwind CSS v4](https://tailwindcss.com/).
- **Advanced State Management**: Utilizes [Zustand](https://github.com/pmndrs/zustand) for lightweight, global state handling.
- **Dynamic Routing**: Managed by [React Router v7](https://reactrouter.com/).
- **Data Visualization**: Interactive charts and graphs powered by [Recharts](https://recharts.org/).
- **Form Handling & Validation**: Integrated [React Hook Form](https://react-hook-form.com/) and [Zod](https://zod.dev/) for robust data entry.
- **Fluid Animations**: Smooth transitions and micro-interactions using [Framer Motion](https://www.framer.com/motion/).
- **Theme Support**: Built-in support for Light, Dark, and System theme modes.
- **Fully Responsive**: Optimized layouts for desktops, tablets, and mobile devices.

## 🚀 Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | React 19, Vite |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS, class-variance-authority, clsx, tailwind-merge |
| **Components** | Radix UI, Lucide React (Icons) |
| **State Management** | Zustand |
| **Data Fetching** | TanStack React Query |
| **Data Table** | TanStack React Table |
| **Routing** | React Router DOM |
| **Charts** | Recharts |

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/saibhure/Admin-Dashboard.git
   cd Admin-Dashboard
   ```

2. **Install dependencies**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

## 🏗️ Project Structure

```
src/
├── assets/        # Static files and images
├── components/    # Reusable UI components (Layouts, UI toolkit, Shared)
├── layouts/       # Page layout wrappers (e.g., DashboardLayout)
├── lib/           # Utility functions and mock data
├── pages/         # Application pages/views
├── routes/        # Routing configuration
└── store/         # Zustand state stores
```

## 🛠️ Scripts

- `npm run dev` - Starts the Vite development server.
- `npm run build` - Compiles TypeScript and builds the app for production.
- `npm run lint` - Lints the codebase using Oxlint.
- `npm run preview` - Previews the production build locally.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
