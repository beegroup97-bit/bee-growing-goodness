// ==================== 
// LANGUAGE TOGGLE
// ====================
let currentLanguage = 'id'; // Default: Indonesian

function toggleLanguage() {
    currentLanguage = currentLanguage === 'id' ? 'en' : 'id';
    updateLanguage();
    
    // Update button text
    const langBtn = document.querySelector('.lang-toggle');
    langBtn.textContent = currentLanguage === 'id' ? 'EN' : 'ID';
    
    // Save preference to localStorage
    localStorage.setItem('language', currentLanguage);
}

function updateLanguage() {
    // Update all text elements with data attributes
    document.querySelectorAll('[data-id][data-en]').forEach(element => {
        const text = currentLanguage === 'id' ? element.getAttribute('data-id') : element.getAttribute('data-en');
        
        // For input placeholders
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = text;
        } else if (element.getAttribute('data-placeholder-id')) {
            element.placeholder = text;
        } else {
            element.textContent = text;
        }
    });

    // Update placeholders with data-placeholder-id
    document.querySelectorAll('[data-placeholder-id]').forEach(element => {
        const placeholderId = element.getAttribute('data-placeholder-id');
        const selector = `[data-placeholder-id="${placeholderId}"]`;
        const text = currentLanguage === 'id' 
            ? getPlaceholderById(placeholderId, 'id')
            : getPlaceholderById(placeholderId, 'en');
        element.placeholder = text;
    });
}

function getPlaceholderById(id, lang) {
    const placeholders = {
        fullname: { id: 'Nama Lengkap', en: 'Full Name' },
        email: { id: 'Email', en: 'Email' },
        phone: { id: 'Nomor Telepon', en: 'Phone Number' },
        message: { id: 'Pesan Anda', en: 'Your Message' }
    };
    
    return placeholders[id] ? placeholders[id][lang] : '';
}

// Load saved language preference on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        const langBtn = document.querySelector('.lang-toggle');
        langBtn.textContent = currentLanguage === 'id' ? 'EN' : 'ID';
    }
    updateLanguage();
});

// ==================== 
// MOBILE MENU TOGGLE
// ====================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ==================== 
// SMOOTH SCROLL TO SECTION
// ====================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==================== 
// FORM SUBMISSION
// ====================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(contactForm);
    const data = {
        fullname: contactForm.querySelector('input[type="text"]').value,
        email: contactForm.querySelector('input[type="email"]').value,
        phone: contactForm.querySelector('input[type="tel"]').value,
        message: contactForm.querySelector('textarea').value
    };
    
    // Validate form
    if (!data.fullname || !data.email || !data.phone || !data.message) {
        showAlert('error', currentLanguage === 'id' ? 'Semua field harus diisi!' : 'All fields are required!');
        return;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showAlert('error', currentLanguage === 'id' ? 'Email tidak valid!' : 'Invalid email!');
        return;
    }
    
    // Show success message
    showAlert('success', currentLanguage === 'id' ? 'Pesan berhasil dikirim! Kami akan segera menghubungi Anda.' : 'Message sent successfully! We will contact you soon.');
    
    // Reset form
    contactForm.reset();
    
    // In a real application, you would send this data to a server
    console.log('Form data:', data);
});

// ==================== 
// ALERT SYSTEM
// ====================
function showAlert(type, message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    alertDiv.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        font-weight: 600;
        z-index: 1000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(alertDiv);
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Remove alert after 3 seconds
    setTimeout(() => {
        alertDiv.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => alertDiv.remove(), 300);
    }, 3000);
}

// ==================== 
// SCROLL ANIMATIONS
// ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add fade-in animation to CSS
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(animationStyle);

// Observe all cards and sections
document.querySelectorAll('.service-card, .feature-item, .testimonial-card, .pricing-card, .stat-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ==================== 
// NAVBAR SCROLL EFFECT
// ====================
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
    } else {
        navbar.style.boxShadow = 'var(--shadow)';
    }
    
    lastScrollTop = scrollTop;
});

// ==================== 
// ACTIVE NAV LINK
// ====================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const sectionId = section.getAttribute('id');
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.style.color = '#FFD700';
                }
            });
        }
    });
});

// ==================== 
// PRICING BUTTON FUNCTIONALITY
// ====================
document.querySelectorAll('.pricing-card .btn').forEach(button => {
    button.addEventListener('click', () => {
        const plan = button.closest('.pricing-card').querySelector('h3').textContent;
        const message = currentLanguage === 'id' 
            ? `Saya tertarik dengan paket ${plan}` 
            : `I'm interested in the ${plan} plan`;
        
        const contactSection = document.getElementById('contact');
        const textarea = contactSection.querySelector('textarea');
        textarea.value = message;
        
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// ==================== 
// STAT COUNTER ANIMATION
// ====================
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 20);
}

// Start counter animation when section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.stat-card h3').forEach(el => {
                if (el.textContent.includes('+')) {
                    const numberStr = el.textContent.replace(/[^0-9]/g, '');
                    const number = parseInt(numberStr);
                    animateCounter(el, number);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutSection = document.querySelector('.about');
if (aboutSection) {
    statsObserver.observe(aboutSection);
}

// ==================== 
// PRINT FUNCTIONS
// ====================
console.log('%c Welcome to Bee Group! 🐝', 'font-size: 20px; color: #2E7D32; font-weight: bold;');
console.log('%c Building sustainable wealth for a better future.', 'font-size: 14px; color: #1565C0;');
