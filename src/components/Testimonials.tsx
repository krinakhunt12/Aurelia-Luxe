
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.4em] mb-4 text-[#B5B5B5]">Voices of Aurelia</p>
          <h3 className="text-3xl serif italic">Shared Experiences</h3>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="max-w-xs text-center">
              <div className="flex justify-center gap-1 mb-6 text-[#B5B5B5]">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" stroke="none" />)}
              </div>
              <blockquote className="text-[15px] font-light leading-relaxed mb-6 italic text-[#2B2B2B]">
                "{t.text}"
              </blockquote>
              <div className="w-8 h-[1px] bg-[#B5B5B5] mx-auto mb-4" />
              <cite className="not-italic text-[12px] font-medium uppercase tracking-[0.1em] block">{t.author}</cite>
              <span className="text-[10px] text-[#B5B5B5] uppercase tracking-[0.1em]">{t.location}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
