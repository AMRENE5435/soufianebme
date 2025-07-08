// Enhanced Portfolio Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileMenu();
    initThemeToggle();
    initLanguageSwitcher();
    initSmoothScrolling();
    initScrollAnimations();
    initScrollToTop();
    initContactForm();
    initModernAnimations();
    
    // Load saved preferences
    loadSavedTheme();
    loadSavedLanguage();
});

// Mobile Menu Functionality
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking on nav links
        const navLinks = navMenu.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// Theme Toggle Functionality
function initThemeToggle() {
    const themeToggleDesktop = document.getElementById('theme-toggle-desktop');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    
    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        
        // Update theme icons
        const themeIcons = document.querySelectorAll('.theme-icon');
        themeIcons.forEach(icon => {
            icon.textContent = isDark ? '☀️' : '🌙';
        });
        
        // Save preference
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Add smooth transition effect
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }
    
    if (themeToggleDesktop) {
        themeToggleDesktop.addEventListener('click', toggleTheme);
    }
    
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', toggleTheme);
    }
}

// Language Switcher Functionality
function initLanguageSwitcher() {
    const languageSelectDesktop = document.getElementById('language-select-desktop');
    const languageSelectMobile = document.getElementById('language-select-mobile');
    
    function changeLanguage(language) {
        if (typeof window.translations !== 'undefined' && window.translations[language]) {
            // Update all elements with data-translate attribute
            const elements = document.querySelectorAll('[data-translate]');
            elements.forEach(element => {
                const key = element.getAttribute('data-translate');
                if (window.translations[language][key]) {
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.placeholder = window.translations[language][key];
                    } else {
                        element.textContent = window.translations[language][key];
                    }
                }
            });
            
            // Update HTML lang attribute
            document.documentElement.lang = language;
            
            // Handle RTL languages
            if (language === 'ar') {
                document.documentElement.dir = 'rtl';
                document.body.classList.add('rtl');
            } else {
                document.documentElement.dir = 'ltr';
                document.body.classList.remove('rtl');
            }
            
            // Sync both selectors
            if (languageSelectDesktop && languageSelectDesktop.value !== language) {
                languageSelectDesktop.value = language;
            }
            if (languageSelectMobile && languageSelectMobile.value !== language) {
                languageSelectMobile.value = language;
            }
            
            // Save preference
            localStorage.setItem('language', language);
            
            // Add language change animation
            document.body.style.opacity = '0.8';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 150);
        }
    }
    
    if (languageSelectDesktop) {
        languageSelectDesktop.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }
    
    if (languageSelectMobile) {
        languageSelectMobile.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }
    
    // Expose changeLanguage function globally
    window.changeLanguage = changeLanguage;
}

// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Add staggered animation for grid items
                if (entry.target.classList.contains('services-grid') || 
                    entry.target.classList.contains('projects-grid') || 
                    entry.target.classList.contains('features-grid')) {
                    const items = entry.target.children;
                    Array.from(items).forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('active');
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe all elements with reveal class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(element => {
        observer.observe(element);
    });
    
    // Observe grid containers for staggered animations
    const gridContainers = document.querySelectorAll('.services-grid, .projects-grid, .features-grid');
    gridContainers.forEach(container => {
        observer.observe(container);
    });
}

// Scroll to Top Button
function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    if (scrollToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.style.display = 'block';
                scrollToTopBtn.style.opacity = '1';
            } else {
                scrollToTopBtn.style.opacity = '0';
                setTimeout(() => {
                    if (window.pageYOffset <= 300) {
                        scrollToTopBtn.style.display = 'none';
                    }
                }, 300);
            }
        });
        
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}
// Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Get submit button and show loading state
            const submitButton = this.querySelector('.submit-button');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            submitButton.style.opacity = '0.7';
            
            try {
                // Submit to Cloudflare Worker
                const workerUrl = window.PORTFOLIO_CONFIG?.WORKER_URL || 'https://portfolio-contact-form.your-subdomain.workers.dev';
                const timeout = window.PORTFOLIO_CONFIG?.FORM_TIMEOUT || 10000;
                
                // Create a timeout promise
                const timeoutPromise = new Promise((_, reject) => {
                    setTimeout(() => reject(new Error('Request timeout')), timeout);
                });
                
                // Race between fetch and timeout
                const response = await Promise.race([
                    fetch(workerUrl, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            // Don't set Content-Type for FormData, let browser set it
                        }
                    }),
                    timeoutPromise
                ]);
                
                const result = await response.json();
                
                if (result.success) {
                    showNotification(result.message || 'Message sent successfully! I will get back to you soon.', 'success');
                    contactForm.reset();
                } else {
                    showNotification(result.error || 'Failed to send message. Please try again.', 'error');
                }
                
            } catch (error) {
                console.error('Form submission error:', error);
                
                const contactEmail = window.PORTFOLIO_CONFIG?.CONTACT_EMAIL || 'helllo@soufianebelgana.me';
                
                // Fallback: Show email link if Worker is not available
                showNotification(`Unable to send message automatically. Please email me directly at ${contactEmail}`, 'error');
                
                // Optional: Open email client as fallback
                const emailSubject = encodeURIComponent(subject);
                const emailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
                const emailLink = `mailto:${contactEmail}?subject=${emailSubject}&body=${emailBody}`;
                
                // Show option to open email client
                setTimeout(() => {
                    if (confirm('Would you like to open your email client to send the message?')) {
                        window.location.href = emailLink;
                    }
                }, 2000);
            } finally {
                // Reset button state
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.style.opacity = '1';
            }
        });
    }
}

// Modern Animations for Career and Skills
function initModernAnimations() {
    // Typing animation for hero text
    const line1 = document.querySelector('.hero-name .line-1');
    const line2 = document.querySelector('.hero-name .line-2');
  
    const heroName = document.querySelector('.hero-name');
    // if (heroName) {
    //     const text = heroName.textContent;
    //     heroName.textContent = '';
    //     heroName.style.borderRight = '2px solid var(--color-primary)';
        
    //     let i = 0;
    //     const typeWriter = () => {
    //         if (i < text.length) {
    //             heroName.textContent += text.charAt(i);
    //             i++;
    //             setTimeout(typeWriter, 100);
    //         } else {
    //             setTimeout(() => {
    //                 heroName.style.borderRight = 'none';
    //             }, 1000);
    //         }
    //     };
        
    //     setTimeout(typeWriter, 1000);
    if (line1 && line2) {
        // Store original texts
        const text1 = line1.textContent;
        const text2 = line2.textContent;
        
        // Clear lines and add cursors
        line1.textContent = '';
        line2.textContent = '';
        line1.style.borderRight = '2px solid var(--color-primary)';
        
        // Type first line
        let i = 0;
        const typeLine1 = () => {
          if (i < text1.length) {
            line1.textContent += text1.charAt(i);
            i++;
            setTimeout(typeLine1, 100);
          } else {
            line1.style.borderRight = 'none';
            // Start typing second line after delay
            setTimeout(() => {
              line2.style.borderRight = '2px solid var(--color-primary)';
              typeLine2();
            }, 50);
          }
        };
        
        // Type second line
        let j = 0;
        const typeLine2 = () => {
          if (j < text2.length) {
            line2.textContent += text2.charAt(j);
            j++;
            setTimeout(typeLine2, 100);
          } else {
            setTimeout(() => line2.style.borderRight = 'none', 1000);
          }
        };
        
        // Start animation
        setTimeout(typeLine1, 600);
    }
    
    // Floating animation for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Progress bar animation for skills
    const skillsSection = document.querySelector('.about');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                }
            });
        });
        observer.observe(skillsSection);
    }
    
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Magnetic effect for CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0)';
        });
    });
}

// Utility Functions
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        const themeIcons = document.querySelectorAll('.theme-icon');
        themeIcons.forEach(icon => {
            icon.textContent = '☀️';
        });
    }
}

function loadSavedLanguage() {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && window.changeLanguage) {
        window.changeLanguage(savedLanguage);
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

function animateSkillBars() {
    // This would animate skill progress bars if they existed
    // For now, we'll add a subtle animation to the highlights
    const highlights = document.querySelectorAll('.highlights-list li');
    highlights.forEach((highlight, index) => {
        setTimeout(() => {
            highlight.style.opacity = '0';
            highlight.style.transform = 'translateX(-20px)';
            highlight.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                highlight.style.opacity = '1';
                highlight.style.transform = 'translateX(0)';
            }, 100);
        }, index * 200);
    });
}

// Add scroll-to-top button styles
const scrollToTopStyles = `
    .scroll-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: var(--color-primary);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
        z-index: 1000;
        opacity: 0;
    }
    
    .scroll-to-top:hover {
        background-color: var(--color-primary-dark);
        transform: translateY(-3px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    }
    
    @media (max-width: 768px) {
        .scroll-to-top {
            bottom: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
            font-size: 18px;
        }
    }
`;

// Add styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = scrollToTopStyles;
document.head.appendChild(styleSheet);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    // Handle scroll events here if needed
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);

// Preload critical resources
function preloadResources() {
    const criticalImages = [
        'assets/images/photo.jpg',
        'assets/images/afous.jpg',
        'assets/images/LAPTOPSOLUTION.jpg',
        'assets/images/stores.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function(e) {
      // Allow default behavior (navigation)
      // Only prevent if it's not the main link being clicked
      if (!e.target.closest('.project-link')) {
        e.preventDefault();
      }
    });
  });
  
// Initialize preloading
window.addEventListener('load', preloadResources);