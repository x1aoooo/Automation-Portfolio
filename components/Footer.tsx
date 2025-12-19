
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-black py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-[10px] md:text-xs text-textMuted uppercase tracking-[0.3em] font-medium">
          &copy; {new Date().getFullYear()} Prince. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
