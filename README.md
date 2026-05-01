# Olive Landing Page

This project recreates the Olive landing page with pixel-accurate layout, spacing,
typography, and color matching based on a reference screenshot. The center
carousel uses a synchronized focus system so the active card is highlighted and
the phone mockup updates to match it.

## Features

- Pixel-accurate hero, navigation, and phone mockup layout
- Controlled carousel motion with timed auto-rotation
- Active card zoom effect with focus styling
- Phone mockup synchronized to the active carousel card

## Tech Stack

- React + Vite
- Tailwind CSS

## Project Structure

- src/components/Navbar.jsx
- src/components/Hero.jsx
- src/components/PhoneMockup.jsx
- src/components/ScrollingCarousel.jsx
- src/App.jsx
- src/main.jsx

## Getting Started

1. Install dependencies
	- `npm install`
2. Start the development server
	- `npm run dev`
3. Build for production
	- `npm run build`
4. Preview the production build
	- `npm run preview`

## Configuration

- Tailwind configuration is in `tailwind.config.js`.
- Global styles and carousel helpers are in `src/index.css`.

## Notes

- Carousel motion is driven by React state and timed updates.
- The phone mockup reads the active card data for synchronized content.
