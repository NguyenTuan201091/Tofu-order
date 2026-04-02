'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { menuItems, categories } from '@/data/menuData';
import { useCart } from '@/context/CartContext';
import ProductCard from './ProductCard';
import CartSidebar from './CartSidebar';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('lamian');
  const { dispatch, totalItems } = useCart();

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#060D1A' }}>
      {/* Top navigation */}
      <header
        className="sticky top-0 z-30 backdrop-blur-md"
        style={{ backgroundColor: 'rgba(6, 13, 26, 0.95)', borderBottom: '1px solid rgba(212, 175, 55, 0.15)' }}
      >
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div>
            <h1 className="text-lg font-bold leading-tight" style={{ color: '#D4AF37', fontFamily: 'Georgia, serif' }}>
              豆腐拉面
            </h1>
            <p className="text-xs" style={{ color: '#DEB887', opacity: 0.6 }}>Tofu La Mian</p>
          </div>

          {/* Cart button */}
          <motion.button
            onClick={() => dispatch({ type: 'TOGGLE_CART' })}
            className="relative flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm"
            style={{ backgroundColor: '#C41E3A', color: '#FFD700' }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingCart size={16} />
            <span>Cart</span>
            {totalItems > 0 && (
              <motion.span
                className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ backgroundColor: '#FFD700', color: '#0D2137' }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                key={totalItems}
              >
                {totalItems}
              </motion.span>
            )}
          </motion.button>
        </div>

        {/* Category tabs */}
        <div className="max-w-2xl mx-auto px-4 pb-3">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all"
                style={{
                  backgroundColor: activeCategory === cat.id ? '#C41E3A' : 'rgba(27, 58, 107, 0.3)',
                  color: activeCategory === cat.id ? '#FFD700' : '#DEB887',
                  border: `1px solid ${activeCategory === cat.id ? '#C41E3A' : 'rgba(212, 175, 55, 0.1)'}`,
                }}
              >
                <span>{cat.icon}</span>
                <span className="hidden sm:inline">{cat.label}</span>
                <span className="sm:hidden">{cat.chineseLabel}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Category header */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        {categories.filter(c => c.id === activeCategory).map(cat => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <div className="flex items-baseline gap-3">
              <span className="text-3xl">{cat.icon}</span>
              <div>
                <h2 className="text-xl font-bold" style={{ color: '#F5DEB3', fontFamily: 'Georgia, serif' }}>
                  {cat.label}
                </h2>
                <p className="text-sm" style={{ color: '#D4AF37' }}>{cat.chineseLabel}</p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Menu grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ProductCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Decorative footer */}
      <div className="h-24" />

      {/* Cart Sidebar */}
      <CartSidebar />
    </div>
  );
}
