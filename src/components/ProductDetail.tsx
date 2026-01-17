import React, { useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Heart, ShoppingBag, ArrowLeft, Share2 } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { SIGNATURE_PIECES } from '../constants';
const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { addToCart, toggleWishlist, isInWishlist } = useAppContext();
    const [quantity, setQuantity] = React.useState(1);
    const [zoomPos, setZoomPos] = React.useState({ x: 50, y: 50 });
    const [isZoomed, setIsZoomed] = React.useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setZoomPos({ x, y });
    };

    const product = useMemo(() => {
        return SIGNATURE_PIECES.find(p => p.id === id) || null;
    }, [id]);

    const relatedProducts = useMemo(() => {
        if (!product) return [];
        return SIGNATURE_PIECES
            .filter(p => p.category === product.category && p.id !== id)
            .slice(0, 4);
    }, [product, id]);

    if (!product) {
        return (
            <div className="pt-32 pb-20 bg-white min-h-screen">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="text-center py-20">
                        <h1 className="text-3xl serif mb-4">Product Not Found</h1>
                        <Link to="/shop" className="text-[10px] uppercase tracking-[0.2em] border border-[#0F0F0F] px-6 py-3 inline-block hover:bg-[#0F0F0F] hover:text-white transition-all">
                            Back to Shop
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
        // Navigate to cart page
        navigate('/cart');
        setQuantity(1);
    };

    const handleWishlist = () => {
        toggleWishlist(product);
    };

    return (
        <div className="pt-32 pb-20 bg-white min-h-screen">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#B5B5B5] hover:text-[#0F0F0F] transition-colors mb-12"
                >
                    <ArrowLeft size={14} />
                    Back
                </button>

                {/* Product Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    {/* Product Image */}
                    <div
                        className="relative flex items-center justify-center bg-[#FBFBFB] h-[500px] md:h-[700px] rounded-lg overflow-hidden cursor-zoom-in group"
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsZoomed(true)}
                        onMouseLeave={() => setIsZoomed(false)}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className={`w-full h-full object-cover transition-transform duration-200 ease-out pointer-events-none ${isZoomed ? 'scale-[2.5]' : 'scale-100'
                                }`}
                            style={{
                                transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`
                            }}
                        />
                        {!isZoomed && (
                            <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-[9px] uppercase tracking-[0.2em] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                Hover to zoom
                            </div>
                        )}
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col justify-start">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#B5B5B5] mb-4">{product.category}</p>
                        <h1 className="text-4xl md:text-5xl serif mb-6">{product.name}</h1>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-8">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-[#FFD700]">★</span>
                                ))}
                            </div>
                            <span className="text-[12px] text-[#B5B5B5]">(128 reviews)</span>
                        </div>

                        {/* Price */}
                        <div className="mb-8 pb-8 border-b border-[#E5E5E5]">
                            <p className="text-4xl font-light tracking-tight">{product.price}</p>
                            <p className="text-[12px] text-[#B5B5B5] mt-2">Free shipping on orders over $2,000</p>
                        </div>

                        {/* Description */}
                        <p className="text-[15px] text-[#2B2B2B] leading-relaxed mb-8">
                            {product.description}
                        </p>

                        {/* Product Details */}
                        <div className="space-y-4 mb-8 pb-8 border-b border-[#E5E5E5]">
                            <div className="flex justify-between items-center text-[13px]">
                                <span className="text-[#2B2B2B]">Material</span>
                                <span className="font-medium">18K Gold / Platinum</span>
                            </div>
                            <div className="flex justify-between items-center text-[13px]">
                                <span className="text-[#2B2B2B]">Gemstone</span>
                                <span className="font-medium">Diamond / Natural Stone</span>
                            </div>
                            <div className="flex justify-between items-center text-[13px]">
                                <span className="text-[#2B2B2B]">Certification</span>
                                <span className="font-medium">GIA Certified</span>
                            </div>
                            <div className="flex justify-between items-center text-[13px]">
                                <span className="text-[#2B2B2B]">Care</span>
                                <span className="font-medium">Professional Cleaning Recommended</span>
                            </div>
                        </div>

                        {/* Quantity & Add to Cart */}
                        <div className="space-y-6 mb-8">
                            <div className="flex items-center gap-4">
                                <span className="text-[13px] text-[#2B2B2B]">Quantity</span>
                                <div className="flex items-center border border-[#E5E5E5] rounded">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="px-4 py-2 hover:bg-[#F5F5F5] transition-colors"
                                    >
                                        −
                                    </button>
                                    <input
                                        type="number"
                                        value={quantity}
                                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                        className="w-12 text-center border-l border-r border-[#E5E5E5] py-2 outline-none"
                                        min="1"
                                    />
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="px-4 py-2 hover:bg-[#F5F5F5] transition-colors"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={handleAddToCart}
                                className="w-full py-4 bg-[#0F0F0F] text-white text-[11px] uppercase tracking-[0.3em] hover:bg-[#2B2B2B] transition-colors flex items-center justify-center gap-3"
                            >
                                <ShoppingBag size={18} />
                                Add to Bag
                            </button>
                        </div>

                        {/* Wishlist & Share */}
                        <div className="flex items-center gap-4 pb-8 border-b border-[#E5E5E5]">
                            <button
                                onClick={handleWishlist}
                                className={`flex items-center gap-2 px-6 py-3 border transition-all text-[10px] uppercase tracking-[0.2em] ${isInWishlist(product.id)
                                    ? 'border-red-500 bg-red-50 text-red-500'
                                    : 'border-[#E5E5E5] hover:border-[#0F0F0F]'
                                    }`}
                            >
                                <Heart
                                    size={16}
                                    fill={isInWishlist(product.id) ? 'currentColor' : 'none'}
                                />
                                {isInWishlist(product.id) ? 'In Wishlist' : 'Add to Wishlist'}
                            </button>
                            <button className="flex items-center gap-2 px-6 py-3 border border-[#E5E5E5] hover:border-[#0F0F0F] transition-all text-[10px] uppercase tracking-[0.2em]">
                                <Share2 size={16} />
                                Share
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-4">
                                <span className="text-2xl">✓</span>
                                <div>
                                    <p className="font-medium text-[13px] mb-1">Authentic & Certified</p>
                                    <p className="text-[11px] text-[#B5B5B5]">All pieces come with GIA certification</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-2xl">✓</span>
                                <div>
                                    <p className="font-medium text-[13px] mb-1">30-Day Returns</p>
                                    <p className="text-[11px] text-[#B5B5B5]">Hassle-free returns within 30 days</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-2xl">✓</span>
                                <div>
                                    <p className="font-medium text-[13px] mb-1">Lifetime Care</p>
                                    <p className="text-[11px] text-[#B5B5B5]">Professional cleaning & maintenance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="pt-20 border-t border-[#E5E5E5]">
                        <h2 className="text-3xl md:text-4xl serif mb-12">More from {product.category}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {relatedProducts.map((relatedProduct) => (
                                <Link
                                    key={relatedProduct.id}
                                    to={`/product/${relatedProduct.id}`}
                                    className="group cursor-pointer"
                                >
                                    <div className="relative aspect-square overflow-hidden bg-[#FBFBFB] mb-4">
                                        <img
                                            src={relatedProduct.image}
                                            alt={relatedProduct.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#B5B5B5] mb-2">{relatedProduct.category}</p>
                                    <h4 className="text-[15px] font-medium mb-2 group-hover:underline">{relatedProduct.name}</h4>
                                    <p className="text-[13px] text-[#2B2B2B]">{relatedProduct.price}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;
