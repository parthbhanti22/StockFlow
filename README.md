# StockFlow - Enterprise Inventory Management System

StockFlow is a modern, high-performance inventory management dashboard designed for efficiency and clarity. Built with a focus on "Enterprise-grade" aesthetics and functionality, it provides a seamless experience for tracking stock, analyzing value, and managing product lifecycles.

**[🚀 View Live Demo](https://stock-flow-se.vercel.app/)**

## 🚀 Overview

StockFlow mimics the polish of tools like Linear or Vercel, utilizing a clean, whitespace-driven design system. It features real-time state management, local data persistence, and a responsive layout suitable for desktop and tablet usage.

## ✨ Key Features

- **Executive Dashboard**: Real-time overview of total inventory value, item counts, and low-stock alerts.
- **Inventory Management**: Advanced data table with sorting, filtering, and search capabilities.
- **Smart Validation**: Robust form validation for adding and editing products to prevent data corruption.
- **Data Persistence**: Automatic saving to `localStorage`, ensuring data persists across page reloads.
- **Responsive Design**: Fully adaptive layout with a collapsible mobile sidebar and optimized touch targets.
- **Visual Status Indicators**: Color-coded badges for "In Stock", "Low Stock", and "Out of Stock" states.

## 🛠️ Tech Stack

- **Framework**: React 19 (Functional Components & Hooks)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Persistence**: Browser LocalStorage API

## 📚 Documentation

Comprehensive documentation for this project is maintained in the **`Documentation/`** folder located in the project root. This includes:

- **`Documentation/Architecture.md`**: High-level overview of the component hierarchy and state flow.
- **`Documentation/DesignSystem.md`**: Guidelines on typography, color palettes (Royal Blue/Indigo), and spacing.
- **`Documentation/API.md`**: Description of the data interfaces and `StorageService` methods.
- **`Documentation/Deployment.md`**: Instructions for deploying to platforms like Vercel.

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/stockflow.git
   ```

2. Navigate to the project directory:
   ```bash
   cd stockflow
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server:

```bash
npm run dev
```

The application will typically be available at `http://localhost:5173`.

## 🏗️ Project Structure

```text
/
├── src/
│   ├── components/      # Reusable UI components (Sidebar, Tables, Modals)
│   ├── services/        # Business logic & Data services (StorageService)
│   ├── types.ts         # TypeScript interfaces and type definitions
│   ├── constants.ts     # Initial data and configuration constants
│   ├── App.tsx          # Main application controller
│   └── index.tsx        # Entry point
├── Documentation/       # Project documentation files
├── index.html           # HTML entry point
└── README.md            # Project documentation
```

## 🎨 Design Decisions

- **Typography**: Inter (via Google Fonts) for a clean, highly readable sans-serif interface.
- **Color Strategy**: A neutral Slate/Gray base with Indigo (`#4F46E5`) for primary actions to convey trust and professionalism.
- **UX Patterns**: 
  - **Modals** for quick actions to preserve user context.
  - **Empty States** with illustrations to guide users when data is missing.
  - **Real-time Feedback** via instant UI updates upon data mutation.

## 📄 License

This project is licensed under the MIT License.
