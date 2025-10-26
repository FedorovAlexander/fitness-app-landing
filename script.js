// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function () {
	// Initialize all functionality
	initNavigation();
	initSmoothScrolling();
	initAnimations();
	initPricingCards();
	initDownloadButtons();
	initCurrentYear();
});

// Navigation functionality
function initNavigation() {
	const navToggle = document.getElementById('nav-toggle');
	const navMenu = document.getElementById('nav-menu');
	const navLinks = document.querySelectorAll('.nav__link');

	// Toggle mobile menu
	if (navToggle && navMenu) {
		navToggle.addEventListener('click', function () {
			navMenu.classList.toggle('active');
			navToggle.classList.toggle('active');
		});

		// Close menu when clicking on links
		navLinks.forEach((link) => {
			link.addEventListener('click', function () {
				navMenu.classList.remove('active');
				navToggle.classList.remove('active');
			});
		});

		// Close menu when clicking outside
		document.addEventListener('click', function (event) {
			if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
				navMenu.classList.remove('active');
				navToggle.classList.remove('active');
			}
		});
	}

	// Add scroll effect to navigation
	let lastScrollTop = 0;
	const nav = document.querySelector('.nav');

	window.addEventListener('scroll', function () {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		if (scrollTop > lastScrollTop && scrollTop > 100) {
			// Scrolling down
			nav.style.transform = 'translateY(-100%)';
		} else {
			// Scrolling up
			nav.style.transform = 'translateY(0)';
		}

		lastScrollTop = scrollTop;
	});
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
	const links = document.querySelectorAll('a[href^="#"]');

	links.forEach((link) => {
		link.addEventListener('click', function (e) {
			e.preventDefault();

			const targetId = this.getAttribute('href');
			const targetElement = document.querySelector(targetId);

			if (targetElement) {
				const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav

				window.scrollTo({
					top: offsetTop,
					behavior: 'smooth',
				});
			}
		});
	});
}

// Animation on scroll
function initAnimations() {
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px',
	};

	const observer = new IntersectionObserver(function (entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.style.opacity = '1';
				entry.target.style.transform = 'translateY(0)';
			}
		});
	}, observerOptions);

	// Observe elements for animation
	const animatedElements = document.querySelectorAll('.feature-card, .benefit-item, .pricing-card, .hero__content, .hero__image');

	animatedElements.forEach((element) => {
		element.style.opacity = '0';
		element.style.transform = 'translateY(30px)';
		element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
		observer.observe(element);
	});
}

// Download buttons functionality
function initDownloadButtons() {
	const downloadButtons = document.querySelectorAll('.download__button, .pricing-card__button');

	downloadButtons.forEach((button) => {
		button.addEventListener('click', function (e) {
			// Add loading state
			const originalText = this.textContent;
			this.textContent = 'Loading...';
			this.style.opacity = '0.7';

			// Simulate loading (replace with actual download logic)
			setTimeout(() => {
				this.textContent = originalText;
				this.style.opacity = '1';

				// Show success message
				showNotification('Download link will be available soon!', 'success');
			}, 1500);
		});
	});
}

// Notification system
function showNotification(message, type = 'info') {
	// Remove existing notifications
	const existingNotifications = document.querySelectorAll('.notification');
	existingNotifications.forEach((notification) => notification.remove());

	// Create notification element
	const notification = document.createElement('div');
	notification.className = `notification notification--${type}`;
	notification.textContent = message;

	// Add styles
	notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#2dd36f' : '#39b5d5'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-weight: 500;
    `;

	document.body.appendChild(notification);

	// Animate in
	setTimeout(() => {
		notification.style.transform = 'translateX(0)';
	}, 100);

	// Auto remove after 3 seconds
	setTimeout(() => {
		notification.style.transform = 'translateX(100%)';
		setTimeout(() => {
			notification.remove();
		}, 300);
	}, 3000);
}

// Stats counter animation
function animateCounters() {
	const counters = document.querySelectorAll('.hero__stat-number');

	counters.forEach((counter) => {
		const originalText = counter.textContent;

		// Handle different counter types
		if (originalText.includes('4,500+')) {
			// Video count with comma
			const target = 4500;
			let current = 0;
			const increment = target / 50;

			const updateCounter = () => {
				if (current < target) {
					current += increment;
					counter.textContent = Math.floor(current).toLocaleString() + '+';
					requestAnimationFrame(updateCounter);
				} else {
					counter.textContent = '4,500+';
				}
			};
			updateCounter();
		} else if (originalText.includes('4.8★')) {
			// Rating with decimal
			const target = 4.8;
			let current = 0;
			const increment = target / 50;

			const updateCounter = () => {
				if (current < target) {
					current += increment;
					counter.textContent = current.toFixed(1) + '★';
					requestAnimationFrame(updateCounter);
				} else {
					counter.textContent = '4.8★';
				}
			};
			updateCounter();
		} else if (originalText === 'Free') {
			// Static text - no animation needed
			counter.textContent = 'Free';
		}
	});
}

// Initialize counter animation when hero section is visible
const heroObserver = new IntersectionObserver(
	function (entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				animateCounters();
				heroObserver.unobserve(entry.target);
			}
		});
	},
	{ threshold: 0.5 }
);

const heroSection = document.querySelector('.hero');
if (heroSection) {
	heroObserver.observe(heroSection);
}

// Form validation (if forms are added later)
function validateEmail(email) {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(email);
}

// Utility functions
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

// Performance optimization: Throttle scroll events
const throttledScroll = debounce(function () {
	// Scroll-based animations or effects can be added here
}, 16); // ~60fps

window.addEventListener('scroll', throttledScroll);

// Accessibility improvements
document.addEventListener('keydown', function (e) {
	// Close mobile menu with Escape key
	if (e.key === 'Escape') {
		const navMenu = document.getElementById('nav-menu');
		const navToggle = document.getElementById('nav-toggle');

		if (navMenu && navMenu.classList.contains('active')) {
			navMenu.classList.remove('active');
			navToggle.classList.remove('active');
		}
	}
});

// Preload critical images
function preloadImages() {
	const criticalImages = ['assets/hero-mockup.png', 'assets/benefits-mockup.png', 'assets/google-play-badge.png', 'assets/app-store-badge.png'];

	criticalImages.forEach((src) => {
		const img = new Image();
		img.src = src;
	});
}

// Initialize image preloading
preloadImages();

// Set current year in footer
function initCurrentYear() {
	const currentYearElement = document.getElementById('current-year');
	if (currentYearElement) {
		const currentYear = new Date().getFullYear();
		console.log('Setting year to:', currentYear);
		currentYearElement.textContent = currentYear;
	} else {
		console.log('Current year element not found');
	}
}

// Also set year immediately when script loads (fallback)
document.addEventListener('DOMContentLoaded', function () {
	const currentYearElement = document.getElementById('current-year');
	if (currentYearElement) {
		currentYearElement.textContent = new Date().getFullYear();
	}
});

// Service Worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
	window.addEventListener('load', function () {
		navigator.serviceWorker
			.register('/sw.js')
			.then(function (registration) {
				console.log('ServiceWorker registration successful');
			})
			.catch(function (err) {
				console.log('ServiceWorker registration failed');
			});
	});
}

// Analytics tracking (placeholder for Google Analytics or other tracking)
function trackEvent(eventName, eventData = {}) {
	// Replace with actual analytics implementation
	console.log('Event tracked:', eventName, eventData);

	// Example: Google Analytics 4
	// gtag('event', eventName, eventData);
}

// Track button clicks
document.addEventListener('click', function (e) {
	if (e.target.matches('.btn, .pricing-card__button, .download__button')) {
		trackEvent('button_click', {
			button_text: e.target.textContent.trim(),
			button_location: e.target.closest('section')?.className || 'unknown',
		});
	}
});

// Track scroll depth
let maxScrollDepth = 0;
window.addEventListener(
	'scroll',
	debounce(function () {
		const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);

		if (scrollDepth > maxScrollDepth) {
			maxScrollDepth = scrollDepth;

			// Track milestone scroll depths
			if (maxScrollDepth >= 25 && maxScrollDepth < 50) {
				trackEvent('scroll_depth_25');
			} else if (maxScrollDepth >= 50 && maxScrollDepth < 75) {
				trackEvent('scroll_depth_50');
			} else if (maxScrollDepth >= 75 && maxScrollDepth < 100) {
				trackEvent('scroll_depth_75');
			} else if (maxScrollDepth >= 100) {
				trackEvent('scroll_depth_100');
			}
		}
	}, 100)
);

// Error handling
window.addEventListener('error', function (e) {
	console.error('JavaScript error:', e.error);
	trackEvent('javascript_error', {
		error_message: e.error?.message || 'Unknown error',
		error_filename: e.filename,
		error_lineno: e.lineno,
	});
});

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
	module.exports = {
		showNotification,
		validateEmail,
		debounce,
		trackEvent,
	};
}
