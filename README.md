# Follow Along Workouts - Landing Page

A responsive landing page for the Follow Along Workouts mobile app, built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Optimized for all device sizes (mobile, tablet, desktop)
- **BEM CSS Methodology**: Clean, maintainable CSS with Block-Element-Modifier naming
- **Interactive Elements**: Smooth scrolling, animations, and mobile navigation
- **Performance Optimized**: Fast loading with optimized images and code
- **Accessibility**: WCAG compliant with proper focus management and keyboard navigation

## Sections

### 1. Hero Section

- Compelling headline with app branding
- Call-to-action buttons for app downloads
- Key statistics and social proof
- Hero mockup image

### 2. Features Section

- Six key app features with icons
- Grid layout that adapts to screen size
- Hover effects and animations

### 3. Benefits Section

- Detailed benefits from subscription analysis
- Side-by-side layout with benefits list
- Progress tracking visualization

### 4. Pricing Section

- Three subscription tiers (Monthly, Annual, 3-Month)
- Featured plan highlighting
- Clear pricing and feature comparison
- Free trial emphasis

### 5. Download Section

- App store download buttons
- Free trial messaging
- Trust indicators

## App Features (Extracted from Ionic App)

Based on the subscription page analysis, the app includes:

- **Save workouts for quick access**
- **Track your workout history**
- **Sync data across all devices**
- **Ad-free experience**
- **Advanced filters** (Premium feature)
- **Premium workout videos**
- **Progress tracking**

## Subscription Plans

- **Monthly Plan**: $9.99/month
- **3-Month Plan**: $24.99/3 months
- **Annual Plan**: $59.99/year (Best Value - Save 50%)
- **2-week free trial** for all plans

## Technical Details

### CSS Architecture

- BEM methodology for maintainable CSS
- Mobile-first responsive design
- CSS Grid and Flexbox for layouts
- CSS custom properties for theming
- Smooth animations and transitions

### JavaScript Features

- Mobile navigation toggle
- Smooth scrolling for anchor links
- Intersection Observer for animations
- Performance optimizations
- Analytics tracking setup
- Error handling

### Performance

- Optimized images (SVG icons)
- Minimal JavaScript footprint
- Efficient CSS with minimal specificity
- Preloading for critical resources

## File Structure

```
landing-page/
├── index.html          # Main HTML file
├── styles.css          # CSS with BEM methodology
├── script.js          # JavaScript functionality
├── README.md          # Documentation
└── assets/
    ├── icons/         # SVG icons
    │   ├── workout-videos.svg
    │   ├── progress-tracking.svg
    │   ├── save-workouts.svg
    │   ├── sync-devices.svg
    │   ├── ad-free.svg
    │   ├── advanced-filters.svg
    │   └── checkmark.svg
    ├── hero-mockup.png        # Hero section image
    ├── benefits-mockup.png    # Benefits section image
    ├── google-play-badge.png  # Google Play Store badge
    ├── app-store-badge.png    # App Store badge
    └── logo.png              # App logo
```

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Setup Instructions

1. Open `index.html` in a web browser
2. For development, use a local server (e.g., `python -m http.server` or `npx serve`)
3. Customize colors, content, and images as needed
4. Update app store links when available

## Customization

### Colors

The main brand color is `#39b5d5` (cyan blue). Update CSS custom properties to change the theme:

```css
:root {
	--primary-color: #39b5d5;
	--secondary-color: #3dc2ff;
}
```

### Content

- Update app store links in the download section
- Modify pricing information as needed
- Add real app screenshots
- Update contact information in footer

### Images

Replace placeholder images with actual app screenshots and marketing materials.

## Analytics Integration

The JavaScript includes tracking setup for:

- Button clicks
- Scroll depth
- Form interactions
- Error monitoring

Update the `trackEvent` function with your analytics provider.

## SEO Optimization

- Semantic HTML structure
- Meta tags for description and keywords
- Proper heading hierarchy
- Alt text for images
- Fast loading performance

## Future Enhancements

- Add contact form
- Implement newsletter signup
- Add testimonials section
- Include video demos
- Add more detailed feature descriptions
- Implement A/B testing setup
