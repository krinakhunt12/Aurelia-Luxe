
import React, { useMemo } from 'react';
import { SIGNATURE_PIECES } from '../constants';
import { Heart, X, ArrowRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { Link, useNavigate } from 'react-router-dom';

interface BestSellersProps {
  isFullPage?: boolean;
}

const BestSellers: React.FC<BestSellersProps> = ({ isFullPage = false }) => {
  const { addToCart, toggleWishlist, isInWishlist, activeCategory, setActiveCategory } = useAppContext();
  const navigate = useNavigate();

  const filteredPieces = useMemo(() => {
    const pieces = activeCategory
      ? SIGNATURE_PIECES.filter(p => p.category === activeCategory)
      : SIGNATURE_PIECES;

    // Limit to 8 items on home page (isFullPage is false)
    return isFullPage ? pieces : pieces.slice(0, 8);
  }, [activeCategory, isFullPage]);

  const handleAddToCart = (product: typeof SIGNATURE_PIECES[0]) => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <section id="shop" className={`py-24 bg-white px-6 md:px-12 min-h-[600px] ${isFullPage ? 'md:py-12' : 'md:py-32'}`}>
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16 relative">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-3xl md:text-5xl serif">
              {activeCategory ? `The ${activeCategory} Series` : isFullPage ? 'The Full Collection' : 'Signature Creations'}
            </h3>

            {activeCategory && (
              <button
                onClick={() => setActiveCategory(null)}
                className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#B5B5B5] hover:text-[#0F0F0F] transition-colors group"
              >
                Show All Designs
                <X size={10} className="group-hover:rotate-90 transition-transform" />
              </button>
            )}
          </div>
          <div className="w-12 h-[1px] bg-[#0F0F0F] mx-auto mt-6 mb-8" />
          <p className="text-[#2B2B2B] font-light tracking-wide max-w-lg mx-auto leading-relaxed text-[15px]">
            {activeCategory
              ? `Explore our curated selection of fine ${activeCategory.toLowerCase()}, each defined by exceptional purity and light.`
              : 'Timeless designs for the most significant moments in life.'}
          </p>
        </div>

        {filteredPieces.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {filteredPieces.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="relative aspect-square overflow-hidden bg-[#FBFBFB] mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleWishlist(product);
                    }}
                    className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 ${isInWishlist(product.id) ? 'bg-white text-red-500 shadow-sm' : 'bg-white/0 text-black hover:bg-white'
                      }`}
                  >
                    <Heart
                      size={18}
                      strokeWidth={1}
                      fill={isInWishlist(product.id) ? "currentColor" : "none"}
                    />
                  </button>
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/80 backdrop-blur-sm">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                      className="w-full py-3 text-[10px] uppercase tracking-[0.3em] bg-[#0F0F0F] text-white hover:bg-[#2B2B2B] transition-colors"
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#B5B5B5] mb-2">{product.category}</p>
                  <h4 className="text-[15px] font-medium tracking-tight mb-2 group-hover:underline underline-offset-4 decoration-1">{product.name}</h4>
                  <p className="text-[13px] font-light text-[#2B2B2B]">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center animate-in fade-in duration-500">
            <p className="serif italic text-[#B5B5B5] mb-6">No pieces currently found in this category.</p>
            <button
              onClick={() => setActiveCategory(null)}
              className="text-[10px] uppercase tracking-[0.2em] border border-[#0F0F0F] px-8 py-3 hover:bg-[#0F0F0F] hover:text-white transition-all"
            >
              Browse Full Collection
            </button>
          </div>
        )}

        {!isFullPage && !activeCategory && (
          <div className="mt-20 text-center">
            <Link
              to="/shop"
              className="inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] group"
            >
              <span className="border-b border-[#0F0F0F] pb-1 group-hover:opacity-50 transition-opacity">Enter the Full Catalog</span>
              <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BestSellers;
