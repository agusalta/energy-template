import { useEffect } from 'react';

export default function ParallaxEffect() {
  useEffect(() => {
    let ticking = false;
    let lastScrollY = 0;

    function updateParallax() {
      document.documentElement.style.setProperty('--scroll-offset', `${lastScrollY * 0.5}px`);
      ticking = false;
    }

    const handleScroll = () => {
      lastScrollY = window.pageYOffset;
      
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
} 