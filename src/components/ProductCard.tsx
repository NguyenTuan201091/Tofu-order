'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
import { MenuItem } from '@/data/menuData';
import NoodleImage from './NoodleImage';
import ProductModal from './ProductModal';

interface ProductCardProps {
  item: MenuItem;
}

export default function ProductCard({ item }: ProductCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        className="rounded-2xl overflow-hidden cursor-pointer border"
        style={{
          backgroundColor: '#0D2137',
          borderColor: 'rgba(212, 175, 55, 0.15)',
        }}
        whileHover={{ y: -4, borderColor: 'rgba(212, 175, 55, 0.4)' }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        onClick={() => setShowModal(true)}
      >
        {/* Image */}
        <div className="relative h-40 overflow-hidden">
          <NoodleImage type={item.imageType} className="w-full h-full" />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(13, 33, 55, 0.7) 0%, transparent 60%)' }}
          />
          {item.popular && (
            <div
              className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold"
              style={{ backgroundColor: '#C41E3A', color: '#FFD700' }}
            >
              <Star size={10} fill="currentColor" />
              Popular
            </div>
          )}
          {/* Category tags */}
          <div className="absolute top-3 right-3 flex gap-1">
            {item.spicyOptions && (
              <span className="w-6 h-6 flex items-center justify-center rounded-full text-xs" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                🌶
              </span>
            )}
            {item.noodleOptions && (
              <span className="w-6 h-6 flex items-center justify-center rounded-full text-xs" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                🍜
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="mb-1">
            <h3 className="font-bold text-sm leading-tight" style={{ color: '#F5DEB3', fontFamily: 'Georgia, serif' }}>
              {item.name}
            </h3>
            <p className="text-xs mt-0.5" style={{ color: '#D4AF37' }}>{item.chineseName}</p>
          </div>

          <p className="text-xs leading-relaxed mt-2 line-clamp-2" style={{ color: '#DEB887', opacity: 0.75 }}>
            {item.description}
          </p>

          <div className="flex items-center justify-between mt-3">
            <span className="font-bold text-base" style={{ color: '#D4AF37', fontFamily: 'Georgia, serif' }}>
              ${item.price.toFixed(2)}
            </span>
            <motion.button
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold"
              style={{ backgroundColor: '#C41E3A', color: '#FFD700' }}
              whileHover={{ backgroundColor: '#8B0000' }}
              whileTap={{ scale: 0.95 }}
              onClick={e => { e.stopPropagation(); setShowModal(true); }}
            >
              <ShoppingCart size={12} />
              Add
            </motion.button>
          </div>
        </div>
      </motion.div>

      {showModal && <ProductModal item={item} onClose={() => setShowModal(false)} />}
    </>
  );
}
