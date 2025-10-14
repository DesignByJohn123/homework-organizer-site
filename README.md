# Homework Organizer

An AI-powered daily planner that organizes homework, reminders, and what to bring. Built with React + Vite and designed as a Progressive Web App (PWA).

## Features

- **Smart Text Parser**: Paste your daily plan and watch it automatically organize by subject
- **Homework Tracking**: Separate homework tasks from bring items
- **Due Date Detection**: Automatically extracts and displays due dates
- **Bring Items**: Special handling for things you need to bring
- **PWA Ready**: Install on mobile devices like a native app
- **Dark Mode**: Beautiful design in both light and dark themes
- **Offline Support**: Works without internet connection

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd homework-organizer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5000`

## Usage

### Demo the Parser

1. Navigate to the "Try Demo" section
2. Paste your homework text in the format:
   ```
   English: Answer grammar sheet Ex.a all and Ex.b (1,2,3) 22-9-2025
   Bring: Think SB on Monday
   Math: Solve page 1 (1,2)
   Science: Read chapter 5 and answer questions 1-5 25-9-2025
   ```
3. Click "Parse Tasks" to see organized results

### Parser Format

The parser recognizes:
- **Subject Tasks**: `Subject: Task description [DD-MM-YYYY]`
- **Bring Items**: `Bring: Item description [on Day]`
- **Due Dates**: Supports formats like `22-9-2025`, `22/9/2025`, or `2025-09-22`

## PWA Installation

### On Mobile (iOS/Android)

1. Open the website in your mobile browser
2. Tap the Share button (iOS) or Menu (Android)
3. Select "Add to Home Screen"
4. The app will install and appear on your home screen

### On Desktop

1. Look for the install icon in your browser's address bar
2. Click it and confirm installation
3. The app will open in its own window

## Project Structure

```
homework-organizer/
├── client/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   ├── utils/           # Utilities including parser
│   │   └── lib/             # Libraries and configs
│   └── index.html
├── public/
│   ├── manifest.json        # PWA manifest
│   └── sw.js               # Service worker
└── README.md
```

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify via their web interface or CLI

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn/ui** - UI components
- **Lucide React** - Icons
- **Wouter** - Routing

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for your own purposes.

## Contact

Made with love by John
- Email: john@example.com

## Acknowledgments

- Design inspired by modern productivity apps
- Icons by Lucide
- UI components by Shadcn
