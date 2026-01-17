
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { COLLECTIONS } from '../constants';
import { useAppContext } from '../context/AppContext';

interface CollectionsProps {
  isFullPage?: boolean;
}

const Collections: React.FC<CollectionsProps> = ({ isFullPage = false }) => {
  const { setActiveCategory } = useAppContext();
  const navigate = useNavigate();

  const handleCategoryClick = (category: string | null) => {
    setActiveCategory(category);
    navigate('/shop');
  };

  const getCategoryFromPath = (path: string) => {
    if (path.includes('rings')) return 'Rings';
    if (path.includes('necklaces')) return 'Necklaces';
    if (path.includes('earrings')) return 'Earrings';
    if (path.includes('bridal')) return 'Bridal';
    return null;
  };

  return (
    <section className={`${isFullPage ? 'pb-24' : 'py-24 md:py-32'} bg-white px-6 md:px-12`}>
      <div className="max-w-[1440px] mx-auto">
        {!isFullPage && (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h3 className="text-4xl md:text-5xl serif mb-6">Curated Collections</h3>
              <p className="text-[#2B2B2B] font-light tracking-wide leading-relaxed">
                Discover pieces that speak to the heart, meticulously crafted with rare gemstones and precious metals.
              </p>
            </div>
            <button 
              onClick={() => navigate('/collections')}
              className="group flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] self-start md:self-auto"
            >
              <span className="border-b border-[#0F0F0F] pb-1 group-hover:opacity-60 transition-opacity">View All Series</span>
              <span className="text-lg font-light group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        )}

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${isFullPage ? '3' : '4'} gap-8`}>
          {COLLECTIONS.map((collection) => (
            <button 
              key={collection.id} 
              onClick={() => handleCategoryClick(getCategoryFromPath(collection.path))}
              className="group relative block overflow-hidden aspect-[3/4] bg-[#F5F5F5] text-left"
            >
              <img 
                src={collection.image} 
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-12 h-[1px] bg-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <h4 className="text-white text-xl serif mb-2">{collection.title}</h4>
                <span className="text-white/70 text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  Shop Category
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
