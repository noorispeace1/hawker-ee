"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const ProductCard = ({ products }) => {
  // Container animation: Ekta ekta kore card ashar jonno
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  // Card entrance animation
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="bg-[#FCFAFA] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Handicraft Themed Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-700 font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
            Tradition meets Modernity
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 italic">
            Artisanal Masterpieces
          </h2>
          <div className="h-1 w-20 bg-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Every piece is handcrafted by local artisans using sustainable materials. 
            Celebrate the beauty of imperfection and the soul of Bangladeshi heritage.
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-white border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              {/* Product Image */}
              <div className="relative h-[400px] overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full"
                >
                  <Image
                    src={product.image_url}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:brightness-95"
                  />
                </motion.div>
                
                {/* Custom Stock Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-800 text-[10px] font-bold px-4 py-2 rounded-full shadow-sm tracking-widest uppercase">
                    {product.stock_status}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-amber-700 text-xs font-semibold uppercase tracking-tighter bg-amber-50 px-3 py-1 rounded-md">
                    {product.category}
                  </span>
                  <p className="text-xl font-medium text-slate-900">
                    ৳{product.price.toLocaleString()}
                  </p>
                </div>

                <h3 className="text-2xl font-serif text-slate-800 mb-3 group-hover:text-amber-700 transition-colors">
                  {product.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-6">
                  {product.description}
                </p>

                {/* Materials with Icon Vibe */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.materials.map((m, i) => (
                    <span key={i} className="text-[10px] text-slate-400 border border-slate-200 px-3 py-1 rounded-full italic">
                      # {m}
                    </span>
                  ))}
                </div>

                {/* Handicraft Button Design */}
                <Link href={`/product/${product.id}`}>
                <motion.button 
                  whileTap={{ scale: 0.98 }}
                  className="mt-auto w-full group-hover:bg-amber-700 bg-slate-900 text-white py-4 rounded-xl font-bold tracking-widest uppercase text-xs transition-all duration-300 flex items-center justify-center gap-2"
                >
View Details
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
              
                </motion.button>
                  </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCard;