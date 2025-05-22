import React from 'react';
import Image from 'next/image';
import { featuredProducts } from '@/data/products';

interface ProductsSectionProps {
    limit?: number;
    showViewAll?: boolean;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({
    limit = 3,
}) => {
    const displayProducts = featuredProducts.slice(0, limit);

    return (
        <section className="py-16 mt-[200px] bg-white" id="products">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-tajawal">منتجاتنا المميزة</h2>
                    <p className="text-gray-600 font-tajawal max-w-2xl mx-auto">
                        مجموعة مختارة من أفضل منتجاتنا بمكونات طبيعية ١٠٠٪ وطعم أصيل
                    </p>
                </div>

                {/* Product Grid - Clean Layout with Ample Space */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {displayProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
                        >
                            <div className="relative h-64 bg-light-base">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain p-4"
                                />
                                {product.isNew && (
                                    <div className="absolute top-4 right-4 bg-primary text-white py-1 px-3 rounded-full text-sm font-tajawal">
                                        جديد
                                    </div>
                                )}
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold mb-2 font-tajawal">{product.name}</h3>
                                <p className="text-gray-600 mb-4 flex-grow font-tajawal">{product.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold font-tajawal">{product.price} ريال</span>
                                    <button className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition-colors duration-300 font-tajawal">
                                        أضف للسلة
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;