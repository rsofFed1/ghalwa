"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'motion/react';

type Product = {
    id: number;
    name: string;
    description1: string;
    description2: string;
    image: string;
    textColor: string;
    slug: string;
}

function ProductSection() {
    const sectionRef = useRef<HTMLElement>(null);

    // Products data remains the same
    const products: Product[] = [
        {
            id: 1,
            name: "كرك غلوة بالهيل",
            description1: "الهيل و الكرك توأم نكهة",
            description2: "و لغلوة بصمتها الخاصة",
            image: "/product_images/karak_cardamom.webp",
            textColor: "text-[#95a55c]",
            slug: "karak-cardamom"
        },
        {
            id: 2,
            name: "كرك غلوة بالزعفران",
            description1: "النكهة الملكية",
            description2: "تجربة مُترفة باسم الزعفران",
            image: "/product_images/karak_saffron.webp",
            textColor: "text-[#ef4023]",
            slug: "karak-saffron"
        },
        {
            id: 3,
            name: "كرك غلوة سادة",
            description1: "بدون إضافة شيء",
            description2: "حافظنا على كل شيء",
            image: "/product_images/karak_plain.webp",
            textColor: "text-[#e5d2a8]",
            slug: "karak-plain"
        },
        {
            id: 4,
            name: "شاي كرك بالورد",
            description1: "بالورد المديني ومن قلب طيبة",
            description2: "عذوبة النكهة في كل رشفة",
            image: "/product_images/karak_roses.webp",
            textColor: "text-[#d23e96]",
            slug: "karak-roses"
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="py-24 bg-white overflow-hidden"
        >
            <div className="container mx-auto px-4">
                {/* Product Cards */}
                <div className="container mx-auto px-4">
                    {/* Product Cards - Stacked one below the other */}
                    <div className="max-w-4xl mx-auto space-y-16">
                        {products.map((product, index) => (
                            <ProductCard key={product.id} product={product} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

const ProductCard = ({ product, index }: { product: Product, index: number }) => {
    const productRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(productRef, {
        once: true,  
        amount: 0.1, 
        margin: "0px 0px -100px 0px" 
    });

    return (
        <motion.div
            ref={productRef}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7 }}
        >
            {/* Description 1 */}
            <motion.h2
                className={`text-xl font-bold font-tajawal text-gray-700 text-center mb-3`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.1, duration: 0.6 }}
            >
                {product.description1}
            </motion.h2>

            {/* Description 2 */}
            <motion.p
                className="text-xl font-bold font-tajawal text-gray-700 text-center mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                {product.description2}
            </motion.p>

            {/* Product Name with Colored Text */}
            <motion.p
                className={`text-lg font-tajawal font-medium ${product.textColor} text-center`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                ({product.name})
            </motion.p>

            {/* Product Image */}
            <motion.div
                className="relative w-full max-w-md aspect-square"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                whileHover={{ scale: 1.03 }}
            >
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                    priority={index === 0}
                />
            </motion.div>
        </motion.div>
    );
};

export default ProductSection;