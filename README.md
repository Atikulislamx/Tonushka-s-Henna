# Tonushka's Henna - Exquisite Mehendi Artistry

A professional, responsive website showcasing Tonushka's Henna services, featuring bridal, semi-bridal, and non-bridal mehendi designs.

## 🌿 Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Professional UI**: Clean, modern design with organic henna-inspired color palette
- **Service Showcase**: Detailed presentation of bridal, semi-bridal, and non-bridal mehendi services
- **Design Gallery**: Visual gallery with elegant SVG placeholders representing henna designs
- **Booking System**: Contact form with validation for appointment requests
- **Smooth Animations**: Intersection Observer API for scroll-triggered animations
- **Accessibility**: ARIA labels, semantic HTML, and reduced motion support

## 📁 Project Structure

```
Tonushka-s-Henna/
├── index.html          # Main HTML file
├── styles.css          # CSS stylesheet
├── script.js           # JavaScript functionality
├── .gitignore          # Git ignore file
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Atikulislamx/Tonushka-s-Henna.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Tonushka-s-Henna
   ```

3. Open `index.html` in your web browser:
   - Double-click the file, or
   - Right-click and select "Open with" your preferred browser, or
   - Use a local development server (optional)

### Using a Local Server (Optional)

For the best experience, you can use a local development server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js http-server
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 🎨 Design Features

### Color Palette
- **Primary Henna Color**: #8B4513 (Saddle Brown)
- **Accent Color**: #CD853F (Peru)
- **Background**: #FFFEF9 (Warm White)
- **Text**: #2C2C2C (Dark Gray)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Raleway (sans-serif)

### Sections

1. **Hero Section**: Welcoming message with call-to-action buttons
2. **Services**: Three service tiers with detailed features
3. **Gallery**: Six design showcases with hover effects
4. **About**: Brand story and key features
5. **Contact**: Booking form with validation
6. **Footer**: Links and social media

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --henna-color: #8B4513;
    --henna-dark: #5D2E0F;
    --accent-color: #CD853F;
    /* ... */
}
```

### Updating Content

1. Edit text content directly in `index.html`
2. Modify service details in the Services section
3. Update contact information in the Contact and Footer sections

### Adding Real Images

Replace the SVG placeholders in the gallery section with actual images:

```html
<!-- Replace this: -->
<div class="gallery__placeholder">
    <svg>...</svg>
</div>

<!-- With this: -->
<img src="path/to/image.jpg" alt="Description">
```

## 📋 Form Handling

The contact form includes client-side validation. To enable server-side processing:

1. Set up a backend endpoint (PHP, Node.js, etc.)
2. Update the form submission in `script.js`:

```javascript
// Replace the setTimeout simulation with:
fetch('/api/booking', {
    method: 'POST',
    body: formData
})
.then(response => response.json())
.then(data => {
    showMessage('Booking received!', 'success');
})
.catch(error => {
    showMessage('Error submitting form', 'error');
});
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

For inquiries about Tonushka's Henna services, please use the contact form on the website.

## 🙏 Acknowledgments

- Design inspired by traditional henna artistry
- SVG patterns created for aesthetic representation
- Fonts from Google Fonts
- Icons using Unicode and inline SVG

---

**Note**: This is a starter template with placeholder content. Actual images, contact details, and business information should be updated before deployment.