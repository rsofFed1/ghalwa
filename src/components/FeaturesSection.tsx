"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const FeaturesSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    // Features data
    const features = [
        { icon: "cup", text: "موزون وجاهز، من الظرف إلى البراد" },
        { icon: "leaf", text: "عضوي وطبيعي %100" },
        { icon: "milk", text: "يُحضر بالحليب السائل أو المبخر" },
        { icon: "package", text: "ظرف واحد يكفي خمسة أكواب" },
        { icon: "flavors", text: "متوفر بعدّة نكهات تلائم جميع الذائقات" },
        { icon: "honey", text: "يمكن تحليته بالعسل أو السكر حسب الرغبة" }
    ];

    // Nutritional values data
    const nutritionalValues = [
        { icon: "sugar", text: "خالٍ من السكر" },
        { icon: "preservative", text: "خالٍ من المواد الحافظة" },
        { icon: "energy", text: "يمد الجسم بالطاقة والنشاط" },
        { icon: "antioxidant", text: "يحتوي على مضادات أكسدة طبيعية من الشاي" }
    ];

    return (
        <section
            ref={sectionRef}
            className="py-20 bg-gradient-to-b from-white to-amber-50 overflow-hidden relative"
        >
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col gap-12 md:gap-20">
                    {/* Features */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-4xl mx-auto md:p-10 relative overflow-hidden"
                    >
                        {/* Background decoration */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-50 rounded-full opacity-50"></div>
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-amber-50 rounded-full opacity-50"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-[#e69138] mb-3 font-tajawal text-center">
                                يتميّز كرك غلوة
                            </h3>
                            <div className="w-32 h-1 bg-amber-500 mx-auto mb-6"></div>

                            <ul className="space-y-5">
                                {features.map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                                        className="flex items-center gap-4 bg-amber-50/50 rounded-xl p-4"
                                    >
                                        <div className="w-12 h-12 flex-shrink-0 hidden bg-amber-100 rounded-full md:flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-lg font-tajawal text-gray-700">{feature.text}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Nutritional Values */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-4xl mx-auto md:p-10 relative overflow-hidden"
                    >
                        {/* Background decoration */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-50 rounded-full opacity-50"></div>
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-amber-50 rounded-full opacity-50"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-[#e69138] mb-3 font-tajawal text-center">
                                قيَم كرك غلوة الغذائية
                            </h3>
                            <div className="w-32 h-1 bg-amber-500 mx-auto mb-6"></div>

                            <ul className="space-y-5">
                                {nutritionalValues.map((value, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ delay: 0.6 + (index * 0.1), duration: 0.5 }}
                                        className="flex items-center gap-4 bg-amber-50/50 rounded-xl p-4"
                                    >
                                        <div className="w-12 h-12 flex-shrink-0 hidden bg-green-100 rounded-full md:flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-lg font-tajawal text-gray-700">{value.text}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;