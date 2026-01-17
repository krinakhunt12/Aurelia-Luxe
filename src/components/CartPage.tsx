import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { useAppContext } from '../context/AppContext';
import { updateQuantity } from '../store/cartSlice';

const CartPage: React.FC = () => {
    const { cart, removeFromCart, user, setAuthModalOpen, setAuthMode } = useAppContext();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const subtotal = cart.reduce((sum, item) => {
        const price = parseFloat(item.price.replace('$', '').replace(',', ''));
        return sum + price * item.quantity;
    }, 0);

    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    const handleCheckout = () => {
        if (!user) {
            setAuthMode('login');
            setAuthModalOpen(true);
            return;
        }
        // Proceed to checkout
        navigate('/checkout');
    };

    const handleQuantityChange = (productId: string, newQuantity: number) => {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            dispatch(updateQuantity({ id: productId, quantity: newQuantity }));
        }
    };

    if (cart.length === 0) {
        return (
            <div className="pt-32 pb-20 bg-white min-h-screen">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="text-center py-24">
                        <ShoppingBag size={64} className="mx-auto mb-6 text-[#B5B5B5]" />
                        <h1 className="text-4xl md:text-5xl serif mb-4">Your Shopping Bag is Empty</h1>
                        <p className="text-[#2B2B2B] font-light mb-8">Discover our curated collection of luxury jewelry.</p>
                        <button
                            onClick={() => navigate('/shop')}
                            className="inline-flex items-center gap-3 px-8 py-3 border border-[#0F0F0F] hover:bg-[#0F0F0F] hover:text-white transition-all text-[10px] uppercase tracking-[0.2em]"
                        >
                            Continue Shopping
                            <ArrowRight size={14} />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 bg-white min-h-screen">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <h1 className="text-4xl md:text-5xl serif mb-16">Shopping Bag</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Cart Items */}
                    <div className="lg:col-span-2">
                        <div className="border-b border-[#E5E5E5] pb-6 mb-6">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#B5B5B5]">{cart.length} items in bag</p>
                        </div>

                        <div className="space-y-8">
                            {cart.map((item) => (
                                <div key={item.id} className="flex gap-6 pb-8 border-b border-[#E5E5E5]">
                                    {/* Product Image */}
                                    <div className="w-24 h-24 flex-shrink-0 bg-[#FBFBFB] overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Product Details */}
                                    <div className="flex-grow">
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#B5B5B5] mb-2">{item.category}</p>
                                        <h3 className="text-[15px] font-medium mb-2">{item.name}</h3>
                                        <p className="text-[13px] text-[#2B2B2B] mb-4">{item.price}</p>

                                        {/* Quantity Controls */}
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                className="px-2 py-1 border border-[#E5E5E5] hover:bg-[#F5F5F5] transition-colors text-[12px]"
                                            >
                                                −
                                            </button>
                                            <span className="px-4 py-1 border border-[#E5E5E5] text-[12px] w-12 text-center">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                className="px-2 py-1 border border-[#E5E5E5] hover:bg-[#F5F5F5] transition-colors text-[12px]"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    {/* Remove Button */}
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="flex-shrink-0 text-[#B5B5B5] hover:text-red-500 transition-colors"
                                        title="Remove from bag"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Continue Shopping */}
                        <button
                            onClick={() => navigate('/shop')}
                            className="mt-8 text-[10px] uppercase tracking-[0.2em] text-[#2B2B2B] hover:text-[#0F0F0F] inline-flex items-center gap-2 group"
                        >
                            <span className="border-b border-[#2B2B2B] pb-1 group-hover:opacity-60 transition-opacity">Continue Shopping</span>
                            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-[#FBFBFB] p-8 sticky top-32">
                            <h3 className="text-[15px] font-medium mb-6">Order Summary</h3>

                            <div className="space-y-4 mb-6 pb-6 border-b border-[#E5E5E5]">
                                <div className="flex justify-between text-[13px]">
                                    <span className="text-[#2B2B2B]">Subtotal</span>
                                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-[13px]">
                                    <span className="text-[#2B2B2B]">Tax (10%)</span>
                                    <span className="font-medium">${tax.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="flex justify-between text-[15px] font-medium mb-8 pb-8 border-b border-[#E5E5E5]">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>

                            <button
                                onClick={handleCheckout}
                                className="w-full py-3 bg-[#0F0F0F] text-white text-[10px] uppercase tracking-[0.3em] hover:bg-[#2B2B2B] transition-colors mb-4"
                            >
                                {user ? 'Proceed to Checkout' : 'Login to Checkout'}
                            </button>

                            {!user && (
                                <p className="text-[11px] text-[#B5B5B5] text-center">
                                    Please log in to complete your purchase
                                </p>
                            )}

                            <div className="mt-8 pt-8 border-t border-[#E5E5E5]">
                                <p className="text-[12px] text-[#2B2B2B] mb-4">✓ Free Shipping on Orders Over $2,000</p>
                                <p className="text-[12px] text-[#2B2B2B] mb-4">✓ 30-Day Return Policy</p>
                                <p className="text-[12px] text-[#2B2B2B]">✓ Secure Checkout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
