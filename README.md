# Bee Group - Sustainable Investment & Finance Management Landing Page

![Bee Group](https://img.shields.io/badge/Bee%20Group-Landing%20Page-green)
![HTML](https://img.shields.io/badge/HTML5-E34C26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 📋 Overview

**Bee Group** adalah landing page modern untuk perusahaan manajemen investasi dan keuangan berkelanjutan. Website ini dirancang dengan fokus pada user experience, responsivitas, dan konversi.

## ✨ Fitur Utama

### 🌍 Bilingual Support
- Dukungan penuh untuk **Bahasa Indonesia** dan **English**
- Toggle language di navbar dengan 1 klik
- Penyimpanan preferensi bahasa menggunakan localStorage

### 📱 Responsive Design
- **Mobile-first** approach
- Fully responsive di semua ukuran layar
- Hamburger menu untuk mobile
- Optimized untuk desktop, tablet, dan smartphone

### 🎨 Modern UI/UX
- Gradient colors dengan tema **Green**, **Blue**, dan **Purple**
- Smooth animations dan transitions
- Interactive hover effects
- Professional typography dan spacing

### 📊 Sections Included
1. **Navigation Bar** - Sticky header dengan language toggle
2. **Hero Section** - Eye-catching banner dengan CTA buttons
3. **About Section** - Company info dengan statistics cards
4. **Services Section** - 6 services grid layout
5. **Features Section** - Key features dengan icons
6. **Testimonials Section** - Customer reviews & ratings
7. **Pricing Section** - 3 pricing tiers dengan popular badge
8. **Contact Section** - Form + contact information
9. **Footer** - Links, social media, copyright

### 🔧 Functionality
- ✅ Smooth scrolling navigation
- ✅ Form validation & submission
- ✅ Language switching (ID/EN)
- ✅ Mobile menu toggle
- ✅ Scroll animations & intersection observer
- ✅ Active nav link highlighting
- ✅ Counter animations on scroll
- ✅ Alert notifications
- ✅ Pricing button pre-fill contact form

## 📁 Project Structure

```
bee-growing-goodness/
├── index.html          # Main HTML file
├── styles.css          # Styling & responsive design
├── script.js           # JavaScript functionality
└── README.md           # Documentation
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required!

### Installation

1. Clone the repository:
```bash
git clone https://github.com/beegroup97-bit/bee-growing-goodness.git
cd bee-growing-goodness
```

2. Open with live server (recommended):
```bash
# Using Python
python -m http.server 8000

# Or using VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

3. Or simply open `index.html` in your browser:
```bash
open index.html
```

## 💻 Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Yes  |
| Firefox | ✅ Yes  |
| Safari  | ✅ Yes  |
| Edge    | ✅ Yes  |
| IE 11   | ⚠️ Partial |

## 🎯 Key Features Breakdown

### Language Toggle
```javascript
- Click "EN" button to switch to English
- Click "ID" button to switch to Indonesian
- Language preference saved in localStorage
```

### Responsive Breakpoints
```css
Desktop:  > 1200px
Tablet:   768px - 1200px
Mobile:   < 768px
Small:    < 480px
```

### Color Theme
```css
Primary:    #2E7D32 (Green)
Secondary:  #1565C0 (Blue)
Accent:     #9C27B0 (Purple)
```

## 📝 Customization

### Change Company Details
Edit the following in `index.html`:
- Phone number: `+62 812-3456-7890`
- Email: `info@beegroup.com`
- Address: `123 Finance Street, Jakarta, Indonesia`

### Add Your Own Content
Replace placeholder text in each section:
- Hero headline & description
- Service descriptions
- Testimonials & client names
- Pricing details

### Modify Colors
Update CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2E7D32;
    --secondary-color: #1565C0;
    --accent-color: #9C27B0;
}
```

## 📞 Contact Form

The contact form includes:
- ✅ Full name validation
- ✅ Email validation
- ✅ Phone number field
- ✅ Message textarea
- ✅ Success/error notifications
- ⚠️ Note: Currently shows alerts only. To send emails, integrate a backend service (e.g., Formspree, EmailJS, or your own API)

### Integrate with Email Service

**Option 1: Using Formspree (Free)**
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
    <!-- form fields -->
</form>
```

**Option 2: Using EmailJS**
```javascript
// Add EmailJS script and initialize
emailjs.init('YOUR_PUBLIC_KEY');
contactForm.addEventListener('submit', (e) => {
    emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', contactForm);
});
```

## 🎬 Animations

### Included Animations
- **Float**: Continuous floating effect on hero image
- **FadeInUp**: Fade in from bottom on scroll
- **SlideIn/SlideOut**: Alert notifications
- **Hover effects**: Cards, buttons, links
- **Counter animation**: Statistics increment

## 🔐 Security Considerations

- ✅ No sensitive data stored
- ✅ Client-side validation only (add server-side validation for production)
- ✅ HTTPS recommended for form submissions
- ✅ No external API calls (except Font Awesome icons)

## 🚀 Deployment

### Recommended Platforms
- **Netlify**: Drag & drop deployment
- **Vercel**: Automatic CI/CD
- **GitHub Pages**: Free static hosting
- **Any static hosting**: Works with HTML/CSS/JS

### Deploy to Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Deploy to GitHub Pages
1. Enable GitHub Pages in repository settings
2. Select main branch as source
3. Your site will be live at `https://beegroup97-bit.github.io/bee-growing-goodness`

## 📈 Performance

### Optimization Features
- ✅ No heavy dependencies
- ✅ Minimal CSS & JavaScript
- ✅ Optimized images & icons (Font Awesome CDN)
- ✅ Lazy loading ready for images
- ✅ Mobile-optimized

### Lighthouse Scores (Target)
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 95+

## 🔍 SEO Optimization

### Included
- ✅ Meta tags & descriptions
- ✅ Proper heading hierarchy
- ✅ Semantic HTML
- ✅ Mobile-friendly
- ✅ Fast loading time

### To Improve
- Add Open Graph meta tags
- Create XML sitemap
- Implement schema markup
- Optimize images further
- Submit to Google Search Console

## 📚 Resources

- [Font Awesome Icons](https://fontawesome.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Google Fonts](https://fonts.google.com/)

## 🤝 Contributing

Want to improve this landing page? 

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -m 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💼 About Bee Group

Bee Group adalah perusahaan manajemen investasi dan keuangan berkelanjutan yang berdedikasi untuk:
- 🌱 Membangun kekayaan berkelanjutan
- 🌍 Melindungi lingkungan
- 💼 Memberikan layanan berkualitas tinggi
- 📈 Menghasilkan return yang konsisten

## 📞 Support

Untuk pertanyaan atau bantuan:
- Email: info@beegroup.com
- Phone: +62 812-3456-7890
- Address: 123 Finance Street, Jakarta, Indonesia

---

**Made with ❤️ for Bee Group**

Last updated: 2024 | Version 1.0.0
