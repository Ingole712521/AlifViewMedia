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
    // { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "py-4 shadow-lg backdrop-blur-md"
          : "py-6"
        }`}
      style={{
        '--text-primary': '#ffffff',
        backgroundColor: isScrolled
          ? "rgba(17, 24, 39, 0.95)" // Always dark with transparency
          : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        borderBottom: isScrolled
          ? "1px solid rgba(55, 65, 81, 0.3)"
          : "none",
        boxShadow: isScrolled
          ? "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)"
          : "none"
      } as React.CSSProperties}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <div className='flex items-center space-x-3'>
            <img
              src="/images/Aliief_white.png"
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
                className={`nav-link ${currentSection === item.id
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
                background: 'linear-gradient(135deg, #dc2626, #b91c1c)'
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
              className="text-white hover:opacity-70 transition-opacity duration-200 hover:text-white"
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
              borderColor: "rgba(55, 65, 81, 0.5)",
              backgroundColor: "rgba(17, 24, 39, 0.9)",
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
                className="block w-full text-left py-3 px-4 nav-link rounded-md transition-colors duration-200 hover:bg-white/10"
              >
                {item.label}
              </button>
            ))}
            <button
              className='mt-4 w-full mx-4 px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg'
              style={{
                background: 'linear-gradient(135deg, #dc2626, #b91c1c)'
              }}
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
