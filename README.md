# ProfileHub

A modern, responsive personal professional profile application built with React, TypeScript, and Tailwind CSS.

ProfileHub brings professional information, resume management, cover letters, interview preparation, and time management into one centralized application.

## Features

- 👤 Professional Profile
- 📄 Resume
  - Resume information
  - In-app resume preview
  - Resume download
  - Google Docs resume access
- ✉️ Cover Letters
- 🧠 Interview Q&A
  - JavaScript
  - TypeScript
  - React
  - Next.js
  - Redux
  - HTML
  - CSS
- ⏱️ Time Management
- 📱 Fully responsive UI
- 🎨 Modern premium interface
- ✅ Form validation
- 📝 Form submissions logged to the browser console
- ⚡ Fast Vite development environment

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- Animate.css

## Project Structure

```text
ProfileHub/
├── public/
│   └── resume/
│       └── Chanchal_Kumar_Mandal_Frontend_Resume.pdf
│
├── src/
│   ├── components/
│   │   ├── Profile.tsx
│   │   ├── Resume.tsx
│   │   ├── CoverLetters.tsx
│   │   ├── InterviewQA.tsx
│   │   └── TimeManagement.tsx
│   │
│   ├── data/
│   │   └── profile.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── public/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md

## Demo

<img width="1578" height="700" alt="profilehub1" src="https://github.com/user-attachments/assets/417894a5-e9b8-4d01-9343-587b47e88a6e" />

<img width="1569" height="3494" alt="profilehub" src="https://github.com/user-attachments/assets/564bdc6f-5f26-4b69-99a2-1de011e030aa" />


Getting Started
1. Clone the repository
git clone https://github.com/chanchal-kumar-mandal/profilehub.git
2. Navigate to the project
cd profilehub
3. Install dependencies
npm install
4. Start the development server
npm run dev

The application will be available at:

http://localhost:5173
Available Scripts
Development
npm run dev

Starts the Vite development server with Hot Module Replacement.

Production Build
npm run build

Creates an optimized production build.

Preview Production Build
npm run preview

Runs the production build locally for testing.

Lint
npm run lint

Runs the configured linting rules.

Resume

The resume PDF is stored inside the Vite public directory:

public/resume/Chanchal_Kumar_Mandal_Frontend_Resume.pdf

It is accessible from the application using:

/resume/Chanchal_Kumar_Mandal_Frontend_Resume.pdf

The resume component supports:

Preview
Download
Google Docs access

Resume configuration is maintained in:

src/data/profile.ts

Example:

export const resumeData = {
  name: "Chanchal Kumar Mandal",
  title: "Senior Frontend Engineer",
  pdfUrl: "/resume/Chanchal_Kumar_Mandal_Frontend_Resume.pdf",
  googleDocsUrl:
    "https://drive.google.com/file/d/1pQt7eZecMG7Z6aIEZlkje6Oh9eXZry6m/view",
  lastUpdated: "October 2026",
};
Development Guidelines
Component-Based Architecture

Each major ProfileHub section should be maintained as a separate React component.

Avoid creating one large component containing the entire application.

Form Validation

All forms should validate user input before submission.

Every successful form submission should also log the submitted values:

console.log(formValues);
Responsive Design

The application should work properly across:

Mobile
Tablet
Laptop
Desktop

Tailwind responsive utilities should be preferred for responsive layouts.

UI

The application follows a clean, modern, professional visual style using:

Rounded cards
Subtle borders
Soft shadows
Consistent spacing
Indigo-based primary actions
Responsive layouts
Lucide icons
Environment Variables

If environment-specific configuration is required, create:

.env

Do not commit sensitive credentials or API keys to Git.

For local development:

.env.local

can be used for private environment variables.

Build

Create a production build with:

npm run build

The generated production files will be available in:

dist/
Deployment

ProfileHub can be deployed to modern static hosting platforms such as:

Netlify
Vercel
GitHub Pages
Cloudflare Pages

For Vite deployments, make sure the hosting platform is configured to serve the application correctly for client-side routes.

Author

Chanchal Kumar Mandal

Senior Frontend Engineer

LinkedIn: https://www.linkedin.com/in/ckmandal9/
GitHub: https://github.com/chanchal-kumar-mandal
License

This project is intended for personal and professional use.


One small correction: I would remove the duplicated `public/` entry in the project structure before committin