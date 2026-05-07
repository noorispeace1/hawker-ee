"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineShoppingBag, HiOutlineChevronRight, HiStar, HiOutlineTruck } from 'react-icons/hi';
import { MdVerifiedUser } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const ProductIDpage = () => {
    const params = useParams();
    
    const productid = params?.productid?.toUpperCase() || params?.id?.toUpperCase(); 

    const products = [
        { "id": "PROD-001", "title": "Bohemian Fabric-Wrapped Bangle Set", "description": "Handcrafted vibrant fabric-wrapped bangles featuring intricate mirror work and long decorative latkans with seashell accents.", "price": 850, "currency": "BDT", "category": "Bangles", "image_url": "https://i.ibb.co.com/whcx46Jp/684644111-122287999880204457-6111292036567291737-n.jpg", "stock_status": "In Stock", "materials": ["Cotton Fabric", "Mirror", "Seashells"], "colors": ["Pink", "Green", "Yellow"] },
        { "id": "PROD-002", "title": "Hand-Painted Terracotta & Thread Necklace", "description": "An elegant ethnic necklace combining hand-painted clay pendants with soft thread beads. Perfect for traditional sarees like Jamdani.", "price": 1250, "currency": "BDT", "category": "Necklace", "image_url": "https://i.ibb.co.com/h1RzWTXD/684420745-122287999814204457-207897249284931995-n.jpg", "stock_status": "Limited Edition", "materials": ["Terracotta", "Silk Thread", "Beads"], "colors": ["Multicolor", "Earth Tone"] },
        { "id": "PROD-003", "title": "Maroon Velvet Kundan Studs", "description": "Sophisticated square-shaped stud earrings wrapped in premium maroon velvet, adorned with Kundan-style stonework and a small silver jhumka drop.", "price": 450, "currency": "BDT", "category": "Earrings", "image_url": "https://i.ibb.co.com/jkjDM3N4/685105659-122287999772204457-1734105161749088942-n.jpg", "stock_status": "In Stock", "materials": ["Velvet", "Kundan Stones", "Alloy Metal"], "colors": ["Maroon", "Silver"] },
        { "id": "PROD-004", "title": "Artisanal Purple Patchwork Necklace", "description": "A unique statement piece featuring rectangular purple fabric patches with white kantha stitch detailing and authentic cowrie shells.", "price": 950, "currency": "BDT", "category": "Necklace", "image_url": "https://i.ibb.co.com/qFc9WC11/684278219-122287999616204457-1066792964808473707-n.jpg", "stock_status": "In Stock", "materials": ["Cotton Fabric", "Cowrie Shells", "Thread"], "colors": ["Purple", "White"] },
        { "id": "PROD-005", "title": "Vibrant Pom-Pom Festive Mala", "description": "Playful and colorful long necklace made with soft woolen pom-poms and golden bead spacers. Adds a pop of color to any outfit.", "price": 600, "currency": "BDT", "category": "Necklace", "image_url": "https://i.ibb.co.com/kgfVsDhW/681433691-122287983662204457-7194457516947770095-n.jpg", "stock_status": "In Stock", "materials": ["Woolen Yarn", "Artificial Beads"], "colors": ["Red", "Blue", "Yellow", "Pink"] },
        { "id": "PROD-006", "title": "Minimalist Black Bead Long Chain", "description": "Timeless long-length necklace featuring matte black beads with occasional metallic gold accents. Ideal for both office and ethnic wear.", "price": 550, "currency": "BDT", "category": "Jewelry", "image_url": "https://i.ibb.co.com/ZzNN3Gxw/682462335-122287999718204457-7238079996800027943-n.jpg", "stock_status": "In Stock", "materials": ["Polished Beads", "Metallic Wire"], "colors": ["Black", "Gold"] }
    ];

    const product = products.find(p => p.id === productid);

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
                <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
                <Link href="/" className="px-6 py-2 bg-black text-white rounded-xl">Back to Collection</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FDFDFD] text-[#1D1D1F] pb-20">
            <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-widest">
                <Link href="/" className="hover:text-black transition-colors uppercase">Collection</Link> 
                <HiOutlineChevronRight size={12} /> 
                <span className="text-black">{product.category}</span>
            </nav>

            <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:col-span-7"
                >
                    <div className="sticky top-10 aspect-[4/5] relative overflow-hidden rounded-[2.5rem] bg-[#F5F5F7] shadow-sm border border-gray-100">
                        <Image
                            src={product.image_url} 
                            alt={product.title}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            className="object-cover transition-transform duration-1000 hover:scale-105"
                        />
                        <div className="absolute top-8 left-8">
                            <span className="px-4 py-2 bg-white/80 backdrop-blur-xl border border-white/40 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                                {product.stock_status}
                            </span>
                        </div>
                    </div>
                </motion.div>

                <div className="lg:col-span-5 flex flex-col pt-4">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold text-indigo-600 uppercase tracking-[0.2em]">
                                {product.category}
                            </span>
                            <div className="flex items-center gap-1 text-orange-400">
                                <HiStar size={16} />
                                <span className="text-sm font-bold text-black mt-0.5">4.9</span>
                            </div>
                        </div>
                        
                        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-6">
                            {product.title}
                        </h1>

                        <div className="mb-8">
                            <p className="text-3xl font-medium text-gray-900 tracking-tighter">
                                {product.price} <span className="text-xl text-gray-400">{product.currency}</span>
                            </p>
                        </div>

                        <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md font-light">
                            {product.description}
                        </p>

                        <div className="grid grid-cols-2 gap-8 py-8 border-y border-gray-100 mb-10">
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Composition</h4>
                                <div className="flex flex-wrap gap-1.5">
                                    {product.materials.map((m, idx) => (
                                        <span key={idx} className="text-sm font-medium text-gray-700 bg-gray-50 px-2 py-1 rounded-md">{m}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Palette</h4>
                                <div className="flex flex-wrap gap-1.5">
                                    {product.colors.map((c, idx) => (
                                        <span key={idx} className="text-sm font-medium text-gray-700 bg-gray-50 px-2 py-1 rounded-md">{c}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <motion.button 
                                whileTap={{ scale: 0.97 }}
                                className="w-full h-16 bg-[#0071E3] text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-blue-100 hover:bg-[#0077ED] transition-all"
                            >
                                <HiOutlineShoppingBag size={22} />
                                Add to Bag
                            </motion.button>
                            <motion.button 
                                whileTap={{ scale: 0.97 }}
                                className="w-full h-16 bg-white border-2 border-gray-100 text-black rounded-2xl font-bold hover:border-black transition-all"
                            >
                                Express Checkout
                            </motion.button>
                        </div>

                        <div className="mt-12 space-y-5">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-green-50 rounded-xl text-green-600">
                                    <HiOutlineTruck size={20} />
                                </div>
                                <div>
                                    <h5 className="text-sm font-bold">Complimentary Delivery</h5>
                                    <p className="text-xs text-gray-400">Arrives in 2-4 business days within Bangladesh.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                                    <MdVerifiedUser size={20} />
                                </div>
                                <div>
                                    <h5 className="text-sm font-bold">Quality Assured</h5>
                                    <p className="text-xs text-gray-400">Each piece is inspected for artisanal excellence.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default ProductIDpage;