// Simple scroll animation utility
export const initScrollAnimations = () => {
  // Wait for DOM to be ready
  if (typeof window === 'undefined') return;

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible');
      }
    });
  }, observerOptions);

  // Find all elements with animation classes
  const animatedElements = document.querySelectorAll(`
    .animate-on-scroll,
    .animate-slide-left,
    .animate-slide-right,
    .animate-scale
  `);

  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  // Cleanup function
  return () => {
    animatedElements.forEach((element) => {
      observer.unobserve(element);
    });
  };
};

// Initialize when DOM is ready
export const startScrollAnimations = () => {
  if (typeof window === 'undefined') return;
  
  // Use setTimeout to ensure DOM is ready
  setTimeout(() => {
    initScrollAnimations();
  }, 100);
};
