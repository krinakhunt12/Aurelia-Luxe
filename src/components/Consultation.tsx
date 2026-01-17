
import React, { useState } from 'react';

const Consultation: React.FC = () => {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="custom" className="bg-white py-12 md:py-24 px-6">
      <div className="max-w-[1100px] mx-auto bg-[#FAFAFA] p-8 md:p-20 border border-black/[0.03] shadow-[0_4px_30px_rgba(0,0,0,0.02)] animate-slide-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h3 className="text-3xl md:text-5xl serif text-black mb-8 leading-tight">Design Your Own <br /> Legacy</h3>
            <p className="text-[#666] font-light leading-relaxed mb-10 text-[15px]">
              Collaborate with our master artisans to create a piece that is uniquely yours. 
              From selecting the perfect stone to the final polish, we guide you through every step 
              of the bespoke journey.
            </p>
            <ul className="space-y-6">
              <li className="flex items-center gap-5 text-black/60 text-[11px] uppercase tracking-[0.3em] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B5B5B5]" />
                Private Consultations
              </li>
              <li className="flex items-center gap-5 text-black/60 text-[11px] uppercase tracking-[0.3em] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B5B5B5]" />
                3D Design Mockups
              </li>
              <li className="flex items-center gap-5 text-black/60 text-[11px] uppercase tracking-[0.3em] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B5B5B5]" />
                Lifetime Craftsmanship Warranty
              </li>
            </ul>
            
            <div className="mt-16 pt-12 border-t border-black/5 flex items-center gap-6 opacity-40 grayscale">
              <img src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=200&auto=format&fit=crop" className="w-16 h-16 object-cover rounded-full" alt="Studio" />
              <p className="text-[10px] uppercase tracking-widest leading-relaxed">Inspired by the archives <br /> Handcrafted in London</p>
            </div>
          </div>

          <form className="space-y-8 mt-4" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <label className={`absolute -top-6 left-0 text-[10px] uppercase tracking-widest transition-all duration-300 ${focused === 'name' ? 'text-black opacity-100' : 'opacity-0'}`}>Your Name</label>
              <input 
                type="text" 
                placeholder="Full Name" 
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                className={`w-full bg-transparent border-b py-4 text-black placeholder:text-black/30 focus:outline-none transition-all duration-500 text-[14px] ${focused === 'name' ? 'border-black' : 'border-black/10'}`}
              />
            </div>
            <div className="relative">
              <label className={`absolute -top-6 left-0 text-[10px] uppercase tracking-widest transition-all duration-300 ${focused === 'email' ? 'text-black opacity-100' : 'opacity-0'}`}>Email Address</label>
              <input 
                type="email" 
                placeholder="Email Address" 
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                className={`w-full bg-transparent border-b py-4 text-black placeholder:text-black/30 focus:outline-none transition-all duration-500 text-[14px] ${focused === 'email' ? 'border-black' : 'border-black/10'}`}
              />
            </div>
            <div className="relative">
              <label className={`absolute -top-6 left-0 text-[10px] uppercase tracking-widest transition-all duration-300 ${focused === 'message' ? 'text-black opacity-100' : 'opacity-0'}`}>Your Vision</label>
              <textarea 
                rows={4} 
                placeholder="Tell us about your vision" 
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                className={`w-full bg-transparent border-b py-4 text-black placeholder:text-black/30 focus:outline-none transition-all duration-500 resize-none text-[14px] ${focused === 'message' ? 'border-black' : 'border-black/10'}`}
              />
            </div>
            <button className="group relative w-full py-5 mt-8 overflow-hidden transition-all duration-500 bg-[#0F0F0F] text-white">
              <span className="relative z-10 text-[11px] uppercase tracking-[0.4em] font-medium">
                Submit Inquiry
              </span>
              <div className="absolute inset-0 bg-[#2B2B2B] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
            <p className="text-center text-[9px] uppercase tracking-[0.2em] text-black/40 pt-4">A concierge will contact you within 24 hours.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
