
import React from 'react';

const IMAGES = [
  "https://i.pinimg.com/736x/5c/4d/84/5c4d848fcc2b7e062bf6da45b9daad47.jpg",
  "https://i.pinimg.com/1200x/b0/4c/3f/b04c3f3bc0124a3919bc7136e212d7a7.jpg",
  "https://i.pinimg.com/1200x/04/e8/bd/04e8bde7ebd68c249a196cdc0f55011b.jpg",
  "https://i.pinimg.com/736x/51/78/65/517865b041fbe9630aa6b9e3e4f7f68d.jpg",
  "https://i.pinimg.com/736x/4e/42/93/4e4293e01b404dfdd6614bb7a0e53fc1.jpg",
  "https://i.pinimg.com/1200x/5e/0d/b6/5e0db698d88eebe6f0ce10a48adec048.jpg"
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
