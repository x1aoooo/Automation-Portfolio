
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-textMain font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      
      <main className="animate-fade-in">
        <Hero />
        <Experience />
        <Features />
      </main>

      <Footer />
    </div>
  );
}

export default App;
