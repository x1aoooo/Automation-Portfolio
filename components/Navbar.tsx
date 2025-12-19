
import React, { useState, useEffect, useRef } from 'react';

const NAV_ITEMS = [
  { label: 'Home', href: 'home' },
  { label: 'Experience', href: 'experience' },
  { label: 'Automations', href: 'automations' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY || document.documentElement.scrollTop;
      setScrolled(offset > 30);
    };

    // Using a more centered rootMargin (-40% from top and bottom) 
    // ensures the active highlight only changes when the target section
    // actually occupies the middle 20% of the viewport.
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      // Find the entry currently visible in the center "window"
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const element = document.getElementById(item.href);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;

    try {
      // Temporarily disable the observer to prevent it from resetting the 
      // active section during the smooth scroll journey.
      if (observerRef.current) observerRef.current.disconnect();
      setActiveSection(id);

      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      const offsetPosition = elementPosition + currentScroll - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Re-enable detection after the scroll animation likely finished.
      setTimeout(() => {
        NAV_ITEMS.forEach((item) => {
          const el = document.getElementById(item.href);
          if (el && observerRef.current) {
            observerRef.current.observe(el);
          }
        });
      }, 1000);
      
    } catch (err) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 pointer-events-none ${scrolled ? 'pt-6' : 'pt-8'}`}>
      <nav 
        className={`
          pointer-events-auto
          flex items-center gap-1 p-1.5 rounded-full 
          bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10
          transition-all duration-500 ease-in-out
          shadow-[0_8px_32px_rgba(0,0,0,0.4)]
          ${scrolled ? 'scale-100' : 'scale-105'}
        `}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.href;
          
          return (
            <a
              key={item.label}
              href={`#${item.href}`}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`
                relative px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full
                ${isActive ? 'text-white' : 'text-textMuted hover:text-white/70'}
              `}
            >
              {isActive && (
                <div 
                  className="absolute inset-0 bg-[#222] rounded-full z-0 animate-fade-in" 
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
};
