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
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-4 shadow-lg backdrop-blur-md" : "py-6"
      }`}
      style={{
        backgroundColor: isScrolled ? "var(--bg-primary)" : "transparent",
      }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <div className='flex items-center space-x-3'>
            <img
              src={
                theme === "dark"
                  ? "https://app.trickle.so/storage/public/images/usr_1452d643e0000001/d3044b19-cda1-4ab8-b5bc-1aeb931b233c.png"
                  : "https://app.trickle.so/storage/public/images/usr_1452d643e0000001/e35e791a-3f5e-42cb-aeff-d5c9c40f0821.png"
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

            <button className='btn-primary'>Get in Touch</button>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center space-x-4'>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='text-[var(--text-primary)]'
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className='md:hidden mt-4 py-4 border-t'
            style={{ borderColor: "var(--border-color)" }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSectionChange(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className='block w-full text-left py-2 nav-link'
              >
                {item.label}
              </button>
            ))}
            <button className='btn-primary mt-4 w-full'>Get in Touch</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
