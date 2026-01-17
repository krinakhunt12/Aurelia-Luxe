
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative h-screen min-h-[700px] w-full bg-[#0F0F0F] flex items-center justify-center overflow-hidden z-10">
      {/* Background Image Layer */}
      <div 
        className={`absolute inset-0 z-0 transition-transform duration-[10000ms] ease-out ${isVisible ? 'scale-100' : 'scale-110'}`}
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2000&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4) contrast(1.1)'
        }}
      />
      
      {/* Dynamic Light Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F0F0F]/10 to-[#0F0F0F] z-[1]" />

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">
        {/* Floating High-End Product Image with Animation */}
        <div className={`mb-12 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}>
           <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
              <img 
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop" 
                alt="Signature Diamond Piece" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0F0F0F]/40 to-transparent" />
           </div>
        </div>

        <div className={`text-center text-white transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[10px] md:text-[12px] uppercase tracking-[0.6em] font-light mb-8 opacity-60">
            Est. 1984 | The Art of Perfection
          </p>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-light serif leading-[1.1] mb-12 max-w-5xl mx-auto">
            Timeless Craftsmanship. <br />
            <span className="italic font-normal">Modern Elegance.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4">
            <button 
              onClick={() => (window.location.hash = '#/collections')}
              className="group relative px-12 py-5 overflow-hidden transition-all duration-500"
            >
              <div className="absolute inset-0 border border-white/40 group-hover:border-white transition-colors duration-500" />
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 text-[11px] uppercase tracking-[0.3em] text-white group-hover:text-[#0F0F0F] transition-colors duration-500">
                Explore Collection
              </span>
            </button>
            
            <button 
              onClick={() => (window.location.hash = '#/bespoke')}
              className="px-12 py-5 text-[11px] uppercase tracking-[0.3em] text-white/60 hover:text-white transition-all duration-500 border border-white/10 hover:border-white/30"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-opacity duration-1000 delay-[1500ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center gap-4">
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/30 rotate-90 mb-8 translate-x-1">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
