# Homework Organizer - Landing Page

## Project Overview
A professional, PWA-ready landing page for the Homework Organizer app - an AI-powered daily planner that helps students organize homework, reminders, and items to bring. Built with React + Vite, featuring a live demo with intelligent text parsing.

## Current State
✅ **Completed MVP Features:**
- **Hero Section**: Eye-catching landing with smooth scroll to demo
- **Interactive Demo**: Live text parser that organizes homework by subject
- **Features Showcase**: 8 key features displayed in responsive grid
- **How It Works**: Visual workflow with FAQ accordion
- **Footer**: Contact information and attribution
- **PWA Ready**: Manifest and service worker configured for mobile installation
- **Responsive Design**: Works beautifully on mobile and desktop

## Key Features

### Smart Text Parser
The parser (`client/src/utils/parser.ts`) intelligently analyzes pasted text to:
- Extract subjects from "Subject: Task description [date]" format
- Identify "Bring" items from lines starting with "Bring:"
- Parse dates in multiple formats (DD-MM-YYYY, DD/MM/YYYY, YYYY-MM-DD)
- Group tasks by subject and date
- Display with appropriate icons (BookOpen for homework, Backpack for bring items)

### Component Architecture
```
client/src/
├── components/
│   ├── Hero.tsx              # Landing section with CTAs
│   ├── DemoSection.tsx       # Interactive parser demo
│   ├── FeaturesSection.tsx   # Feature grid (8 features)
│   ├── HowItWorksSection.tsx # Workflow + FAQ
│   └── Footer.tsx            # Contact & attribution
├── pages/
│   └── Home.tsx              # Main page composing all sections
└── utils/
    └── parser.ts             # Homework text parsing logic
```

### Design System
- **Primary Color**: Blue (#3b82f6) - trustworthy, educational
- **Typography**: Inter for UI, JetBrains Mono for code
- **Icons**: Lucide React (BookOpen, Backpack, etc.)
- **Components**: Shadcn/ui with Tailwind CSS
- **Theme**: Light/dark mode support built-in

## Technical Stack
- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Shadcn/ui components
- **Icons**: Lucide React
- **Routing**: Wouter
- **PWA**: Manifest.json + Service Worker
- **State**: React hooks (useState)
- **Testing**: Data-testid attributes for e2e testing

## Running the Project
The workflow "Start application" runs `npm run dev` which starts:
- Express server for backend
- Vite dev server for frontend
- Available at http://localhost:5000

## Parser Example Input
```
English: Answer grammar sheet Ex.a all and Ex.b (1,2,3) 22-9-2025
Bring: Think SB on Monday
Math: Solve page 1 (1,2)
Science: Read chapter 5 and answer questions 1-5 25-9-2025
```

## PWA Installation
Users can install the app on their devices:
- **Mobile**: Tap Share → Add to Home Screen
- **Desktop**: Click install icon in address bar
- **Files**: manifest.json, public/sw.js

## Recent Changes (Oct 14, 2024)
- ✅ Replaced all emoji with proper Lucide React icons
- ✅ Added data-testid attributes to all interactive elements
- ✅ Implemented smart text parser with date detection
- ✅ Created fully responsive landing page
- ✅ Configured PWA with manifest and service worker
- ✅ Passed all e2e tests for demo functionality

## Future Enhancements (Not in MVP)
- Real APK download functionality
- Backend API for task persistence
- User authentication
- Push notifications
- PDF upload and parsing
- Interactive calendar view
- Task editing capabilities

## User Preferences
- Clean, professional design
- Blue, white, and light gray color scheme
- Student-friendly, approachable UI
- Focus on simplicity and clarity
