# Front-End Coding Test — Cozy® E-Commerce Platform

A  e-commerce web application built with **React**, **TypeScript**, **Tailwind CSS**, and **Zustand** as part of the technical assessment.

---

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Ensure you have **Node.js** (`v20.0.0` or higher) and **pnpm** installed on your machine:

```bash
# Install pnpm globally if you don't have it yet
npm install -g pnpm
```
### 🛠️ Installation & Setup

```bash
git clone <YOUR_REPOSITORY_URL>
cd <YOUR_PROJECT_DIRECTORY_NAME>

# Install dependencies:
pnpm install

# Start the development server:
pnpm dev

Open your browser and navigate to http://localhost:5173 (or the URL shown in your terminal).
```

🧰 Tech Stack & Libraries

    Framework: React 18 + Vite

    Language: TypeScript

    Package Manager: pnpm

    State Management: Zustand (Global Cart & Product State)

    Styling: Tailwind CSS

    Icons: Lucide React & React Icons


## 📂 Project Structure

```text
src/
├── assets/          # Static media, icons, and image assets
├── components/      # Shared, reusable UI components (Navbar, UI elements)
├── constants/       # Global constants, config values, and static data
├── hooks/           # Reusable custom React hooks
├── lib/             # Helper functions, formatters, and utility libraries
├── routes/          # App routing configuration and page wrappers
├── store/           # Zustand global state stores
├── features/        # Modular feature domains
│   ├── cart/
│   │   ├── api/         # Cart API endpoints and fetchers
│   │   ├── components/  # Presentational UI components (e.g., CartItem)
│   │   └── containers/  # Stateful layout containers (e.g., CartList)
│   └── product/
│       ├── api/         # Product API endpoints and TypeScript types
│       ├── components/  # Presentational UI components (e.g., ThumbnailList)
│       └── containers/  # Stateful layout containers (e.g., ProductDetail)
├── App.tsx          # Root application component
└── main.tsx         # Application entry point