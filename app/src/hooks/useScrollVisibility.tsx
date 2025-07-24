// src/hooks/useScrollVisibility.ts
import { useEffect, useState } from 'react';

export const useScrollVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY && isVisible) setIsVisible(false);
      else if (current < lastScrollY && !isVisible) setIsVisible(true);
      lastScrollY = current;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  return isVisible;
};
