/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Mail, Sparkles } from 'lucide-react';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative py-12 md:py-24">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 0.4, 0],
              y: -200,
              x: Math.sin(i) * 50,
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 20,
            }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-10%',
            }}
          >
            <Heart
              size={16 + Math.random() * 24}
              className="text-rose-200 fill-rose-100"
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-md">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ y: 100, opacity: 0, scale: 0.8 }}
              className="flex flex-col items-center"
            >
              <motion.button
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className="absolute -inset-4 bg-rose-100/50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white border border-stone-200 p-12 rounded-2xl shadow-xl shadow-stone-200/50 flex flex-col items-center gap-6">
                  <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center text-rose-500">
                    <Mail size={40} strokeWidth={1.5} />
                  </div>
                  <div className="text-center">
                    <h2 className="font-display text-3xl text-stone-800 mb-2">For Mimi</h2>
                    <p className="text-stone-400 text-sm font-medium tracking-wide uppercase">Click to open your message</p>
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Sparkles className="text-amber-400 animate-pulse" size={24} />
                  </div>
                </div>
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="card"
              initial={{ y: 100, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              className="bg-white border border-stone-100 rounded-3xl shadow-2xl shadow-stone-300/40 overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400" />
              
              <div className="p-8 md:p-10">
                <header className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className="inline-block mb-4"
                  >
                    <Heart className="text-rose-500 fill-rose-500" size={32} />
                  </motion.div>
                  <h1 className="font-display text-5xl text-rose-600 mb-2">Happy Birthday, Mimi</h1>
                  <div className="w-12 h-0.5 bg-stone-200 mx-auto rounded-full" />
                </header>

                <div className="space-y-6 text-stone-700 leading-relaxed font-light">
                  <p className="text-lg font-medium text-stone-900">
                    The dearest friend in my life. Trust me, nobody can ever take your number one spot.
                  </p>
                  
                  <p>
                    You've been good, you've been kind, and yes… sometimes a little crazy 😂 — but most of all, you've always been <span className="italic font-normal text-rose-500">you</span>. And that is more than anyone could ever ask for.
                  </p>

                  <p>
                    You are a very strong, independent, and confident girl — even though sometimes you act like a little baby 😂😂. But one thing about you? You never take rubbish from anyone, and I truly admire that about you.
                  </p>

                  <div className="py-4 border-y border-stone-50">
                    <p className="text-stone-500 italic text-sm text-center">
                      Today is your special day, so let's take a moment to truly appreciate you for being you.
                    </p>
                  </div>

                  <p>
                    Happy Birthday once again to my number one friend, my gist partner, the one person I can actually cry to, the only person who knows all my exes 😅, the one person I would trust fall with — and I'm sure you will not catch me 😒 but still do it again 🙃.
                  </p>

                  <p className="text-rose-600 font-medium">
                    I pray that you continue to be as happy — even happier than you are today.
                  </p>
                </div>

                <footer className="mt-10 pt-8 border-t border-stone-100 text-center">
                  <p className="text-stone-400 text-sm mb-4">I thank God for having you in my life. 💙</p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-stone-300 hover:text-stone-500 transition-colors text-xs uppercase tracking-widest font-bold"
                  >
                    Close Letter
                  </button>
                </footer>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {isOpen && (
        <div className="fixed inset-0 pointer-events-none z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                x: (Math.random() - 0.5) * 1000,
                y: (Math.random() - 0.5) * 1000,
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              className="absolute left-1/2 top-1/2"
            >
              <Sparkles className="text-amber-300" size={Math.random() * 20} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
