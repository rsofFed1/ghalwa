"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

function BannerSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    return (
        <section
            ref={sectionRef}
            className="py-10 md:py-16 bg-zinc-50 overflow-hidden relative"
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
                        className="text-2xl md:text-3xl lg:text-4xl text-[#fe9a00] font-readex-pro font-semibold mb-1 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        ذوَّاق ؟
                    </motion.h2>
                    <motion.p
                        className="text-sm md:text-md lg:text-xl font-readex-pro text-[#cc0000] mb-6 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        جرب مشروب الكرك الأصلي ،
                    </motion.p>
                    <motion.h2
                        className="text-xl md:text-2xl lg:text-3xl font-readex-pro text-gray-700 mb-5 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                    >
                        <span className="text-[#fe9a00]"> مذاق غلوة..</span>
                        <span className="text-[#cc0000]"> نتيجة توليفة نراهن عليها، بطعم متوازن ومكونات مختارة بعناية تُعبر عن جوهر النكهة. تأتيك</span>
                        <span className="text-[#fe9a00]"> غلوة</span>
                        <span className="text-[#cc0000]"> بجودة نضع عليها ثقتنا .</span>
                    </motion.h2>
                </motion.div>

                {/* Image with animation */}
                <motion.div
                    className="relative rounded-lg overflow-hidden max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 40,scale: 1.1 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    whileHover={{ scale: 1.2 }}
                >
                    <Image
                        src="/product_images/banner2.webp"
                        alt="غلوة كرك - مشروب الكرك المركز"
                        width={1200}
                        height={600}
                        className="w-full object-cover"
                        priority
                    />
                </motion.div>
            </div>

            {/* Decorative elements */}
            <motion.div
                className="absolute top-16 left-10 w-20 h-20 rounded-full bg-amber-200 opacity-20"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
            />
            <motion.div
                className="absolute bottom-16 right-10 w-16 h-16 rounded-full bg-amber-200 opacity-20"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 1.4, duration: 1 }}
            />
        </section>
    );
}

export default BannerSection;