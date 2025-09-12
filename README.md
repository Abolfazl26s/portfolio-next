# 🚀 My Personal Portfolio (Abolfazl Saeidabadi)

Welcome to my personal portfolio! This project serves as a comprehensive showcase of my skills, projects, and professional journey as a Frontend Developer. Built with modern web technologies, it emphasizes performance, user experience (UX), and a clean, responsive design.

## ✨ Features

- **Responsive Design:** Optimized for seamless viewing across all devices (mobile, tablet, desktop).
- **Dark/Light Mode Toggle:** A fully integrated theme switcher for personalized browsing experience.
- **Dynamic Project Showcase:** A dedicated section to display my projects with detailed information and pagination.
- **Skills Overview:** A categorized list of my technical skills, demonstrating my expertise.
- **Certificates Display:** A showcase of my academic and professional certifications.
- **Smooth Scrolling:** Enhanced user experience with smooth navigation between sections.
- **Scroll-to-Top Button:** A convenient button for quick navigation back to the top of long pages.
- **Animated Download Button:** A visually engaging download button for my CV, providing instant feedback.
- **Optimized Data Fetching:** Leverages Next.js Server Components and intelligent data caching for lightning-fast load times.
- **Type-Safe Codebase:** Built with TypeScript for enhanced code quality, maintainability, and error prevention.
- **Modern Styling:** Utilizes Tailwind CSS for rapid and consistent UI development.

## 🛠️ Technologies Used

This project is built using a robust and modern stack:

- **Next.js 14+ (App Router):** The React framework for production, enabling server-side rendering (SSR), static site generation (SSG), and API Routes.
- **React 18:** For building interactive user interfaces.
- **TypeScript:** For type safety, improved code quality, and better developer experience.
- **Tailwind CSS:** A utility-first CSS framework for rapid and custom styling.
- **Framer Motion:** For smooth and performant animations (e.g., scroll-to-top button, modals).
- **Lucide React:** A beautiful and consistent icon library.
- **External JSON API:** Data for projects, skills, and certificates are fetched from a separate JSON source.

## 🚀 Getting Started

Follow these steps to get a local copy of the project up and running on your machine.

### Prerequisites

- Node.js (v18.x or higher recommended)
- npm or Yarn (npm v9.x or higher recommended)
- Git

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/your-username/your-portfolio-repo.git](https://github.com/your-username/your-portfolio-repo.git)
    cd your-portfolio-repo
    ```

    (Replace `your-username` and `your-portfolio-repo` with your actual GitHub username and repository name.)

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up Environment Variables:**
    This project fetches data from an external JSON API. While the `data-service.ts` file directly references the external URL, for local development or if you need to override it, you might use a `.env.local` file.

    Create a `.env.local` file in the root of your project:

    ```
    # No specific environment variables are strictly required for the current setup
    # as the API URL is hardcoded in lib/data-service.ts for simplicity.
    # However, you can add any other variables your project might need here.
    # For example, if you wanted to make the API_URL configurable:
    # NEXT_PUBLIC_EXTERNAL_API_URL="[https://abolfazl26s.github.io/project_data/data/db.json](https://abolfazl26s.github.io/project_data/data/db.json)"
    ```

    **Note:** For Vercel deployment, remember to add any necessary environment variables directly in the Vercel project settings.

4.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

5.  **Open in your browser:**
    Navigate to `http://localhost:3000` in your web browser.

## 📦 Project Structure
