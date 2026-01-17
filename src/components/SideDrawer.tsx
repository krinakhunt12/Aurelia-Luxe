
import React from 'react';
import { X, Trash2 } from 'lucide-react';
import type { Product } from '../types';

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  items: Product[];
  onRemove: (id: string) => void;
  onAction?: (product: Product) => void;
  actionLabel?: string;
  emptyMessage: string;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  items, 
  onRemove, 
  onAction, 
  actionLabel,
  emptyMessage
}) => {
  return (
    <>
      <div 
        className={`fixed inset-0 z-[80] bg-[#0F0F0F]/40 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={onClose}
      />
      <div className={`fixed top-0 right-0 z-[90] h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-500 ease-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col">
          <div className="p-8 border-b border-[#F5F5F5] flex items-center justify-between">
            <h2 className="text-xl serif uppercase tracking-widest">{title}</h2>
            <button onClick={onClose} className="hover:opacity-50 transition-opacity">
              <X size={24} strokeWidth={1} />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-8">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <p className="text-[#B5B5B5] serif italic mb-6">{emptyMessage}</p>
                <button onClick={onClose} className="text-[10px] uppercase tracking-[0.2em] border-b border-[#0F0F0F] pb-1">
                  Continue Browsing
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                {items.map((item, idx) => (
                  <div key={`${item.id}-${idx}`} className="flex gap-6 animate-in slide-in-from-right-4 duration-300">
                    <div className="w-24 h-24 bg-[#F9F9F9] overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale-[0.5]" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between mb-1">
                        <h4 className="text-[14px] font-medium tracking-tight">{item.name}</h4>
                        <button onClick={() => onRemove(item.id)} className="text-black/30 hover:text-black">
                          <Trash2 size={14} strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="text-[12px] text-[#B5B5B5] mb-4 uppercase tracking-widest">{item.price}</p>
                      {onAction && actionLabel && (
                        <button 
                          onClick={() => onAction(item)}
                          className="text-[10px] uppercase tracking-[0.2em] border border-[#0F0F0F] px-4 py-2 hover:bg-[#0F0F0F] hover:text-white transition-all"
                        >
                          {actionLabel}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && title === 'Shopping Bag' && (
            <div className="p-8 bg-[#FAFAFA] border-t border-[#F5F5F5]">
              <div className="flex justify-between items-end mb-8">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#B5B5B5]">Subtotal</p>
                <p className="text-xl serif">
                  ${items.reduce((acc, curr) => acc + parseInt(curr.price.replace(/[^0-9]/g, '')), 0).toLocaleString()}
                </p>
              </div>
              <button className="w-full py-4 bg-[#0F0F0F] text-white text-[11px] uppercase tracking-[0.3em] hover:bg-[#2B2B2B] transition-colors">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SideDrawer;
