'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';
import { MenuItem } from '@/data/menuData';
import { useCart } from '@/context/CartContext';
import NoodleImage from './NoodleImage';

const SPICINESS_OPTIONS = ['Mild', 'Medium', 'Hot', 'Extra Hot'];
const NOODLE_THICKNESS_OPTIONS = ['Thin', 'Regular', 'Thick'];
const TOPPING_OPTIONS = [
  { id: 'egg', label: 'Soft-boiled Egg', price: 1.50 },
  { id: 'beef', label: 'Braised Beef', price: 3.00 },
  { id: 'shallots', label: 'Crispy Shallots', price: 0.75 },
  { id: 'mushroom', label: 'Wood Ear Mushrooms', price: 1.50 },
  { id: 'bamboo', label: 'Bamboo Shoots', price: 1.00 },
  { id: 'tofu', label: 'Silken Tofu', price: 1.25 },
];

interface ProductModalProps {
  item: MenuItem;
  onClose: () => void;
}

export default function ProductModal({ item, onClose }: ProductModalProps) {
  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [spiciness, setSpiciness] = useState('Medium');
  const [noodleThickness, setNoodleThickness] = useState('Regular');
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [specialNotes, setSpecialNotes] = useState('');

  const toppingsCost = selectedToppings.reduce((sum, toppingId) => {
    const topping = TOPPING_OPTIONS.find(t => t.id === toppingId);
    return sum + (topping?.price ?? 0);
  }, 0);

  const unitPrice = item.price + toppingsCost;
  const totalPrice = unitPrice * quantity;

  function toggleTopping(toppingId: string) {
    setSelectedToppings(prev =>
      prev.includes(toppingId) ? prev.filter(id => id !== toppingId) : [...prev, toppingId]
    );
  }

  function handleAddToCart() {
    const cartItemId = `${item.id}-${spiciness}-${noodleThickness}-${selectedToppings.sort().join(',')}`;
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: cartItemId,
        menuItem: item,
        quantity,
        spiciness: item.spicyOptions ? spiciness : undefined,
        noodleThickness: item.noodleOptions ? noodleThickness : undefined,
        toppings: item.toppingOptions ? selectedToppings : undefined,
        specialNotes: specialNotes || undefined,
        totalPrice,
      },
    });
    dispatch({ type: 'OPEN_CART' });
    onClose();
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal */}
        <motion.div
          className="relative w-full sm:max-w-lg max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-2xl bg-navy-900 border border-gold-400/20 shadow-2xl"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          style={{ backgroundColor: '#0D2137' }}
        >
          {/* Image header */}
          <div className="relative h-48 overflow-hidden rounded-t-3xl sm:rounded-t-2xl">
            <NoodleImage type={item.imageType} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent" style={{ background: 'linear-gradient(to top, #0D2137, transparent)' }} />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <X size={16} />
            </button>
            {item.popular && (
              <span className="absolute top-4 left-4 px-2 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: '#C41E3A', color: '#FFD700' }}>
                ⭐ Popular
              </span>
            )}
          </div>

          <div className="p-6 space-y-5">
            {/* Title */}
            <div>
              <h2 className="text-xl font-bold" style={{ color: '#F5DEB3', fontFamily: 'Georgia, serif' }}>{item.name}</h2>
              <p className="text-lg" style={{ color: '#D4AF37' }}>{item.chineseName}</p>
              <p className="text-sm mt-2 leading-relaxed" style={{ color: '#DEB887', opacity: 0.8 }}>{item.description}</p>
            </div>

            {/* Spiciness */}
            {item.spicyOptions && (
              <div>
                <h3 className="text-sm font-semibold mb-3" style={{ color: '#D4AF37' }}>🌶 Spiciness Level</h3>
                <div className="grid grid-cols-4 gap-2">
                  {SPICINESS_OPTIONS.map(level => (
                    <button
                      key={level}
                      onClick={() => setSpiciness(level)}
                      className="py-2 px-1 rounded-lg text-xs font-medium transition-all border"
                      style={{
                        backgroundColor: spiciness === level ? '#C41E3A' : 'transparent',
                        borderColor: spiciness === level ? '#C41E3A' : '#1B3A6B',
                        color: spiciness === level ? '#FFD700' : '#DEB887',
                      }}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Noodle thickness */}
            {item.noodleOptions && (
              <div>
                <h3 className="text-sm font-semibold mb-3" style={{ color: '#D4AF37' }}>🍜 Noodle Thickness</h3>
                <div className="grid grid-cols-3 gap-2">
                  {NOODLE_THICKNESS_OPTIONS.map(thickness => (
                    <button
                      key={thickness}
                      onClick={() => setNoodleThickness(thickness)}
                      className="py-2 rounded-lg text-xs font-medium transition-all border"
                      style={{
                        backgroundColor: noodleThickness === thickness ? '#1B3A6B' : 'transparent',
                        borderColor: noodleThickness === thickness ? '#D4AF37' : '#1B3A6B',
                        color: noodleThickness === thickness ? '#FFD700' : '#DEB887',
                      }}
                    >
                      {thickness}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Toppings */}
            {item.toppingOptions && (
              <div>
                <h3 className="text-sm font-semibold mb-3" style={{ color: '#D4AF37' }}>✨ Add Toppings</h3>
                <div className="space-y-2">
                  {TOPPING_OPTIONS.map(topping => {
                    const selected = selectedToppings.includes(topping.id);
                    return (
                      <button
                        key={topping.id}
                        onClick={() => toggleTopping(topping.id)}
                        className="w-full flex items-center justify-between p-3 rounded-lg transition-all border text-left"
                        style={{
                          backgroundColor: selected ? 'rgba(27, 58, 107, 0.5)' : 'rgba(27, 58, 107, 0.2)',
                          borderColor: selected ? '#D4AF37' : 'rgba(27, 58, 107, 0.5)',
                        }}
                      >
                        <span className="text-sm" style={{ color: '#F5DEB3' }}>{topping.label}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs" style={{ color: '#D4AF37' }}>+${topping.price.toFixed(2)}</span>
                          <div
                            className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
                            style={{ borderColor: selected ? '#D4AF37' : '#1B3A6B', backgroundColor: selected ? '#D4AF37' : 'transparent' }}
                          >
                            {selected && <span className="text-xs font-bold" style={{ color: '#0D2137' }}>✓</span>}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Special notes */}
            <div>
              <h3 className="text-sm font-semibold mb-2" style={{ color: '#D4AF37' }}>📝 Special Notes</h3>
              <textarea
                value={specialNotes}
                onChange={e => setSpecialNotes(e.target.value)}
                placeholder="Any allergies or special requests..."
                rows={2}
                className="w-full p-3 rounded-lg text-sm resize-none outline-none border"
                style={{
                  backgroundColor: 'rgba(27, 58, 107, 0.2)',
                  borderColor: 'rgba(27, 58, 107, 0.5)',
                  color: '#F5DEB3',
                }}
              />
            </div>

            {/* Quantity & Add to cart */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-3 rounded-xl p-1" style={{ backgroundColor: 'rgba(27, 58, 107, 0.3)' }}>
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                  style={{ backgroundColor: quantity > 1 ? '#1B3A6B' : 'transparent', color: '#D4AF37' }}
                >
                  <Minus size={14} />
                </button>
                <span className="w-8 text-center font-bold text-lg" style={{ color: '#F5DEB3' }}>{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                  style={{ backgroundColor: '#1B3A6B', color: '#D4AF37' }}
                >
                  <Plus size={14} />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90 active:scale-95"
                style={{ backgroundColor: '#C41E3A', color: '#FFD700' }}
              >
                <ShoppingCart size={16} />
                Add to Cart — ${totalPrice.toFixed(2)}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
