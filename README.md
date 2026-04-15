# Modern Shopify Theme

A clean, contemporary Shopify theme with modern design principles.

## Features

- Responsive design that works on all devices
- Clean, minimalist aesthetic
- Fast loading and optimized performance
- Customizable colors and typography
- Product grid layouts
- Hero section with call-to-action
- Featured collection section
- Image with text section
- Full cart functionality
- Mobile-friendly navigation

## Installation

1. Install Shopify CLI:
   ```bash
   npm install -g @shopify/cli @shopify/theme
   ```

2. Configure your store in `config.yml`:
   - Add your store URL
   - Add your theme password
   - Add your theme ID (optional)

3. Push theme to Shopify:
   ```bash
   shopify theme push
   ```

## Development

To start local development:

```bash
shopify theme dev
```

This will start a local server and watch for file changes.

## Theme Structure

```
├── assets/
│   ├── theme.css          # Main stylesheet
│   └── theme.js           # JavaScript functionality
├── config/
│   └── settings_schema.json  # Theme settings
├── layout/
│   └── theme.liquid       # Main layout template
├── sections/
│   ├── header.liquid      # Header section
│   ├── footer.liquid      # Footer section
│   ├── hero.liquid        # Hero banner
│   ├── featured-collection.liquid
│   └── image-with-text.liquid
├── templates/
│   ├── index.liquid       # Homepage
│   ├── product.liquid     # Product page
│   ├── collection.liquid  # Collection page
│   └── cart.liquid        # Cart page
└── config.yml             # Shopify configuration
```

## Customization

### Colors
Navigate to Theme Settings > Colors to customize:
- Primary color
- Secondary color
- Accent color

### Typography
Navigate to Theme Settings > Typography to select fonts for:
- Headings
- Body text

### Sections
All sections are customizable through the Shopify theme editor:
- Hero banner
- Featured collections
- Image with text blocks

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

MIT License
