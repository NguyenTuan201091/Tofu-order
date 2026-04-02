'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import CheckoutModal from './CheckoutModal';

export default function CartSidebar() {
  const { state, dispatch, totalItems, totalPrice } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <>
      <AnimatePresence>
        {state.isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => dispatch({ type: 'CLOSE_CART' })}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed right-0 top-0 bottom-0 z-50 w-full sm:w-96 flex flex-col shadow-2xl"
              style={{ backgroundColor: '#0D2137', borderLeft: '1px solid rgba(212, 175, 55, 0.2)' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
                <div>
                  <h2 className="text-lg font-bold" style={{ color: '#F5DEB3', fontFamily: 'Georgia, serif' }}>
                    Your Order
                  </h2>
                  <p className="text-xs" style={{ color: '#D4AF37' }}>
                    {totalItems} {totalItems === 1 ? 'item' : 'items'}
                  </p>
                </div>
                <button
                  onClick={() => dispatch({ type: 'CLOSE_CART' })}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                  style={{ backgroundColor: 'rgba(27, 58, 107, 0.5)' }}
                >
                  <X size={16} style={{ color: '#D4AF37' }} />
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide">
                {state.items.length === 0 ? (
                  <motion.div
                    className="flex flex-col items-center justify-center h-full gap-4 py-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="text-6xl opacity-30">🥢</div>
                    <p className="text-center" style={{ color: '#DEB887', opacity: 0.6 }}>
                      Your cart is empty
                    </p>
                    <p className="text-xs text-center" style={{ color: '#DEB887', opacity: 0.4 }}>
                      Add some delicious dishes to get started
                    </p>
                  </motion.div>
                ) : (
                  <AnimatePresence>
                    {state.items.map(cartItem => (
                      <motion.div
                        key={cartItem.id}
                        className="rounded-xl p-3 border"
                        style={{
                          backgroundColor: 'rgba(27, 58, 107, 0.2)',
                          borderColor: 'rgba(212, 175, 55, 0.1)',
                        }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        layout
                      >
                        <div className="flex justify-between items-start gap-2">
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium leading-tight truncate" style={{ color: '#F5DEB3' }}>
                              {cartItem.menuItem.name}
                            </h4>
                            <p className="text-xs mt-0.5" style={{ color: '#D4AF37' }}>
                              {cartItem.menuItem.chineseName}
                            </p>
                            {/* Options */}
                            <div className="flex flex-wrap gap-1 mt-1.5">
                              {cartItem.spiciness && (
                                <span className="text-xs px-1.5 py-0.5 rounded" style={{ backgroundColor: 'rgba(196, 30, 58, 0.3)', color: '#DEB887' }}>
                                  🌶 {cartItem.spiciness}
                                </span>
                              )}
                              {cartItem.noodleThickness && (
                                <span className="text-xs px-1.5 py-0.5 rounded" style={{ backgroundColor: 'rgba(27, 58, 107, 0.5)', color: '#DEB887' }}>
                                  {cartItem.noodleThickness}
                                </span>
                              )}
                              {cartItem.toppings && cartItem.toppings.length > 0 && (
                                <span className="text-xs px-1.5 py-0.5 rounded" style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)', color: '#DEB887' }}>
                                  +{cartItem.toppings.length} topping{cartItem.toppings.length > 1 ? 's' : ''}
                                </span>
                              )}
                            </div>
                          </div>
                          <button
                            onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: cartItem.id })}
                            className="p-1 rounded opacity-50 hover:opacity-100 transition-opacity flex-shrink-0"
                          >
                            <Trash2 size={14} style={{ color: '#C41E3A' }} />
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          {/* Quantity controls */}
                          <div className="flex items-center gap-2 rounded-lg p-0.5" style={{ backgroundColor: 'rgba(27, 58, 107, 0.4)' }}>
                            <button
                              onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: cartItem.id, quantity: cartItem.quantity - 1 } })}
                              className="w-7 h-7 rounded flex items-center justify-center transition-colors"
                              style={{ backgroundColor: 'rgba(27, 58, 107, 0.5)' }}
                            >
                              <Minus size={12} style={{ color: '#D4AF37' }} />
                            </button>
                            <span className="w-6 text-center text-sm font-bold" style={{ color: '#F5DEB3' }}>
                              {cartItem.quantity}
                            </span>
                            <button
                              onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: cartItem.id, quantity: cartItem.quantity + 1 } })}
                              className="w-7 h-7 rounded flex items-center justify-center transition-colors"
                              style={{ backgroundColor: 'rgba(27, 58, 107, 0.5)' }}
                            >
                              <Plus size={12} style={{ color: '#D4AF37' }} />
                            </button>
                          </div>

                          <span className="font-bold text-sm" style={{ color: '#D4AF37', fontFamily: 'Georgia, serif' }}>
                            ${cartItem.totalPrice.toFixed(2)}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                )}
              </div>

              {/* Footer */}
              {state.items.length > 0 && (
                <div className="p-5 border-t space-y-4" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
                  {/* Subtotal */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm" style={{ color: '#DEB887' }}>
                      <span>Subtotal</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm" style={{ color: '#DEB887', opacity: 0.7 }}>
                      <span>Tax (10%)</span>
                      <span>${(totalPrice * 0.1).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold pt-2 border-t text-base" style={{ color: '#F5DEB3', borderColor: 'rgba(212, 175, 55, 0.2)' }}>
                      <span>Total</span>
                      <span style={{ color: '#D4AF37' }}>${(totalPrice * 1.1).toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowCheckout(true)}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base transition-all hover:opacity-90 active:scale-95"
                    style={{ backgroundColor: '#C41E3A', color: '#FFD700' }}
                  >
                    <ShoppingBag size={18} />
                    Proceed to Checkout
                  </button>

                  <button
                    onClick={() => dispatch({ type: 'CLEAR_CART' })}
                    className="w-full text-center text-xs py-1 transition-opacity hover:opacity-70"
                    style={{ color: '#DEB887', opacity: 0.5 }}
                  >
                    Clear cart
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {showCheckout && (
        <CheckoutModal
          onClose={() => setShowCheckout(false)}
          totalPrice={totalPrice}
        />
      )}
    </>
  );
}
