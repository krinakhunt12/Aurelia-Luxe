
import React from 'react';

const BrandStory: React.FC = () => {
  return (
    <section id="story" className="bg-[#0F0F0F] text-white">
      <div className="flex flex-col lg:flex-row items-stretch">
        <div className="w-full lg:w-1/2 aspect-square lg:aspect-auto">
          <img 
            src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?q=80&w=1470&auto=format&fit=crop" 
            alt="Jewelry artisan at work" 
            className="w-full h-full object-cover grayscale opacity-60"
          />
        </div>
        <div className="w-full lg:w-1/2 p-12 md:p-24 lg:p-32 flex flex-col justify-center">
          <span className="text-[11px] uppercase tracking-[0.4em] mb-8 text-[#B5B5B5]">Our Heritage</span>
          <h3 className="text-4xl md:text-5xl lg:text-6xl serif mb-10 leading-tight">
            Every piece is shaped by precision, patience, and passion.
          </h3>
          <p className="text-[#B5B5B5] font-light leading-relaxed mb-12 max-w-lg">
            Aurelia Luxe was born out of a desire to create jewelry that transcends trends. 
            We believe in the silent power of minimalist design, where every facet and curve 
            serves to enhance the wearer's natural brilliance. Our artisans spend hundreds 
            of hours on a single piece, ensuring it meets our exacting standards of perfection.
          </p>
          <div className="flex items-center gap-12">
            <div>
              <p className="text-2xl serif mb-1">1984</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#B5B5B5]">Est. Heritage</p>
            </div>
            <div className="w-[1px] h-12 bg-white/20" />
            <div>
              <p className="text-2xl serif mb-1">Ethical</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#B5B5B5]">Diamond Sourcing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
