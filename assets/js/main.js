// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link-mobile').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header Scroll Effect
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Hero Canvas Animation - Interconnected Nodes
function initHeroCanvas() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const nodes = [];
    const nodeCount = 50;
    const connectionDistance = 150;
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create nodes
    class Node {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 1;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            // Bounce off edges
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            
            // Keep within bounds
            this.x = Math.max(0, Math.min(canvas.width, this.x));
            this.y = Math.max(0, Math.min(canvas.height, this.y));
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(251, 191, 36, 0.6)';
            ctx.fill();
        }
    }
    
    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
        nodes.push(new Node());
    }
    
    // Draw connections
    function drawConnections() {
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < connectionDistance) {
                    const opacity = (1 - distance / connectionDistance) * 0.3;
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.strokeStyle = `rgba(124, 58, 237, ${opacity})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw nodes
        nodes.forEach(node => {
            node.update();
            node.draw();
        });
        
        // Draw connections
        drawConnections();
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Quantum Visualization Canvas
function initQuantumCanvas() {
    const canvas = document.getElementById('quantum-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrame;
    
    // Set canvas size
    function resizeCanvas() {
        const container = canvas.parentElement;
        if (container) {
            canvas.width = container.offsetWidth;
            canvas.height = 300;
        }
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Quantum state visualization
    const states = [];
    const stateCount = 8;
    
    class QuantumState {
        constructor(index) {
            this.index = index;
            this.angle = (index / stateCount) * Math.PI * 2;
            this.radius = 80;
            this.centerX = canvas.width / 2;
            this.centerY = canvas.height / 2;
            this.phase = Math.random() * Math.PI * 2;
            this.amplitude = 0.5 + Math.random() * 0.5;
        }
        
        update(time) {
            this.phase += 0.02;
            this.amplitude = 0.5 + Math.sin(time + this.index) * 0.3;
        }
        
        draw() {
            const x = this.centerX + Math.cos(this.angle) * this.radius;
            const y = this.centerY + Math.sin(this.angle) * this.radius;
            
            // Draw state point
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(20, 184, 166, ${0.5 + this.amplitude * 0.5})`;
            ctx.fill();
            
            // Draw connection to center
            ctx.beginPath();
            ctx.moveTo(this.centerX, this.centerY);
            ctx.lineTo(x, y);
            ctx.strokeStyle = `rgba(20, 184, 166, ${0.2 + this.amplitude * 0.3})`;
            ctx.lineWidth = 1;
            ctx.stroke();
            
            // Draw amplitude wave
            const waveLength = 20;
            const waveHeight = this.amplitude * 15;
            ctx.beginPath();
            for (let i = 0; i < waveLength; i++) {
                const waveX = x + (i - waveLength / 2) * 2;
                const waveY = y + Math.sin((i / waveLength) * Math.PI * 2 + this.phase) * waveHeight;
                if (i === 0) {
                    ctx.moveTo(waveX, waveY);
                } else {
                    ctx.lineTo(waveX, waveY);
                }
            }
            ctx.strokeStyle = `rgba(20, 184, 166, ${0.6})`;
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    }
    
    // Initialize states
    for (let i = 0; i < stateCount; i++) {
        states.push(new QuantumState(i));
    }
    
    // Animation loop
    let time = 0;
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw center point
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(251, 191, 36, 0.8)';
        ctx.fill();
        
        // Update and draw states
        time += 0.05;
        states.forEach(state => {
            state.update(time);
            state.draw();
        });
        
        // Draw connections between adjacent states
        for (let i = 0; i < states.length; i++) {
            const current = states[i];
            const next = states[(i + 1) % states.length];
            
            const x1 = current.centerX + Math.cos(current.angle) * current.radius;
            const y1 = current.centerY + Math.sin(current.angle) * current.radius;
            const x2 = next.centerX + Math.cos(next.angle) * next.radius;
            const y2 = next.centerY + Math.sin(next.angle) * next.radius;
            
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = 'rgba(124, 58, 237, 0.2)';
            ctx.lineWidth = 1;
            ctx.stroke();
        }
        
        animationFrame = requestAnimationFrame(animate);
    }
    
    animate();
    
    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }
    });
}

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Create mailto link (for static site)
        const mailtoLink = `mailto:research@phidynamicslab.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i>Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)';
        
        // Reset form
        contactForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
        }, 3000);
    });
}

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections for animation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Initialize canvas animations
    initHeroCanvas();
    initQuantumCanvas();
});

// Performance Optimization: Lazy load animations
let animationStarted = false;
function startAnimations() {
    if (animationStarted) return;
    animationStarted = true;
    initHeroCanvas();
    initQuantumCanvas();
}

// Start animations when page is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startAnimations);
} else {
    startAnimations();
}

// Add scroll-based parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.getElementById('home');
    if (heroSection) {
        const heroContent = heroSection.querySelector('.container');
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / 500);
        }
    }
});
