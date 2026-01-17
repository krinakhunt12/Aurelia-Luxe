
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import BrandStory from './components/BrandStory';
import BestSellers from './components/BestSellers';
import Consultation from './components/Consultation';
import Testimonials from './components/Testimonials';
import InstagramSection from './components/InstagramSection';
import Footer from './components/Footer';
import AIStylist from './components/AIStylist';
import SideDrawer from './components/SideDrawer';
import AuthModal from './components/AuthModal';
import { AppProvider, useAppContext } from './context/AppContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Page Components
const HomePage: React.FC = () => (
  <div className="animate-fade-in">
    <Hero />
    <div className="py-20">
      <Collections isFullPage={false} />
      <BestSellers isFullPage={false} />
      <Testimonials />
    </div>
  </div>
);

const CollectionsPage: React.FC = () => (
  <div className="pt-32 pb-20 animate-fade-in bg-white">
    <div className="px-6 md:px-12 mb-16 text-center">
      <h1 className="text-5xl md:text-7xl serif mb-6">The Collections</h1>
      <p className="text-[12px] uppercase tracking-[0.4em] text-[#B5B5B5]">A Curated Symphony of Light & Form</p>
    </div>
    <Collections isFullPage={true} />
    <InstagramSection />
  </div>
);

const BespokePage: React.FC = () => (
  <div className="pt-32 pb-20 animate-fade-in bg-white min-h-screen">
    <div className="px-6 md:px-12 mb-16 text-center text-black">
      <h1 className="text-5xl md:text-7xl serif mb-6">Bespoke Design</h1>
      <p className="text-[12px] uppercase tracking-[0.4em] text-[#B5B5B5]">Your Vision, Our Craftsmanship</p>
    </div>
    <Consultation />
  </div>
);

const StoryPage: React.FC = () => (
  <div className="animate-fade-in">
    <div className="h-[60vh] relative overflow-hidden flex items-center justify-center">
      <img 
        src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?q=80&w=1470&auto=format&fit=crop" 
        className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
        alt="Heritage"
      />
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl serif mb-4">Our Heritage</h1>
        <p className="text-[12px] uppercase tracking-[0.4em]">Since 1984</p>
      </div>
    </div>
    <BrandStory />
    <Testimonials />
    <InstagramSection />
  </div>
);

const ShopPage: React.FC = () => (
  <div className="pt-32 bg-white min-h-screen animate-fade-in">
    <BestSellers isFullPage={true} />
    <InstagramSection />
  </div>
);

const AppContent: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { 
    cart, 
    removeFromCart, 
    isCartOpen, 
    setCartOpen,
    wishlist,
    toggleWishlist,
    isWishlistOpen,
    setWishlistOpen,
    addToCart
  } = useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  // Check if current page should have a white navbar on transparent (dark background pages)
  const isDarkPage = false; // Bespoke is now white.
  const navbarScrolled = !isHome || scrolled || isDarkPage;

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <ScrollToTop />
      <Navbar scrolled={navbarScrolled} darkTheme={isDarkPage && !scrolled} />
      
      <main className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/bespoke" element={<BespokePage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />
      <AIStylist />

      <SideDrawer 
        isOpen={isCartOpen}
        onClose={() => setCartOpen(false)}
        title="Shopping Bag"
        items={cart}
        onRemove={removeFromCart}
        emptyMessage="Your bag is currently empty."
      />

      <SideDrawer 
        isOpen={isWishlistOpen}
        onClose={() => setWishlistOpen(false)}
        title="Wishlist"
        items={wishlist}
        onRemove={(id) => toggleWishlist(wishlist.find(i => i.id === id)!)}
        onAction={(product) => {
          addToCart(product);
          toggleWishlist(product);
        }}
        actionLabel="Move to Bag"
        emptyMessage="Your wishlist is awaiting its first piece."
      />

      <AuthModal />
    </div>
  );
};

const App: React.FC = () => (
  <AppProvider>
    <Router>
      <AppContent />
    </Router>
  </AppProvider>
);

export default App;
