import Image from "next/image";

const ProductCard =  ({products}) => {
  // Data fetch kora hochche
console.log(products);

  return (
   
       

  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col"
            >
              {/* Product Image Area */}
              <div className="relative h-64 bg-gray-200">
                <Image
                  src={product.image_url}
                  width={100}
                  height={100}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    product.stock_status === 'In Stock' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {product.stock_status}
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
                    {product.category}
                  </span>
                  <span className="text-lg font-bold text-gray-900">
                    {product.price} {product.currency}
                  </span>
                </div>

                <h2 className="text-xl font-semibold text-gray-800 mb-2 leading-tight">
                  {product.title}
                </h2>

                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {product.description}
                </p>

                {/* Materials Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.materials.map((material, index) => (
                    <span key={index} className="text-[10px] bg-gray-100 text-gray-500 px-2 py-1 rounded">
                      {material}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button className="mt-auto w-full bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-indigo-600 transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
     
  );
};

export default ProductCard;