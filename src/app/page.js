import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export default async function Home() {
    const res = await fetch('http://localhost:3000/data.json', { cache: 'no-store' });
  const products = await res.json();
  console.log(products);
  return (
     <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
         <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Collection</h1>
          <p className="text-gray-600">Explore our handcrafted artisanal jewelry</p>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>
       <ProductCard products={products}></ProductCard>
    </div>
    </div>
  );
}
