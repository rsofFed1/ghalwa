"use client";
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FaQuoteRight, FaStar } from 'react-icons/fa';
import Image from 'next/image';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        direction: 'rtl', 
        dragFree: false,
        slidesToScroll: 1,
        containScroll: "keepSnaps"
    }, [
        Autoplay({ delay: 3000, stopOnInteraction: false })
    ]);

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on('select', onSelect);

        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi]);

    return (
        <section className="bg-[#fdf8f1] py-16 md:py-24 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-tajawal">
                    ماذا يقول عملاؤنا؟
                </h2>

                {/* Testimonial Carousel - Fixed with proper spacing and overflow handling */}
                <div className="relative">

                    {/* Embla container with proper sizing */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 px-4"
                                >
                                    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-right h-full flex flex-col transition-all duration-300 hover:shadow-xl">
                                        {/* Quote icon */}
                                        <div className="mb-4 text-amber-500">
                                            <FaQuoteRight className="w-8 h-8 opacity-20" />
                                        </div>

                                        {/* Testimonial text */}
                                        <p className="text-gray-700 mb-6 flex-grow font-tajawal md:text-lg leading-relaxed">
                                            &quot;{testimonial.text}&quot;
                                        </p>

                                        {/* Author info section */}
                                        <div className="flex items-center justify-between mt-4">
                                            <div className="flex-grow">
                                                {/* Star rating */}
                                                <div className="flex justify-end mb-2">
                                                    {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                                                        <FaStar key={i} className="text-amber-500 w-4 h-4" />
                                                    ))}
                                                </div>
                                                <p className="font-bold text-lg font-tajawal">{testimonial.name}</p>
                                                {testimonial.position && (
                                                    <p className="text-gray-500 text-sm font-tajawal">{testimonial.position}</p>
                                                )}
                                            </div>

                                            {/* Profile image */}
                                            <div className="ml-4">
                                                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-amber-500">
                                                    {testimonial.image ? (
                                                        <Image
                                                            src={testimonial.image}
                                                            alt={testimonial.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full bg-amber-100 flex items-center justify-center">
                                                            <span className="text-amber-800 text-xl font-bold">
                                                                {testimonial.name.charAt(0)}
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Indicator dots */}
                <div className="flex justify-center mt-8 gap-2">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            className={`w-3 h-3 rounded-full transition-colors ${idx === selectedIndex ? 'bg-amber-500' : 'bg-gray-300'
                                }`}
                            onClick={() => emblaApi?.scrollTo(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
