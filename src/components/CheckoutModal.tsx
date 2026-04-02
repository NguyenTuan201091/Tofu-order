'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, CheckCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface CheckoutModalProps {
  onClose: () => void;
  totalPrice: number;
}

type Step = 'table' | 'review' | 'confirm';

export default function CheckoutModal({ onClose, totalPrice }: CheckoutModalProps) {
  const { state, dispatch } = useCart();
  const [step, setStep] = useState<Step>('table');
  const [tableNumber, setTableNumber] = useState('');
  const [tableError, setTableError] = useState('');

  const tax = totalPrice * 0.1;
  const grandTotal = totalPrice + tax;

  function handleTableSubmit() {
    if (!tableNumber.trim() || isNaN(Number(tableNumber)) || Number(tableNumber) < 1) {
      setTableError('Please enter a valid table number');
      return;
    }
    setTableError('');
    setStep('review');
  }

  function handlePlaceOrder() {
    setStep('confirm');
    dispatch({ type: 'CLEAR_CART' });
    setTimeout(() => {
      dispatch({ type: 'CLOSE_CART' });
      onClose();
    }, 3000);
  }

  return (
    <motion.div
      className="fixed inset-0 z-60 flex items-end sm:items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={step !== 'confirm' ? onClose : undefined}
      />

      {/* Modal */}
      <motion.div
        className="relative w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl overflow-hidden"
        style={{ backgroundColor: '#0D2137', border: '1px solid rgba(212, 175, 55, 0.2)' }}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
          <div className="flex items-center gap-3">
            {/* Step indicators */}
            {(['table', 'review', 'confirm'] as Step[]).map((s, i) => (
              <div key={s} className="flex items-center gap-1">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    backgroundColor: step === s ? '#C41E3A' : (
                      ['table', 'review', 'confirm'].indexOf(step) > i ? '#D4AF37' : 'rgba(27, 58, 107, 0.5)'
                    ),
                    color: step === s ? '#FFD700' : (
                      ['table', 'review', 'confirm'].indexOf(step) > i ? '#0D2137' : '#DEB887'
                    ),
                  }}
                >
                  {['table', 'review', 'confirm'].indexOf(step) > i ? '✓' : i + 1}
                </div>
                {i < 2 && <div className="w-4 h-px" style={{ backgroundColor: 'rgba(212, 175, 55, 0.3)' }} />}
              </div>
            ))}
          </div>
          {step !== 'confirm' && (
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(27, 58, 107, 0.5)' }}
            >
              <X size={14} style={{ color: '#D4AF37' }} />
            </button>
          )}
        </div>

        <div className="p-6">
          <AnimatePresence mode="wait">
            {/* Step 1: Table Number */}
            {step === 'table' && (
              <motion.div
                key="table"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <div>
                  <h2 className="text-xl font-bold" style={{ color: '#F5DEB3', fontFamily: 'Georgia, serif' }}>
                    Table Number
                  </h2>
                  <p className="text-sm mt-1" style={{ color: '#DEB887', opacity: 0.7 }}>
                    Please enter your table number so we can bring your order
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium" style={{ color: '#D4AF37' }}>
                    Table No.
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={tableNumber}
                    onChange={e => { setTableNumber(e.target.value); setTableError(''); }}
                    placeholder="e.g. 12"
                    className="w-full p-4 rounded-xl text-2xl font-bold text-center outline-none border"
                    style={{
                      backgroundColor: 'rgba(27, 58, 107, 0.2)',
                      borderColor: tableError ? '#C41E3A' : 'rgba(27, 58, 107, 0.5)',
                      color: '#F5DEB3',
                    }}
                  />
                  {tableError && <p className="text-xs" style={{ color: '#C41E3A' }}>{tableError}</p>}
                </div>

                <button
                  onClick={handleTableSubmit}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all hover:opacity-90 active:scale-95"
                  style={{ backgroundColor: '#C41E3A', color: '#FFD700' }}
                >
                  Continue
                  <ChevronRight size={18} />
                </button>
              </motion.div>
            )}

            {/* Step 2: Order Review */}
            {step === 'review' && (
              <motion.div
                key="review"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <div>
                  <h2 className="text-xl font-bold" style={{ color: '#F5DEB3', fontFamily: 'Georgia, serif' }}>
                    Review Order
                  </h2>
                  <p className="text-sm mt-1" style={{ color: '#D4AF37' }}>
                    Table {tableNumber}
                  </p>
                </div>

                <div className="space-y-2 max-h-48 overflow-y-auto scrollbar-hide">
                  {state.items.map(item => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center py-2 border-b"
                      style={{ borderColor: 'rgba(212, 175, 55, 0.1)' }}
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate" style={{ color: '#F5DEB3' }}>
                          {item.quantity}× {item.menuItem.name}
                        </p>
                        <p className="text-xs" style={{ color: '#DEB887', opacity: 0.6 }}>
                          {[item.spiciness, item.noodleThickness].filter(Boolean).join(' · ')}
                        </p>
                      </div>
                      <span className="text-sm font-medium ml-2" style={{ color: '#D4AF37' }}>
                        ${item.totalPrice.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-sm" style={{ color: '#DEB887' }}>
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm" style={{ color: '#DEB887', opacity: 0.7 }}>
                    <span>Tax (10%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t" style={{ color: '#D4AF37', borderColor: 'rgba(212, 175, 55, 0.2)', fontFamily: 'Georgia, serif' }}>
                    <span>Total</span>
                    <span>${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep('table')}
                    className="flex-1 py-3 rounded-xl text-sm font-medium border transition-all hover:opacity-80"
                    style={{ borderColor: 'rgba(212, 175, 55, 0.3)', color: '#DEB887' }}
                  >
                    Back
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    className="flex-2 flex-grow-[2] py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90 active:scale-95"
                    style={{ backgroundColor: '#C41E3A', color: '#FFD700' }}
                  >
                    Place Order
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Confirmation */}
            {step === 'confirm' && (
              <motion.div
                key="confirm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-8 gap-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
                >
                  <CheckCircle size={72} style={{ color: '#D4AF37' }} />
                </motion.div>
                <div>
                  <h2 className="text-2xl font-bold" style={{ color: '#F5DEB3', fontFamily: 'Georgia, serif' }}>
                    Order Placed!
                  </h2>
                  <p className="text-base mt-1" style={{ color: '#D4AF37' }}>谢谢 · Thank You</p>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#DEB887', opacity: 0.8 }}>
                  Your order for Table {tableNumber} has been received. Our kitchen is preparing your hand-pulled noodles with care.
                </p>
                <div className="px-4 py-3 rounded-xl" style={{ backgroundColor: 'rgba(27, 58, 107, 0.3)' }}>
                  <p className="text-xs" style={{ color: '#DEB887', opacity: 0.7 }}>Order total</p>
                  <p className="text-2xl font-bold" style={{ color: '#D4AF37', fontFamily: 'Georgia, serif' }}>
                    ${grandTotal.toFixed(2)}
                  </p>
                </div>
                <p className="text-xs" style={{ color: '#DEB887', opacity: 0.5 }}>
                  This window will close automatically...
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
