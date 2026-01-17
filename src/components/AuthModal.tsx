
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const AuthModal: React.FC = () => {
  const { isAuthModalOpen, setAuthModalOpen, login, authMode } = useAppContext();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  // Sync isLogin state when modal opens via context trigger
  useEffect(() => {
    if (isAuthModalOpen) {
      setIsLogin(authMode === 'login');
    }
  }, [isAuthModalOpen, authMode]);

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, name || 'Guest');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#0F0F0F]/80 backdrop-blur-sm" onClick={() => setAuthModalOpen(false)} />
      <div className="relative w-full max-w-md bg-white p-8 md:p-12 animate-in fade-in zoom-in duration-300">
        <button 
          onClick={() => setAuthModalOpen(false)}
          className="absolute top-6 right-6 text-[#0F0F0F] hover:opacity-50 transition-opacity"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        <div className="text-center mb-10">
          <h2 className="text-3xl serif mb-2">{isLogin ? 'Welcome Back' : 'Join Aurelia'}</h2>
          <p className="text-[12px] uppercase tracking-[0.2em] text-[#B5B5B5]">
            {isLogin ? 'Access your collection' : 'Create your luxury profile'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <input 
                type="text" 
                placeholder="Full Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-b border-[#0F0F0F]/10 py-3 text-[14px] focus:outline-none focus:border-[#0F0F0F] transition-colors"
              />
            </div>
          )}
          <div>
            <input 
              type="email" 
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-[#0F0F0F]/10 py-3 text-[14px] focus:outline-none focus:border-[#0F0F0F] transition-colors"
            />
          </div>
          <div>
            <input 
              type="password" 
              placeholder="Password"
              required
              className="w-full border-b border-[#0F0F0F]/10 py-3 text-[14px] focus:outline-none focus:border-[#0F0F0F] transition-colors"
            />
          </div>
          
          <button className="w-full py-4 bg-[#0F0F0F] text-white text-[11px] uppercase tracking-[0.3em] hover:bg-[#2B2B2B] transition-colors">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-[11px] uppercase tracking-[0.1em] text-[#B5B5B5] hover:text-[#0F0F0F] transition-colors underline underline-offset-4"
          >
            {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
