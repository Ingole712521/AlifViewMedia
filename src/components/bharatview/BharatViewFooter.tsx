import React from 'react'
import { Facebook, Linkedin, Twitter } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { ALIF_LOGO_WHITE } from './constants'
import { BHARAT_NAV_PAGES } from './bharatPageConfig'

const BharatViewFooter: React.FC = () => {
  const navigate = useNavigate()

  return (
    <footer className="bg-[#0a1120] text-white pt-16 pb-8 border-t-4 border-[var(--bharat-secondary)]">
      <div className="bharat-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
              src={ALIF_LOGO_WHITE}
              alt="Alif View Media Logo"
              className="h-12 object-contain mb-6"
            />
            <p className="text-gray-400 leading-relaxed mb-6">
              India&apos;s most influential cross-industry platform inspiring innovation, recognizing
              excellence, and fostering meaningful business connections.
            </p>
          </div>

          <div>
            <h4 className="bharat-heading text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {BHARAT_NAV_PAGES.map((link) => (
                <li key={link.to}>
                  <button
                    type="button"
                    onClick={() => navigate(link.to)}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="bharat-heading text-xl font-bold mb-6">Contact Us</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              For enquiries, visit the Contact Us page or reach Alif View Media for event support.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2026 BharatView Business Summit & Awards. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Twitter"
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[var(--bharat-primary)] hover:text-white transition-all"
            >
              <Twitter size={16} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[var(--bharat-primary)] hover:text-white transition-all"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[var(--bharat-primary)] hover:text-white transition-all"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default BharatViewFooter
