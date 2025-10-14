# Design Guidelines: Homework Organizer Landing Page

## Design Approach
**Reference-Based Design**: Drawing inspiration from modern productivity apps like Notion, Linear, and educational platforms while maintaining a youthful, student-friendly aesthetic.

## Core Design Principles
- **Educational Focus**: Professional yet approachable for students
- **Clarity First**: Clean layouts that don't overwhelm users
- **Action-Oriented**: Clear CTAs guiding users to demo and download

---

## Color Palette

### Primary Colors
- **Primary Blue**: 217 91% 60% (vibrant, trustworthy education blue)
- **Primary Dark**: 217 91% 45% (hover states, accents)

### Neutrals (Dark Mode Ready)
- **Background**: 0 0% 100% (pure white)
- **Surface**: 210 20% 98% (light gray containers)
- **Text Primary**: 222 47% 11% (near-black)
- **Text Secondary**: 215 16% 47% (muted gray)
- **Border**: 214 32% 91% (subtle dividers)

### Accent Colors
- **Success Green**: 142 76% 36% (completed tasks)
- **Homework Orange**: 25 95% 53% (📘 homework indicator)
- **Bring Purple**: 262 52% 47% (🎒 bring items indicator)

---

## Typography

### Font Stack
- **Primary**: 'Inter', system-ui, sans-serif (via Google Fonts CDN)
- **Mono** (for demo code): 'JetBrains Mono', monospace

### Type Scale
- **Hero Title**: text-5xl md:text-6xl font-bold (48-60px)
- **Hero Subtitle**: text-xl md:text-2xl font-normal (20-24px)
- **Section Headings**: text-3xl md:text-4xl font-bold (30-36px)
- **Feature Titles**: text-xl font-semibold (20px)
- **Body Text**: text-base md:text-lg (16-18px)
- **Small Text**: text-sm (14px)

---

## Layout System

### Spacing Primitives
Use Tailwind units: **2, 4, 6, 8, 12, 16, 20, 24, 32**
- Small gaps: gap-4, p-4
- Medium spacing: py-12, px-6
- Large sections: py-20 md:py-32
- Component padding: p-6 md:p-8

### Container Widths
- **Full-width sections**: w-full with inner max-w-7xl mx-auto px-6
- **Content sections**: max-w-6xl mx-auto
- **Demo box**: max-w-4xl mx-auto

---

## Component Library

### 1. Hero Section (Homepage)
- **Layout**: Centered, single-column, min-h-screen flex items-center
- **Background**: Gradient from white to light blue (bg-gradient-to-b from-white to-blue-50)
- **Title**: "Homework Organizer" - bold, large, text-gray-900
- **Subtitle**: "An AI-powered daily planner that organizes homework, reminders, and what to bring." - text-gray-600, max-w-2xl
- **CTA Buttons**: 
  - Primary: "Try Demo" - solid blue button (bg-blue-600 hover:bg-blue-700)
  - Secondary: "Download APK" - outline button with border-blue-600
- **Hero Image**: Large illustration/screenshot showing the app interface organizing homework tasks, placed below CTAs or as background element (max-w-3xl)

### 2. Demo Section
- **Container**: White card with shadow-xl, rounded-2xl, p-8
- **Input Area**: 
  - Large textarea with border-gray-300, rounded-lg, font-mono, min-h-48
  - Placeholder text showing example format
- **Parse Button**: Prominent blue button, w-full md:w-auto, mb-6
- **Results Display**:
  - Grid layout: grid md:grid-cols-2 gap-6
  - Subject cards: bg-blue-50 rounded-lg p-6
  - Icons: 📘 (text-2xl) for homework, 🎒 for bring items
  - Date badges: bg-blue-600 text-white px-3 py-1 rounded-full text-sm

### 3. Features Section
- **Layout**: Three-column grid on desktop (grid md:grid-cols-2 lg:grid-cols-3 gap-8)
- **Feature Cards**:
  - White background, rounded-xl, p-6
  - Icon area: bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center
  - Title: font-semibold text-lg mb-2
  - Description: text-gray-600 text-sm
- **8 Features Listed**:
  1. PDF/Text Reading (📄)
  2. Auto-Sort by Subject (📚)
  3. Homework/Bring Separation (✂️)
  4. Due Dates & Reminders (⏰)
  5. Weekly Calendar (📅)
  6. Notifications (🔔)
  7. Manual Editing (✏️)
  8. Offline Access (📱)

### 4. How It Works Section
- **Workflow Diagram**: Horizontal steps with arrows
  - 4 steps: Upload → AI Parse → Organize → Remind
  - Each step: rounded-lg card, bg-gradient-to-br from-blue-50 to-purple-50
- **FAQ Accordion**:
  - Questions in bold, clickable with chevron icons
  - Answers: text-gray-600, expandable panels
  - Border-b between items
  - 4 Questions:
    1. "Is it free?"
    2. "Can I use it on mobile?"
    3. "Does it work offline?"
    4. "Can I customize subjects?"

### 5. Footer
- **Layout**: bg-gray-50, py-12, border-t border-gray-200
- **Content**: Centered, text-sm text-gray-600
- **Creator Credit**: "Made by John" with heart icon
- **Contact**: Blue mailto link (text-blue-600 hover:underline)
- **Copyright**: © 2024 Homework Organizer

---

## Images

### Hero Image
**Description**: A clean, modern screenshot or illustration showing the app interface with:
- Multiple subject cards (English, Math, Science)
- Homework items with checkboxes
- Bring items with bag icons
- Calendar view in corner
- Soft shadows and rounded corners matching design system

**Placement**: Below hero CTAs, centered, max-w-3xl with subtle shadow-2xl and rounded-2xl border

### Feature Section Icons
Use emoji or simple SVG icons from Heroicons via CDN for features section

---

## Interaction Patterns

### Buttons
- **Primary**: Solid blue, white text, hover lifts with shadow
- **Secondary**: Outline with blue border, hover fills with blue
- **All buttons**: rounded-lg, px-6 py-3, font-medium, transition-all

### Demo Parsing
- Loading state: Show spinner on Parse button
- Results animate in with stagger effect
- Empty state: Friendly message prompting user to paste text

### Scroll Behavior
- "Try Demo" button uses smooth scroll to demo section
- Subtle fade-in animations as sections enter viewport

### Responsive Behavior
- Mobile: Single column, larger touch targets, collapsible demo
- Tablet: Two-column features grid
- Desktop: Full three-column layout, wider containers

---

## Accessibility
- High contrast text (WCAG AA compliant)
- Focus states on all interactive elements (ring-2 ring-blue-500)
- Semantic HTML (nav, main, section, footer)
- ARIA labels for icon-only elements