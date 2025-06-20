"use client";
import React from 'react';
import { motion } from 'framer-motion';
import VideoSection from './VideoSection';

function HeroSection() {
    return (
        <section className="pt-32 pb-16 bg-white overflow-hidden relative">

            <div className="container mx-auto px-4 relative z-10">
                {/* Text Content - Centered exactly as in reference */}
                <motion.div
                    className="w-full text-center md:mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="text-3xl md:text-4xl font-extrabold font-tajawal text-gray-700 mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        كرك غلوة
                    </motion.h1>

                    <motion.p
                        className="text-gray-700 text-2xl md:text-3xl font-semibold font-tajawal mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        علامة تجارية سعودية متخصصة في إنتاج أجود أنواع الشاي بنكهات متعددة.
                    </motion.p>

                    <motion.p
                        className="text-gray-700 text-lg font-medium font-tajawal mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                    >
                        جذورها بدأت من شغفها بالكرك
                    </motion.p>

                    <motion.p
                        className="text-gray-700 text-lg font-medium font-tajawal md:mb-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                    >
                        وامتدت إلى نكهات تمزج بين الأصالة والتجديد..
                        <br />
                        بطعم يخليك ترجع له!
                    </motion.p>
                </motion.div>

                {/* Images Side by Side - Arranged exactly like the reference */}
                <motion.div
                    className="max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                >
                    <VideoSection />
                </motion.div>
            </div>

            {/* Keep existing decorative elements */}
            <motion.div
                className="absolute top-[15%] right-[5%] w-16 h-16 rounded-full bg-amber-100 opacity-30"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ delay: 1.2, duration: 1 }}
            />
            <motion.div
                className="absolute bottom-[10%] left-[10%] w-24 h-24 rounded-full bg-amber-100 opacity-30"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ delay: 1.4, duration: 1 }}
            />
        </section>
    );
}

export default HeroSection;