/**
 * Modern Web Interactions
 * Handles scroll animations, back-to-top button, and other interactive features
 */

(function() {
  'use strict';

  // ============================================
  // SCROLL ANIMATIONS
  // Uses Intersection Observer for performance
  // ============================================

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optionally unobserve after animation to improve performance
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with fade-in classes
  function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-stagger');
    fadeElements.forEach(el => observer.observe(el));
  }

  // ============================================
  // BACK TO TOP BUTTON
  // Shows when user scrolls down, hides when at top
  // ============================================

  function initBackToTop() {
    // Create back-to-top button if it doesn't exist
    let backToTopBtn = document.getElementById('back-to-top');

    if (!backToTopBtn) {
      backToTopBtn = document.createElement('button');
      backToTopBtn.id = 'back-to-top';
      backToTopBtn.innerHTML = '↑';
      backToTopBtn.setAttribute('aria-label', 'Voltar ao topo');
      backToTopBtn.setAttribute('title', 'Voltar ao topo');
      document.body.appendChild(backToTopBtn);
    }

    // Show/hide based on scroll position
    function toggleBackToTop() {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Listen to scroll events (throttled for performance)
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }
      scrollTimeout = window.requestAnimationFrame(() => {
        toggleBackToTop();
      });
    });

    // Initial check
    toggleBackToTop();
  }

  // ============================================
  // INITIALIZE EVERYTHING
  // ============================================

  function init() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      initScrollAnimations();
    } else {
      // If user prefers reduced motion, show all elements immediately
      const fadeElements = document.querySelectorAll('.fade-in, .fade-in-stagger');
      fadeElements.forEach(el => el.classList.add('visible'));
    }

    initBackToTop();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
