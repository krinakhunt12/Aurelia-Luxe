
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, ShoppingBag, Heart, X, User } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

interface NavbarProps {
  scrolled: boolean;
  darkTheme?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, darkTheme }) => {
  const {
    cart,
    wishlist,
    setWishlistOpen,
    user,
    setAuthModalOpen,
    setAuthMode,
    logout,
    setActiveCategory
  } = useAppContext();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Collections', path: '/collections' },
    { name: 'Shop', path: '/shop' },
    { name: 'Bespoke', path: '/bespoke' },
    { name: 'Our Story', path: '/story' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActiveCategory(null);
  };

  const openAuth = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  // Determine navbar text color
  // Default is white on home/dark pages (when not scrolled)
  // Black on white pages or scrolled state
  const textColorClass = scrolled || (!darkTheme && location.pathname !== '/' && location.pathname !== '/story')
    ? 'text-black'
    : 'text-white';

  const bgColorClass = scrolled
    ? 'bg-white shadow-sm border-b border-[#F5F5F5] py-3'
    : 'bg-transparent py-4';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12 flex items-center justify-between ${bgColorClass} ${textColorClass}`}
      >
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden hover:opacity-70 transition-opacity"
            aria-label="Open Menu"
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>
          <Link to="/" onClick={handleLinkClick} className="text-xl md:text-2xl font-bold tracking-[0.3em] serif uppercase whitespace-nowrap">
            Aurelia Luxe
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-10 text-[11px] uppercase tracking-[0.25em] font-light">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={handleLinkClick}
              className={`hover:opacity-50 transition-opacity relative group ${location.pathname === link.path ? 'opacity-100 font-medium' : 'opacity-70'}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-[1px] ${textColorClass.includes('black') ? 'bg-black' : 'bg-white'} transition-all duration-300 group-hover:w-full`} />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <button className="hover:opacity-70 transition-opacity hidden sm:block">
            <Search size={20} strokeWidth={1.5} />
          </button>

          <div className="hidden lg:flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-medium">
            {user ? (
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2 group cursor-pointer">
                  <div className={`w-8 h-8 rounded-full border ${textColorClass === 'text-white' ? 'border-white/30 group-hover:bg-white group-hover:text-black' : 'border-black/10 group-hover:bg-black group-hover:text-white'} flex items-center justify-center transition-all`}>
                    <User size={14} strokeWidth={1.5} />
                  </div>
                  <span className="opacity-60 hidden xl:block">Account</span>
                </div>
                <button
                  onClick={logout}
                  className={`hover:opacity-50 transition-opacity border-l ${textColorClass === 'text-white' ? 'border-white/20' : 'border-black/10'} pl-5 h-4 flex items-center`}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => openAuth('login')}
                  className="px-4 py-2 hover:opacity-50 transition-opacity"
                >
                  Login
                </button>
                <button
                  onClick={() => openAuth('signup')}
                  className={`px-6 py-2 ${textColorClass === 'text-white' ? 'bg-white text-black' : 'bg-black text-white'} hover:opacity-90 transition-opacity rounded-full`}
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => setWishlistOpen(true)}
            className="hover:opacity-70 transition-opacity relative"
          >
            <Heart size={20} strokeWidth={1.5} />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#B5B5B5] rounded-full animate-pulse" />
            )}
          </button>

          <button
            onClick={() => window.location.href = '/cart'}
            className="hover:opacity-70 transition-opacity flex items-center gap-1 group"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="text-[10px] mb-2 font-medium">({cart.length})</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-white text-black transition-all duration-700 ease-in-out transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-16">
            <span className="text-xl font-bold tracking-[0.4em] serif uppercase">Aurelia Luxe</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={28} strokeWidth={1} />
            </button>
          </div>

          <div className="flex flex-col gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={handleLinkClick}
                className={`text-4xl serif tracking-tight hover:opacity-50 transition-opacity border-b border-gray-100 pb-4 ${location.pathname === link.path ? 'opacity-100' : 'opacity-40'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-12 space-y-6">
            {!user ? (
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => { setIsMobileMenuOpen(false); openAuth('login'); }}
                  className="w-full py-4 text-center border border-black text-[12px] uppercase tracking-[0.2em]"
                >
                  Login
                </button>
                <button
                  onClick={() => { setIsMobileMenuOpen(false); openAuth('signup'); }}
                  className="w-full py-4 text-center bg-black text-white text-[12px] uppercase tracking-[0.2em]"
                >
                  Sign Up
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 py-4 border-b border-gray-100">
                  <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center">
                    <User size={20} strokeWidth={1} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Welcome back</p>
                    <p className="text-xl serif">{user.name}</p>
                  </div>
                </div>
                <button
                  onClick={() => { setIsMobileMenuOpen(false); logout(); }}
                  className="text-left py-2 text-[12px] uppercase tracking-[0.2em] text-red-500"
                >
                  Logout
                </button>
              </div>
            )}
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2">Inquiries</p>
              <p className="text-lg font-light">concierge@aurelialuxe.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
