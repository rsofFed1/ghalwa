'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function WhyGhalwaSection() {
    const features = [
        {
            icon: "🫖",
            text: "جاهز من الظرف إلى البراد",
            direction: "right"
        },
        {
            icon: "🥛",
            text: "يُحضر بالحليب السائل أو المبخر",
            direction: "left"
        },
        {
            icon: "🎯",
            text: "ظرف واحد يحضر 5 أكواب",
            direction: "right"
        },
        {
            icon: "🌿",
            text: "نكهات متنوعة ترضي كل الأذواق",
            direction: "left"
        },
        {
            icon: "🍯",
            text: "تحليه مثل ما تحب: بعسل أو سكر",
            direction: "right"
        },
    ];

    return (
        <section className="py-8 bg-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-2xl md:text-3xl font-semibold font-readex-pro text-center text-[#fe9a00] mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    ليــــه كرك غلوة
                </motion.h2>

                <div className="max-w-3xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`flex items-center mb-8 ${feature.direction === 'left' ? 'justify-start' : 'justify-end'}`}
                            initial={{
                                opacity: 0,
                                x: feature.direction === 'left' ? -50 : 50
                            }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.2
                            }}
                            viewport={{ once: true }}
                        >
                            <div
                                className={`flex items-center gap-4 bg-amber-50 px-6 py-4 rounded-xl shadow-sm border border-amber-200 ${feature.direction === 'left' ? 'flex-row' : 'flex-row-reverse'
                                    }`}
                            >
                                <div className="text-4xl">{feature.icon}</div>
                                <p className="text-lg font-readex-pro text-[#cc0000]">{feature.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}