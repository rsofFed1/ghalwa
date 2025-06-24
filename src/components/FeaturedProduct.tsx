"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

function FeaturedProduct() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    return (
        <section
            ref={sectionRef}
            className="py-6 md:py-10 bg-zinc-50 overflow-hidden relative"
        >
            <div className="container mx-auto px-4">
                {/* Text content with animation */}
                <motion.div
                    className="max-w-4xl mx-auto text-center mb-10 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.h2
                        className="text-xl md:text-2xl lg:text-3xl font-readex-pro text-gray-700 mb-1 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                    >
                        <span className="text-[#fe9a00]">يقولون الظرف للمجرّب</span>
                    </motion.h2>
                    <motion.h2
                        className="text-xl md:text-2xl lg:text-3xl font-readex-pro text-gray-700 mb-5 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                    >
                        <span className="text-[#fe9a00]">والبوكس</span>
                        <span className="text-[#cc0000]"> للعاشق</span>
                    </motion.h2>
                </motion.div>

                {/* Image with animation */}
                <motion.div
                    className="relative rounded-lg overflow-hidden max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 40, scale: 1.1 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    whileHover={{ scale: 1.2 }}
                >
                    <Image
                        src="/product_images/hero-image-2.webp"
                        alt="غلوة كرك - مشروب الكرك المركز"
                        width={600}
                        height={600}
                        className="w-full object-cover"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default FeaturedProduct;