/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShoppingBag,
  Phone,
  Instagram,
  Facebook,
  MessageCircle,
  X,
  Plus,
  Minus,
  CheckCircle2,
  Info,
  Coffee,
  Milk,
  UtensilsCrossed
} from 'lucide-react';
import { PRODUCTS, useCart, Product } from './store';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = ({ onOpenCart }: { onOpenCart: () => void }) => {
  const cartItems = useCart((state) => state.items);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-brand-orange/20">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-brown rounded-full flex items-center justify-center text-white font-bold text-xs text-center leading-tight">
           <img src="\img\logogood.jpeg" alt="" />
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">Good Goûter</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#produits" className="text-sm font-medium hover:text-brand-orange transition-colors">Produits</a>
          <a href="#services" className="text-sm font-medium hover:text-brand-orange transition-colors">Services</a>
          <button
            onClick={onOpenCart}
            className="relative p-2 hover:bg-brand-orange/10 rounded-full transition-colors"
          >
            <ShoppingBag className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-orange text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 px-4 overflow-hidden">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-bold uppercase tracking-wider">
          <CheckCircle2 className="w-4 h-4" />
          Made in Côte d'Ivoire
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-brand-brown">
          Des Céréales <br />
          <span className="text-brand-orange italic">Gourmandes</span>
        </h1>
        <p className="text-lg text-brand-brown/70 max-w-md leading-relaxed">
          Parfaites pour se faire plaisir à tout moment. Découvrez le goût authentique de nos céréales artisanales.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#produits"
            className="px-8 py-4 bg-brand-brown text-white rounded-full font-bold hover:bg-brand-brown/90 transition-all shadow-lg hover:shadow-brand-brown/20"
          >
            Commander maintenant
          </a>
          <a
            href="https://wa.me/2250748629148"
            target="_blank"
            className="px-8 py-4 bg-white border-2 border-brand-brown text-brand-brown rounded-full font-bold hover:bg-brand-brown hover:text-white transition-all"
          >
            Nous contacter
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute inset-0 bg-brand-orange/20 rounded-full blur-3xl -z-10 transform translate-x-10 translate-y-10" />
        <img
          src='img\good7.jpeg'
          alt="Cereal Bowl"
          className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-brand-orange/10 max-w-[200px]">
          <p className="text-xs font-bold text-brand-orange uppercase mb-1">Nouveau</p>
          <p className="text-sm font-medium">Saveur Cacahuète disponible !</p>
        </div>
      </motion.div>
    </div>
  </section>
);

const ProductCard = ({ product }: { product: Product }) => {
  const addItem = useCart((state) => state.addItem);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-brand-orange/5"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-brand-orange text-white px-3 py-1 rounded-full text-xs font-bold">
          {product.weight}
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-brand-brown">{product.name}</h3>
          <p className="text-sm text-brand-brown/60 italic">Saveur {product.flavor}</p>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-brand-brown/70 line-clamp-2">
            {product.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {product.ingredients.map((ing, i) => (
              <span key={i} className="text-[10px] px-2 py-0.5 bg-brand-cream rounded-md border border-brand-orange/10 text-brand-brown/70">
                {ing}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-brand-brown">{product.price} FCFA</span>
          <button
            onClick={() => addItem(product)}
            className="p-3 bg-brand-orange text-white rounded-full hover:bg-brand-accent transition-colors shadow-lg shadow-brand-orange/20"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => (
  <section id="services" className="py-24 bg-brand-brown text-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">Nos Services & Conseils</h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Plus que de simples céréales, nous vous accompagnons pour des moments gourmands inoubliables.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <UtensilsCrossed className="w-8 h-8" />,
            title: "Conseil de Consommation",
            desc: "À consommer tel quel ou accompagné de lait. Peut également être dégusté avec de l'eau. Idéal au petit-déjeuner ou au goûter."
          },
          {
            icon: <Info className="w-8 h-8" />,
            title: "Conservation Optimale",
            desc: "À conserver dans un endroit sec, frais ou à température ambiante pour garder tout le croustillant."
          },
          {
            icon: <MessageCircle className="w-8 h-8" />,
            title: "Assistance Directe",
            desc: "Besoin d'aide ou d'une commande spéciale ? Contactez notre équipe via WhatsApp ou téléphone 7j/7."
          }
        ].map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className="w-16 h-16 bg-brand-orange rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-orange/20">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-white/60 leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CartDrawer = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const { items, updateQuantity, removeItem, total, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);

  const handleCheckout = () => {
    // Simulate order
    const message = `Bonjour Good Goûter ! Je souhaite passer une commande :\n\n${items.map(item => `- ${item.name} x${item.quantity}`).join('\n')}\n\nTotal : ${total()} FCFA`;
    window.open(`https://wa.me/2250748629148?text=${encodeURIComponent(message)}`, '_blank');
    setIsOrdered(true);
    setTimeout(() => {
      clearCart();
      setIsOrdered(false);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Votre Panier
              </h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-10 h-10 text-gray-300" />
                  </div>
                  <p className="text-gray-500">Votre panier est vide</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img src={item.image} className="w-20 h-20 rounded-xl object-cover" alt={item.name} />
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between">
                        <h4 className="font-bold text-sm">{item.name}</h4>
                        <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-gray-500">{item.price} FCFA</p>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-50"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-50"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t bg-gray-50 space-y-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>{total()} FCFA</span>
                </div>
                <button
                  onClick={handleCheckout}
                  disabled={isOrdered}
                  className={cn(
                    "w-full py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2",
                    isOrdered ? "bg-green-500 text-white" : "bg-brand-orange text-white hover:bg-brand-accent"
                  )}
                >
                  {isOrdered ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Commande envoyée !
                    </>
                  ) : (
                    <>
                      Commander via WhatsApp
                      <MessageCircle className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans">
      <Navbar onOpenCart={() => setIsCartOpen(true)} />

      <main>
        <Hero />
        <section id="produits">
          <div className="section-title">
            <h2>Nos Céréales Artisanales</h2>
            <p>Découvrez le goût authentique de nos créations faites avec amour.</p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-brand-orange">
              <Coffee className="w-6 h-5" /> Saveur Chocolat
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-brand-accent">
              <Milk className="w-5 h-5" /> Saveur Cacahuète
            </div>
          </div>

          <div className="products-grid">
            {PRODUCTS.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
        </section>
        

        <Services />

       <section className="py-24 px-4 bg-brand-cream flex-center">
  <div className="help-card fade-in-view">
    {/* Titre & Texte */}
    <div className="space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold text-brand-brown font-display">
        Besoin d'aide ?
      </h2>
      <p className="text-brand-brown/70 max-w-xl mx-auto text-lg leading-relaxed">
        Notre équipe d'assistance est à votre écoute pour toute question sur nos produits ou vos commandes.
      </p>
    </div>

    {/* Boutons d'action centrés */}
    <div className="flex flex-col items-center justify-center gap-8">
      
      {/* Bouton Téléphone */}
      <a href="tel:+2250748629148" className="contact-pill group">
        <div className="p-2 bg-brand-orange/10 rounded-lg group-hover:bg-brand-orange group-hover:text-white transition-colors">
          <Phone className="w-6 h-6 text-brand-orange group-hover:text-white" />
        </div>
        <span className="font-bold text-lg text-brand-brown">
          (+225) 07 48 62 91 48
        </span>
      </a>

      {/* Réseaux Sociaux */}
      <div className="flex items-center gap-6">
        <a href="https://www.instagram.com/good.gouter?igsh=MW5mYXEzOWFrczE4YQ==" className="social-button"><Instagram className="w-6 h-6" /></a>
        <a href="https://wa.me/2250748629148" className="social-button"><MessageCircle className="w-6 h-6" /></a>
      </div>
      
    </div>
  </div>
</section>
      </main>

      <footer className="bg-white py-12 border-t border-brand-orange/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-brand-brown rounded-full flex items-center justify-center text-white font-bold text-xs text-center leading-tight">
                        <img src="\img\logogood.jpeg" alt="" />

            </div>
            <div>
              <p className="font-bold text-lg">Good Goûter</p>
              <p className="text-xs text-brand-brown/50">© 2026 Tous droits réservés.</p>
            </div>
          </div>

          <div className="flex gap-8 text-sm font-medium text-brand-brown/60">
            <a href="#" className="hover:text-brand-orange transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Politique de Confidentialité</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-2 text-sm font-bold text-brand-orange">
            <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
            Disponible en Côte d'Ivoire
          </div>
        </div>
      </footer>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
