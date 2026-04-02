'use client';

import { motion } from 'framer-motion';
import { QrCode, ChevronRight, Utensils } from 'lucide-react';
import Link from 'next/link';

function ChineseOrnament({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" stroke="#D4AF37" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
      <circle cx="50" cy="50" r="35" stroke="#D4AF37" strokeWidth="0.5" opacity="0.2" />
      {/* Four-petal flower */}
      <path d="M50 15 Q65 50 50 85 Q35 50 50 15 Z" fill="#D4AF37" fillOpacity="0.12" />
      <path d="M15 50 Q50 65 85 50 Q50 35 15 50 Z" fill="#D4AF37" fillOpacity="0.12" />
      {/* Center diamond */}
      <path d="M50 40 L60 50 L50 60 L40 50 Z" fill="#D4AF37" fillOpacity="0.25" />
      {/* Corner dots */}
      <circle cx="50" cy="10" r="2" fill="#D4AF37" fillOpacity="0.4" />
      <circle cx="90" cy="50" r="2" fill="#D4AF37" fillOpacity="0.4" />
      <circle cx="50" cy="90" r="2" fill="#D4AF37" fillOpacity="0.4" />
      <circle cx="10" cy="50" r="2" fill="#D4AF37" fillOpacity="0.4" />
    </svg>
  );
}

function CloudPattern() {
  return (
    <svg viewBox="0 0 400 80" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[0, 1, 2, 3, 4].map(i => (
        <g key={i} transform={`translate(${i * 80}, 0)`}>
          <path
            d={`M10 60 Q20 40 30 50 Q35 30 50 40 Q60 20 70 40 Q78 30 80 50`}
            stroke="#D4AF37"
            strokeWidth="1"
            fill="none"
            opacity="0.2"
          />
        </g>
      ))}
    </svg>
  );
}

export default function HomeScreen() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: '#060D1A' }}
    >
      {/* Background Chinese pattern */}
      <div className="absolute inset-0 chinese-pattern opacity-50" />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(139, 0, 0, 0.15) 0%, transparent 70%)' }}
      />

      {/* Top ornament */}
      <motion.div
        className="absolute top-0 left-0 right-0 flex justify-center pt-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <CloudPattern />
      </motion.div>

      {/* Corner ornaments */}
      <ChineseOrnament className="absolute top-4 left-4 w-20 h-20 opacity-40" />
      <ChineseOrnament className="absolute top-4 right-4 w-20 h-20 opacity-40" />
      <ChineseOrnament className="absolute bottom-4 left-4 w-20 h-20 opacity-40" />
      <ChineseOrnament className="absolute bottom-4 right-4 w-20 h-20 opacity-40" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-sm mx-auto gap-8">

        {/* Restaurant emblem */}
        <motion.div
          className="relative"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          {/* Outer ring */}
          <div
            className="w-32 h-32 rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #C41E3A, #8B0000)',
              boxShadow: '0 0 40px rgba(196, 30, 58, 0.4), 0 0 80px rgba(212, 175, 55, 0.1)',
              border: '2px solid rgba(212, 175, 55, 0.4)',
            }}
          >
            <div className="text-center">
              <div className="text-4xl leading-none">🍜</div>
              <div className="text-xs mt-1 font-bold" style={{ color: '#FFD700' }}>拉面</div>
            </div>
          </div>

          {/* Rotating ring decoration */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ border: '1px dashed rgba(212, 175, 55, 0.3)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>

        {/* Restaurant name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {/* Chinese name */}
          <div className="relative mb-2">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, #D4AF37)' }} />
              <span className="text-sm tracking-widest" style={{ color: '#D4AF37' }}>正宗手工</span>
              <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, #D4AF37)' }} />
            </div>
            <h1
              className="text-5xl font-bold tracking-wider text-shadow-gold"
              style={{ color: '#D4AF37', fontFamily: 'Georgia, serif', letterSpacing: '0.2em' }}
            >
              豆腐拉面
            </h1>
          </div>

          {/* English name */}
          <h2 className="text-xl font-light tracking-[0.3em] uppercase" style={{ color: '#F5DEB3' }}>
            Tofu La Mian
          </h2>
          <p className="text-xs mt-2 tracking-widest" style={{ color: '#DEB887', opacity: 0.6 }}>
            HAND-PULLED NOODLES
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="flex items-center gap-4 w-full"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="h-px flex-1" style={{ backgroundColor: 'rgba(212, 175, 55, 0.3)' }} />
          <span className="text-lg" style={{ color: '#D4AF37' }}>✦</span>
          <div className="h-px flex-1" style={{ backgroundColor: 'rgba(212, 175, 55, 0.3)' }} />
        </motion.div>

        {/* QR CTA section */}
        <motion.div
          className="w-full space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {/* QR icon display */}
          <div
            className="flex items-center justify-center gap-4 p-5 rounded-2xl mx-auto"
            style={{
              backgroundColor: 'rgba(27, 58, 107, 0.3)',
              border: '1px solid rgba(212, 175, 55, 0.2)',
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <QrCode size={48} style={{ color: '#D4AF37' }} />
            </motion.div>
            <div className="text-left">
              <p className="text-sm font-semibold" style={{ color: '#F5DEB3' }}>Scan QR Code</p>
              <p className="text-xs" style={{ color: '#DEB887', opacity: 0.7 }}>or tap below to browse</p>
            </div>
          </div>

          {/* Browse menu button */}
          <Link href="/menu" className="block">
            <motion.div
              className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl font-bold text-base"
              style={{
                background: 'linear-gradient(135deg, #C41E3A, #8B0000)',
                color: '#FFD700',
                boxShadow: '0 4px 24px rgba(196, 30, 58, 0.4)',
              }}
              whileHover={{ scale: 1.02, boxShadow: '0 6px 32px rgba(196, 30, 58, 0.5)' }}
              whileTap={{ scale: 0.98 }}
            >
              <Utensils size={20} />
              Browse Menu & Order
              <ChevronRight size={18} />
            </motion.div>
          </Link>

          {/* Info badges */}
          <div className="flex justify-center gap-4">
            {['Hand-Pulled Daily', 'Fresh Broth', 'Authentic Recipe'].map((badge, i) => (
              <motion.span
                key={badge}
                className="text-xs px-2 py-1 rounded-full"
                style={{
                  backgroundColor: 'rgba(27, 58, 107, 0.3)',
                  color: '#DEB887',
                  border: '1px solid rgba(212, 175, 55, 0.15)',
                  opacity: 0.8,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom cloud pattern */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 flex justify-center pb-4 rotate-180"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <CloudPattern />
      </motion.div>
    </div>
  );
}
