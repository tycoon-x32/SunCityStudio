// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    initializeSlideshow();
    initializeNavbar();
});

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    mobileMenu.classList.toggle('active');
    
    if (mobileMenu.classList.contains('active')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}

// Navbar scroll effect
function initializeNavbar() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Slideshow functionality
let currentSlide = 0;
let slideInterval;

function initializeSlideshow() {
    showSlide(currentSlide);
    // Auto advance slides
    slideInterval = setInterval(function() {
        changeSlide(1);
    }, 5000);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    
    if (n >= slides.length) {
        currentSlide = 0;
    }
    if (n < 0) {
        currentSlide = slides.length - 1;
    }
    
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

function changeSlide(n) {
    currentSlide += n;
    showSlide(currentSlide);
    
    // Reset auto-advance timer
    clearInterval(slideInterval);
    slideInterval = setInterval(function() {
        changeSlide(1);
    }, 5000);
}

function goToSlide(n) {
    currentSlide = n;
    showSlide(currentSlide);
    
    // Reset auto-advance timer
    clearInterval(slideInterval);
    slideInterval = setInterval(function() {
        changeSlide(1);
    }, 5000);
}

// Gallery filter
let currentFilter = 'All';

function filterGallery(category) {
    currentFilter = category;
    
    // Update active button
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === category) {
            btn.classList.add('active');
        }
    });
    
    // Filter gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        
        if (category === 'All' || itemCategory === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Lightbox functionality
const galleryImages = [
    {
        src: 'https://images.unsplash.com/photo-1701721028113-e7be33b63f66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmlkZW9ncmFwaHklMjBjb3VwbGV8ZW58MXx8fHwxNzYyMTU5MTcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Wedding Ceremony',
        category: 'Weddings'
    },
    {
        src: 'https://images.unsplash.com/photo-1674124504779-62197c204390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHZpZGVvJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NjIxNTkxNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Music Video Production',
        category: 'Music Videos'
    },
    {
        src: 'https://images.unsplash.com/photo-1644666695083-a18a435dfd71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdW5lcmFsJTIwY2VyZW1vbnklMjBmbG93ZXJzfGVufDF8fHx8MTc2MjE1OTE3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Funeral Coverage',
        category: 'Funeral Coverage'
    },
    {
        src: 'https://images.unsplash.com/photo-1625850864233-90c8dc3a35ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkaW8lMjBwaG90b2dyYXBoeSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjE1OTE3NHww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Studio Portrait',
        category: 'Studio Photoshoots'
    },
    {
        src: 'https://images.unsplash.com/photo-1705544363562-cdf94dd458cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MjE1OTE3NHww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Corporate Event',
        category: 'Studio Photoshoots'
    },
    {
        src: 'https://images.unsplash.com/photo-1693031630177-b897fb9d7154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGluZyUyMHByZXNzJTIwYmFubmVyfGVufDF8fHx8MTc2MjE1OTE3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Custom Banners',
        category: 'Banners & Prints'
    },
    {
        src: 'https://images.unsplash.com/photo-1676835981079-7810565db333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWN0dXJlJTIwZnJhbWUlMjBnYWxsZXJ5JTIwd2FsbHxlbnwxfHx8fDE3NjIxNTkxNzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Framed Memories',
        category: 'Banners & Prints'
    },
    {
        src: 'https://images.unsplash.com/photo-1643264623879-bb85ea39c62a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBjYW1lcmF8ZW58MXx8fHwxNzYyMDY3MDA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Behind the Scenes',
        category: 'Music Videos'
    }
];

function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxCategory = document.getElementById('lightbox-category');
    
    const image = galleryImages[index];
    
    lightboxImg.src = image.src;
    lightboxTitle.textContent = image.title;
    lightboxCategory.textContent = image.category;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Re-initialize icons in lightbox
    lucide.createIcons();
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close lightbox on background click
document.getElementById('lightbox')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});

// Close lightbox on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Form submission - WhatsApp integration
function handleSubmit(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        eventType: document.getElementById('eventType').options[document.getElementById('eventType').selectedIndex].text,
        date: document.getElementById('date').value,
        service: document.getElementById('service').options[document.getElementById('service').selectedIndex].text,
        message: document.getElementById('message').value
    };
    
    // Create WhatsApp message
    const message = `*New Booking Inquiry*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Event Type:* ${formData.eventType}\n*Date:* ${formData.date}\n*Service:* ${formData.service}\n*Message:* ${formData.message}`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp number
    const whatsappNumber = '254715068672';
    
    // Open WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    
    // Optional: Reset form
    // document.getElementById('booking-form').reset();
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animations
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.service-card, .photo-card, .pricing-card, .gallery-item');
    animateElements.forEach(el => observer.observe(el));
});

// --- Service Worker registration and install prompt handling ---
// Register service worker (workers.js)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/workers.js')
            .then(function(reg) { console.log('Service Worker registered:', reg); })
            .catch(function(err) { console.error('Service Worker registration failed:', err); });
    });
}

// Handle beforeinstallprompt to show an install button (optional)
let deferredInstallPrompt;
const installBtn = document.getElementById('install-btn');
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent automatic prompt
    e.preventDefault();
    deferredInstallPrompt = e;
    // Show install UI if present
    if (installBtn) {
        installBtn.style.display = 'inline-block';
        installBtn.addEventListener('click', async () => {
            installBtn.style.display = 'none';
            deferredInstallPrompt.prompt();
            const choice = await deferredInstallPrompt.userChoice;
            console.log('User choice for app install:', choice);
            deferredInstallPrompt = null;
        });
    }
});
