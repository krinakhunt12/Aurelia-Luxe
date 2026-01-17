
import React from 'react';

const IMAGES = [
  "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1588444837495-c6cfaf50c8a9?q=80&w=1374&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596460107916-430662021049?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=1374&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1374&auto=format&fit=crop"
];

const InstagramSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-[#F5F5F5]">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-2xl serif">L'Atelier Gallery</h3>
          <a href="#" className="text-[11px] uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity underline underline-offset-4">
            Follow @AureliaLuxe
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {IMAGES.map((img, idx) => (
            <div key={idx} className="aspect-square overflow-hidden group relative cursor-pointer">
              <img 
                src={img} 
                alt={`Lifestyle ${idx}`} 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
