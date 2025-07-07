// Configuration for Portfolio Website
// Update this file after deploying your Cloudflare Worker

const CONFIG = {
    // Cloudflare Worker URL for contact form submissions
    // Replace 'your-subdomain' with your actual Worker subdomain after deployment
    // Example: 'https://portfolio-contact-form.your-username.workers.dev'
    WORKER_URL: 'https://portfolio-contact-form.jensenrasmusbech.workers.dev',
    
    // Fallback email for direct contact
    CONTACT_EMAIL: 'sbelgana@gmail.com',
    
    // Form submission settings
    FORM_TIMEOUT: 10000, // 10 seconds timeout
    
    // Notification settings
    NOTIFICATION_DURATION: 5000, // 5 seconds
    
    // Development mode (set to false for production)
    DEV_MODE: false
};

// Make config available globally
window.PORTFOLIO_CONFIG = CONFIG;

