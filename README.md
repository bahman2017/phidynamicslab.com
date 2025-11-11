# Phi Dynamics Lab Website

A modern, highly professional, dark-themed static website for Phi Dynamics Lab, optimized for fast loading on GitHub Pages.

## Features

- **Modern Dark Theme**: Professional dark color scheme with Deep Navy, Royal Purple, Teal/Cyan, and Gold accents
- **Fully Responsive**: Mobile-friendly design that works on all devices
- **Interactive Visualizations**: Dynamic canvas animations for hero section and quantum visualization
- **Smooth Animations**: Scroll-based animations and transitions
- **Fast Loading**: Optimized for GitHub Pages with CDN-based assets
- **Tailwind CSS**: Modern utility-first CSS framework via CDN
- **Contact Form**: Functional contact form with email integration

## Website Sections

1. **Header/Navigation**: Fixed navigation with logo, menu items, and prominent CTA button
2. **Hero Section**: Eye-catching hero with animated background visualization
3. **Core Disciplines**: Three main research areas (Bio-Dynamics, Quantum Dynamics, Predictive Systems)
4. **Technology/Methodology**: Explanation of the Dynamic Systems Approach
5. **Featured Project**: QCNR (Quantum Computing Noise Reduction) showcase
6. **Partnership & Team**: Authority-building section for collaborations
7. **Contact/Inquiry**: Contact form and email addresses

## Structure

```
.
├── index.html              # Main HTML file with all sections
├── assets/
│   ├── css/
│   │   └── style.css      # Custom CSS with dark theme styling
│   ├── js/
│   │   └── main.js        # JavaScript for interactivity and canvas animations
│   └── images/            # Image assets (add your images here)
├── .gitignore
└── README.md
```

## Technology Stack

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Vanilla JavaScript**: No dependencies, optimized for performance
- **Canvas API**: For dynamic visualizations
- **Font Awesome**: Icons (via CDN)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/bahman2017/phidynamicslab.com.git
   cd phidynamicslab.com
   ```

2. Open `index.html` in your browser to view the site locally.

3. Customize the content in `index.html` to match your needs.

4. Modify `assets/css/style.css` to change the styling.

## GitHub Pages Deployment

This repository is configured to work with GitHub Pages:

1. Push your code to the `main` branch
2. Go to your repository settings on GitHub
3. Navigate to "Pages" in the left sidebar
4. Select the branch: `main`
5. Select the folder: `/ (root)`
6. Click "Save"
7. Your site will be available at `https://bahman2017.github.io/phidynamicslab.com/`

If you're using a custom domain (phidynamicslab.com), you can configure it in the Pages settings.

## Customization

### Colors
Edit the CSS variables in `assets/css/style.css`:
- `--dark-navy`: Main background color
- `--purple`: Primary accent color
- `--teal`: Secondary accent color
- `--gold`: CTA and emphasis color

### Content
- **Sections**: Modify HTML in `index.html`
- **Text**: Update all text content directly in HTML
- **Contact Emails**: Update email addresses in the contact section

### Functionality
- **Animations**: Modify JavaScript in `assets/js/main.js`
- **Canvas Visualizations**: Customize hero and quantum canvas animations
- **Form Handling**: Update contact form behavior

## Performance Optimization

- Tailwind CSS loaded via CDN (no build step required)
- Font Awesome loaded via CDN
- Optimized canvas animations with requestAnimationFrame
- Lazy loading for animations
- Minimal JavaScript dependencies
- Compressed and optimized assets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contact Information

- **Scientific Inquiries**: research@phidynamicslab.com
- **Business Development**: partner@phidynamicslab.com

## License

All rights reserved. © 2025 Phi Dynamics Lab
