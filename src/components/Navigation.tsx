/** @format */

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavigationProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  theme,
  toggleTheme,
  currentSection,
  onSectionChange,
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "objectives-mission", label: "Objectives & Mission" },
    { id: "events", label: "Events" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-4 shadow-lg backdrop-blur-md" 
          : "py-6"
      }`}
      style={{
        backgroundColor: isScrolled 
          ? theme === 'dark' 
            ? "rgba(17, 24, 39, 0.95)" // Dark mode with transparency
            : "rgba(255, 255, 255, 0.95)" // Light mode with transparency
          : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        borderBottom: isScrolled 
          ? theme === 'dark' 
            ? "1px solid rgba(55, 65, 81, 0.3)" 
            : "1px solid rgba(229, 231, 235, 0.3)"
          : "none",
        boxShadow: isScrolled 
          ? theme === 'dark' 
            ? "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)"
            : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          : "none"
      }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <div className='flex items-center space-x-3'>
            <img
              src={
                theme === "dark"
                  ? "/images/Aliief_white.png"
                  : "/images/company-logo.png"
              }
              alt='Alif View Media Logo'
              className='h-10 w-auto object-contain'
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`nav-link ${
                  currentSection === item.id
                    ? "text-[var(--primary-color)]"
                    : ""
                }`}
              >
                {item.label}
              </button>
            ))}

            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            <button
              className='h-10 px-4 py-2 rounded-lg font-semibold text-sm text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center'
              style={{
                background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))'
              }}
              onClick={() => onSectionChange('contact')}
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center space-x-4'>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`text-[var(--text-primary)] hover:opacity-70 transition-opacity duration-200 ${
                theme === 'dark' 
                  ? 'hover:text-white' 
                  : 'hover:text-gray-800'
              }`}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className='md:hidden mt-4 py-4 border-t backdrop-blur-md rounded-lg'
            style={{ 
              borderColor: theme === 'dark' 
                ? "rgba(55, 65, 81, 0.5)" 
                : "rgba(229, 231, 235, 0.5)",
              backgroundColor: theme === 'dark' 
                ? "rgba(17, 24, 39, 0.9)" 
                : "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(10px)"
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSectionChange(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-3 px-4 nav-link rounded-md transition-colors duration-200 ${
                  theme === 'dark' 
                    ? 'hover:bg-white/10' 
                    : 'hover:bg-black/5'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              className='btn-primary mt-4 w-full mx-4'
              onClick={() => {
                onSectionChange('contact');
                setIsMobileMenuOpen(false);
              }}
            >
              Get in Touch
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
