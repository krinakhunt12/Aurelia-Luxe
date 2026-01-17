
import React, { useMemo, Fragment } from 'react';
import { SIGNATURE_PIECES } from '../constants';
import { Heart, ArrowRight, ChevronDown } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { Link, useNavigate } from 'react-router-dom';
import { Listbox, Transition } from '@headlessui/react';

const PRICE_OPTIONS = [
  { label: 'All Prices', id: 'all', range: [0, 10000] as [number, number] },
  { label: 'Under $1,000', id: 'under-1000', range: [0, 1000] as [number, number] },
  { label: '$1,000 — $3,000', id: '1000-3000', range: [1000, 3000] as [number, number] },
  { label: 'Above $3,000', id: 'above-3000', range: [3000, 10000] as [number, number] },
];

const SORT_OPTIONS = [
  { label: 'Featured', id: 'featured' },
  { label: 'Price: Low to High', id: 'price-low' },
  { label: 'Price: High to Low', id: 'price-high' },
  { label: 'New Arrivals', id: 'newest' },
];

interface BestSellersProps {
  isFullPage?: boolean;
}

const BestSellers: React.FC<BestSellersProps> = ({ isFullPage = false }) => {
  const { addToCart, toggleWishlist, isInWishlist, activeCategory, setActiveCategory } = useAppContext();
  const navigate = useNavigate();

  const [selectedPrice, setSelectedPrice] = React.useState(PRICE_OPTIONS[0]);
  const [selectedSort, setSelectedSort] = React.useState(SORT_OPTIONS[0]);

  const parsePrice = (priceStr: string) => {
    return parseFloat(priceStr.replace(/[^0-9.]/g, ''));
  };

  const filteredPieces = useMemo(() => {
    let pieces = activeCategory
      ? SIGNATURE_PIECES.filter(p => p.category === activeCategory)
      : SIGNATURE_PIECES;

    // Applying price filter
    if (isFullPage) {
      pieces = pieces.filter(p => {
        const price = parsePrice(p.price);
        return price >= selectedPrice.range[0] && price <= selectedPrice.range[1];
      });

      // Applying sort
      if (selectedSort.id === 'price-low') {
        pieces = [...pieces].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
      } else if (selectedSort.id === 'price-high') {
        pieces = [...pieces].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
      } else if (selectedSort.id === 'newest') {
        pieces = [...pieces].reverse(); // Mock newest
      }
    }

    // Limit to 8 items on home page (isFullPage is false)
    return isFullPage ? pieces : pieces.slice(0, 8);
  }, [activeCategory, isFullPage, selectedPrice, selectedSort]);

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
          </div>
          <div className="w-12 h-[1px] bg-brand-black mx-auto mt-6 mb-8" />
          <p className="text-brand-gray font-light tracking-wide max-w-lg mx-auto leading-relaxed text-[15px]">
            {activeCategory
              ? `Explore our curated selection of fine ${activeCategory.toLowerCase()}, each defined by exceptional purity and light.`
              : 'Timeless designs for the most significant moments in life.'}
          </p>
        </div>

        {isFullPage && (
          <div className="flex flex-wrap items-center justify-between gap-8 mb-16 pb-8 border-b border-brand-black/5 ring-offset-white">
            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[9px] uppercase tracking-[0.3em] text-brand-muted mr-2">Category</span>
              {['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat === 'All' ? null : cat)}
                  className={`text-[10px] uppercase tracking-[0.2em] px-5 py-2.5 transition-all duration-500 border ${(activeCategory === cat || (cat === 'All' && !activeCategory))
                    ? 'bg-brand-black text-white border-brand-black'
                    : 'text-brand-black border-transparent hover:border-brand-black/20'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Price & Sort Filters with Headless UI */}
            <div className="flex flex-wrap items-center gap-10">
              {/* Price Filter */}
              <div className="flex items-center gap-4 border-b border-transparent hover:border-brand-black/10 pb-1 transition-all">
                <span className="text-[9px] uppercase tracking-[0.3em] text-brand-muted">Price</span>
                <Listbox value={selectedPrice} onChange={setSelectedPrice}>
                  <div className="relative">
                    <Listbox.Button className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium focus:outline-none min-w-[120px] text-left">
                      <span>{selectedPrice.label}</span>
                      <ChevronDown size={12} strokeWidth={1.5} className="ml-auto mt-0.5" />
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-50 mt-4 w-56 bg-white border border-brand-black/5 p-2 shadow-2xl focus:outline-none overflow-hidden">
                        {PRICE_OPTIONS.map((option) => (
                          <Listbox.Option
                            key={option.id}
                            className={({ active, selected }) =>
                              `relative cursor-pointer select-none py-3 px-4 text-[9px] uppercase tracking-[0.2em] transition-colors ${active ? 'bg-brand-soft' : ''
                              } ${selected ? 'font-bold' : 'font-light'}`
                            }
                            value={option}
                          >
                            {option.label}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>

              {/* Sort Filter */}
              <div className="flex items-center gap-4 border-b border-transparent hover:border-brand-black/10 pb-1 transition-all">
                <span className="text-[9px] uppercase tracking-[0.3em] text-brand-muted">Sort</span>
                <Listbox value={selectedSort} onChange={setSelectedSort}>
                  <div className="relative">
                    <Listbox.Button className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium focus:outline-none min-w-[140px] text-left">
                      <span>{selectedSort.label}</span>
                      <ChevronDown size={12} strokeWidth={1.5} className="ml-auto mt-0.5" />
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-50 mt-4 right-0 w-56 bg-white border border-black/5 p-2 shadow-2xl focus:outline-none overflow-hidden">
                        {SORT_OPTIONS.map((option) => (
                          <Listbox.Option
                            key={option.id}
                            className={({ active, selected }) =>
                              `relative cursor-pointer select-none py-3 px-4 text-[9px] uppercase tracking-[0.2em] transition-colors ${active ? 'bg-brand-soft' : ''
                              } ${selected ? 'font-bold' : 'font-light'}`
                            }
                            value={option}
                          >
                            {option.label}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </div>
          </div>
        )}

        {filteredPieces.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {filteredPieces.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="relative aspect-square overflow-hidden bg-brand-silk mb-6">
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
                      className="w-full py-3 text-[10px] uppercase tracking-[0.3em] bg-brand-black text-white hover:bg-brand-gray transition-colors"
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-brand-muted mb-2">{product.category}</p>
                  <h4 className="text-[15px] font-medium tracking-tight mb-2 group-hover:underline underline-offset-4 decoration-1">{product.name}</h4>
                  <p className="text-[13px] font-light text-brand-gray">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center animate-in fade-in duration-500">
            <p className="serif italic text-brand-muted mb-6">No pieces currently found in this category.</p>
            <button
              onClick={() => setActiveCategory(null)}
              className="text-[10px] uppercase tracking-[0.2em] border border-brand-black px-8 py-3 hover:bg-brand-black hover:text-white transition-all"
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
              <span className="border-b border-brand-black pb-1 group-hover:opacity-50 transition-opacity">Enter the Full Catalog</span>
              <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BestSellers;
