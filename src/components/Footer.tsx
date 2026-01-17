
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const { setActiveCategory } = useAppContext();

  const handleCategoryClick = (category: string | null) => {
    setActiveCategory(category);
    navigate('/shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInfoClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F0F0F] text-white pt-24 pb-12 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-6">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <h2 className="text-2xl serif uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">Aurelia Luxe</h2>
            </Link>
            <p className="text-[13px] text-[#B5B5B5] leading-loose max-w-xs font-light">
              Crafting timeless luxury since 1984. Minimalist design, ethical sourcing, and unparalleled craftsmanship.
            </p>
            <div className="flex gap-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><Instagram size={18} strokeWidth={1} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><Twitter size={18} strokeWidth={1} /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><Facebook size={18} strokeWidth={1} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-medium mb-8 text-white/90">Client Services</h4>
            <ul className="space-y-4 text-[13px] text-[#B5B5B5] font-light">
              <li><button onClick={() => handleInfoClick('/bespoke')} className="hover:text-white transition-colors">Contact Us</button></li>
              <li><button onClick={() => handleInfoClick('/bespoke')} className="hover:text-white transition-colors">Book an Appointment</button></li>
              <li><button onClick={() => handleInfoClick('/story')} className="hover:text-white transition-colors">Ring Size Guide</button></li>
              <li><button onClick={() => handleInfoClick('/story')} className="hover:text-white transition-colors">Shipping & Returns</button></li>
              <li><button onClick={() => handleInfoClick('/story')} className="hover:text-white transition-colors">Diamond Education</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-medium mb-8 text-white/90">Collections</h4>
            <ul className="space-y-4 text-[13px] text-[#B5B5B5] font-light">
              <li><button onClick={() => handleCategoryClick(null)} className="hover:text-white transition-colors">All Jewelry</button></li>
              <li><button onClick={() => handleCategoryClick('Bracelets')} className="hover:text-white transition-colors">Tennis Bracelets</button></li>
              <li><button onClick={() => handleCategoryClick('Bracelets')} className="hover:text-white transition-colors">Bangles & Cuffs</button></li>
              <li><button onClick={() => handleCategoryClick('Necklaces')} className="hover:text-white transition-colors">Necklaces & Pendants</button></li>
              <li><button onClick={() => handleCategoryClick('Earrings')} className="hover:text-white transition-colors">Earrings</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-medium mb-8 text-white/90">Boutique News</h4>
            <p className="text-[13px] text-[#B5B5B5] mb-6 font-light">
              Subscribe to receive updates on new collections and exclusive events.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-b border-white/20 py-2 text-[13px] focus:outline-none focus:border-white transition-all duration-500 flex-grow"
              />
              <button className="border-b border-white/20 px-4 py-2 text-[10px] uppercase tracking-[0.2em] hover:text-white/60 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] text-white/30 uppercase tracking-[0.2em]">
          <p>© 2024 Aurelia Luxe Fine Jewellery. All Rights Reserved.</p>
          <div className="flex gap-8">
            <button onClick={() => handleInfoClick('/story')} className="hover:text-white/60 transition-colors">Privacy Policy</button>
            <button onClick={() => handleInfoClick('/story')} className="hover:text-white/60 transition-colors">Terms of Service</button>
            <button onClick={() => handleInfoClick('/story')} className="hover:text-white/60 transition-colors">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
