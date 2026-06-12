# Abhay Ayare - Digital Portfolio

A premium, interactive digital portfolio showcasing software engineering, artificial intelligence research, and astronomy projects. The application is built with a modern, high-performance tech stack featuring rich visual experiences, custom canvas starfields, and smooth smooth-scrolling animations.

---

## 🌟 About the Project

This project serves as a showcase for Abhay Ayare's work, experience, research, and interests. It highlights projects in different fields (CS, AI, Astronomy), presents a detailed interactive milestone journey, and provides a direct contact form.

### Core Visual Features
* **Interactive Starfield Canvas**: Dynamic, custom-drawn rendering loop matching astronomical themes.
* **Smooth Lenis Scroll**: Custom smooth scroll integration matching premium UI standards.
* **Modern Gradients & Glassmorphism**: Sleek, immersive dark mode design featuring Tailind CSS v4 and Framer Motion.
* **Interactive Case Studies**: Detailed modals highlighting project context, architecture, tech stack, and challenges.

---

## 🛠️ Tech Stack

### Frontend & Core Utilities
* **React 19** & **TypeScript** - Component hierarchy and robust static typing
* **Vite** - Lightning-fast development server and optimized production bundler
* **Tailwind CSS v4** - Dynamic layout styles and fluid utility classes
* **Framer Motion** & **GSAP** - Premium transition-animations and micro-interactions
* **Lucide React** - Clean and modern SVG icon sets
* **Lenis Scroll** - Custom physics-based smooth scrolling

### Project Organization
The workspace is managed as a monorepo via **pnpm workspaces**, grouping projects and assets in the `artifacts/` folder:
* `artifacts/abhay-portfolio` - The main React+Vite web portfolio app.
* `pnpm-workspace.yaml` - Defines workspaces and common catalog dependencies.

---

## 🚀 How to Run Locally

Follow these steps to run the portfolio website on your local machine:

### Prerequisites
Make sure you have **Node.js** (v18 or higher) and **pnpm** installed on your system.
* Install pnpm globally (if you don't have it):
  ```bash
  npm install -g pnpm
  ```

### 1. Clone & Navigate
Clone the repository and enter the project folder:
```bash
git clone <repository-url>
cd Abhay-Ayare-Digital
```

### 2. Install Dependencies
Run the install command from the root of the workspace. This will install all packages across all monorepo workspaces:
```bash
pnpm install
```

### 3. Run Development Server
Start the local development server for the portfolio web app:
```bash
pnpm dev
```
Once started, the server will display the local URL (usually `http://localhost:5173`). Open this URL in your web browser.

### 4. Build for Production
To generate a production bundle of the portfolio site:
```bash
pnpm build
```
The optimized production build will be available inside `artifacts/abhay-portfolio/dist`.

---

## ⚙️ Configuration & Customization

You can customize the personal details (such as your name, initials, profile picture, and short introduction) directly inside the configuration file:
* **File location**: [profileConfig.ts](file:///e:/Abhay_Ayare/Projects/portfolio/Abhay-Ayare-Digital/artifacts/abhay-portfolio/src/profileConfig.ts)

Simply edit the exports in this file to update the information rendered in both the Hero and About sections of the website.
