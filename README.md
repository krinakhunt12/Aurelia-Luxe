# Aurelia Luxe

A modern, elegant frontend e-commerce platform for luxury jewelry featuring AI-powered styling advice and a premium shopping experience.

## ⚠️ Note

Currently, this is a **frontend-only** application. Backend integration and payment processing features will be added in future releases.

## 🌟 Features

- **AI Stylist**: Integrated Google Gemini API for personalized jewelry styling recommendations
- **Product Collections**: Browse curated collections (Rings, Necklaces, Earrings, Bridal)
- **Shopping Cart & Wishlist**: Full cart management and wishlist functionality
- **User Authentication**: Login/signup modal for user accounts
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Modern Tech Stack**: React 19, TypeScript, Vite, and React Router

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd Aurelia-Luxe

# Install dependencies
npm install

# Create .env file with your API key
echo 'VITE_API_KEY=your_google_genai_api_key_here' > .env

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## 📦 Dependencies

- **React**: UI library
- **TypeScript**: Type safety
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router DOM**: Client-side routing
- **Lucide React**: Icon library
- **@google/genai**: AI styling recommendations

## 📁 Project Structure

```
src/
├── components/        # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Collections.tsx
│   ├── BestSellers.tsx
│   ├── AIStylist.tsx
│   ├── Footer.tsx
│   └── ...
├── context/          # App context for state management
│   └── AppContext.tsx
├── services/         # API services
│   └── gemini.ts     # Google Gemini API integration
├── types.ts          # TypeScript interfaces
├── App.tsx           # Main app component
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## 🔧 Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🎨 Styling

The project uses **Tailwind CSS** for styling with custom extensions for:
- Custom fonts: Inter (sans-serif) and Playfair Display (serif)
- Custom animations: fadeIn, slideInFromBottom, zoomIn
- Custom scrollbar styling

## 🤖 AI Styling Feature

The AI Stylist uses Google's Gemini API to provide personalized jewelry recommendations. Make sure to:

1. Get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Add it to your `.env` file as `VITE_API_KEY`

## 🌐 Routing

- `/` - Home page
- `/collections` - All collections
- `/shop` - Shop/Best sellers
- `/bespoke` - Bespoke design consultation
- `/story` - Brand story

## 📝 License

This project is part of Aurelia Luxe brand
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
