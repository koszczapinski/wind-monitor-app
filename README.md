# Wind Monitor App

A modern React application for wind monitoring, built with Vite, TypeScript, and TailwindCSS.

## Tech Stack

- React 18.3
- TypeScript
- Vite 6.0
- TailwindCSS
- Radix UI Components
- ViSX for Data Visualization
- TanStack Query (React Query)
- Sonner for Toasts
- Axios for API calls

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd wind-monitor-app
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production (runs TypeScript compilation first)
- `npm run lint` - Runs ESLint for code quality checks
- `npm run preview` - Preview the production build locally

## Project Structure

```
wind-monitor-app/
├── src/
│   ├── api/          # API client and related utilities
│   ├── components/   # React components
│   │   └── ui/      # Shared UI components
│   ├── hooks/       # Custom React hooks
│   ├── lib/         # Utility functions and helpers
│   └── App.tsx      # Main application component
├── public/          # Static assets
└── index.html       # Entry HTML file
```

## Features

- Real-time wind data monitoring
- Interactive wind charts using ViSX
- Coordinate input system
- Toast notifications using Sonner
- Type-safe development with TypeScript
- Modern UI components with Radix UI
- Responsive design with TailwindCSS

## Development

This project uses several modern development tools:

- **TypeScript** for type safety
- **ESLint** for code quality
- **TailwindCSS** for styling
- **Vite** for fast development and building
- **React Query** for server state management

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
