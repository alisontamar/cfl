import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Modalities from '../components/Modalities';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Pasanaku from '../components/Pasanaku';
import StepsPasanaku from '../components/StepsPasanaku';
import AppMobileSection from '../components/AppMobileSection';
import ForWhomCFL from '../components/ForWhomCFL';
import { ArrowUp, Sun, Moon } from 'lucide-react';

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const isBeingScrolled = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > window.screen.availHeight / 2);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    window.addEventListener('scroll', isBeingScrolled);
    return () => window.removeEventListener('scroll', isBeingScrolled);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#062D3D] transition-colors duration-300">
      <Navbar />
      <Hero />
      <Pasanaku />
      <Benefits />
      <Modalities />
      <StepsPasanaku />
      <AppMobileSection />
      <ForWhomCFL />
      <Contact />
      <Footer />
      
      {/* Scroll to top button */}
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed right-4 bottom-4 bg-white dark:bg-[#0D5269] text-[#5A8C22] dark:text-[#7AFF6C] p-3 rounded-full hover:scale-110 transition-all shadow-lg z-50 group border-2 border-transparent dark:border-[#0D5269]"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}

      {/* Dark mode toggle button */}
      <button
        onClick={toggleDarkMode}
        className="fixed left-4 bottom-4 bg-white dark:bg-[#0D5269] text-[#5A8C22] dark:text-[#7AFF6C] p-3 rounded-full hover:scale-110 transition-all shadow-lg z-50 group border-2 border-transparent dark:border-[#0D5269]"
        aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
        ) : (
          <Moon className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
        )}
      </button>
    </div>
  );
}