# Loqi AILanding Page

A modern, responsive landing page for Loqi AI- a Laravel development toolkit. Built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-first approach
- ⚡ Fast loading with Vite
- 🎯 Conversion-optimized layout
- ♿ Accessible components
- 🔍 SEO optimized

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts (Sora)** - Typography

## Design System

### Colors
- Primary Navy: `#1B1B3A`
- Primary Pink: `#F84AA7`
- White: `#FFFFFF`
- Light Gray: `#F8F9FA`
- Dark Gray: `#6B7280`

### Typography
- Font Family: Sora (Google Fonts)
- Weights: 300, 400, 500, 600, 700

## Project Structure

```
src/
├── components/
│   ├── Button.jsx          # Reusable button component
│   ├── Header.jsx          # Navigation header
│   ├── Hero.jsx            # Hero section
│   ├── TechStack.jsx       # Technology stack section
│   ├── Focus.jsx           # Focus on idea section
│   ├── Features.jsx        # Features grid
│   ├── Dashboard.jsx       # Dashboard preview
│   ├── Pricing.jsx         # Pricing cards
│   ├── Testimonials.jsx    # Customer testimonials
│   ├── FAQ.jsx             # FAQ accordion
│   └── Footer.jsx          # Footer section
├── assets/
│   └── images/             # Image assets
├── App.jsx                 # Main app component
├── main.jsx               # App entry point
└── index.css              # Global styles
```

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd larafast-landing
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Components

### Button
Reusable button component with multiple variants and sizes.

```jsx
<Button variant="primary" size="lg" onClick={handleClick}>
  Get Started
</Button>
```

### Header
Responsive navigation with mobile menu and smooth scrolling.

### Hero
Main landing section with call-to-action and code editor mockup.

### TechStack
Grid of technology logos and stack information.

### Focus
"Focus on the idea" section with code visualization.

### Features
Grid of feature cards with icons and descriptions.

### Dashboard
Interactive admin dashboard preview mockup.

### Pricing
Three-tier pricing cards with feature comparison.

### Testimonials
Customer testimonials with ratings and social proof.

### FAQ
Collapsible FAQ section with smooth animations.

### Footer
Complete footer with links, social media, and contact info.

## Customization

### Colors
Update colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'navy': '#1B1B3A',
      'pink': '#F84AA7',
      // ... other colors
    }
  }
}
```

### Typography
Change fonts in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'YourFont', sans-serif;
}
```

## Performance

- Optimized images and assets
- Lazy loading for better performance
- Semantic HTML for accessibility
- SEO meta tags included
- Mobile-responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For support, email support@larafast.com or visit our documentation.