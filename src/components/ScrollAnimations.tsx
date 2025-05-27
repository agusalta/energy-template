import { useEffect } from 'react';

interface ScrollAnimationProps {
  sectionId: string;
  animationClass: string;
  threshold?: number;
}

export default function ScrollAnimations({ sectionId, animationClass, threshold = 0.1 }: ScrollAnimationProps) {
  useEffect(() => {
    const section = document.querySelector(`#${sectionId}`);
    if (!section) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.classList.remove('opacity-0');
          section.classList.add('opacity-100');
          
          const elements = section.querySelectorAll('.transform');
          elements.forEach(element => {
            element.classList.remove('opacity-0', 'translate-y-4', 'translate-x-4');
            element.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');
          });
          
          observer.unobserve(section);
        }
      });
    }, {
      threshold
    });

    observer.observe(section);

    return () => observer.disconnect();
  }, [sectionId, threshold]);

  return null;
} 