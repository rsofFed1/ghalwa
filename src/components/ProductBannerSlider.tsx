"use client";
import React from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { bannerSlides } from '@/data/bannerSlides';

const ProductBannerSlider = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        direction: 'rtl',
        align: 'start',
        containScroll: 'trimSnaps'
    }, [
        Autoplay({ delay: 5000 })
    ]);

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    return (
        <section className="relative w-full overflow-hidden top-40">
            {/* Unified Slider */}
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {bannerSlides.map((slide) => (
                        <div
                            key={slide.id}
                            className="embla__slide min-w-full md:min-w-1/3 px-4"
                        >
                            {/* Mobile Layout */}
                            <div
                                className="md:hidden h-full rounded-2xl p-4 shadow-lg"
                                style={{ background: slide.background }}
                            >
                                <div className="relative h-64">
                                    <Image
                                        src={slide.productImage}
                                        alt={slide.title}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                    <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-lg text-sm">
                                        شاي هندي فاخر
                                    </div>
                                </div>
                                <div className="mt-4 text-right space-y-2 text-white">
                                    <h2 className="text-2xl font-bold">{slide.title}</h2>
                                    <p className="opacity-90">{slide.subtitle}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {slide.features.map((feature, index) => (
                                            <span
                                                key={index}
                                                className="bg-white/20 px-3 py-1 rounded-full text-sm"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Desktop Layout */}
                            <div
                                className="hidden md:block h-full mx-4 rounded-xl shadow-lg p-6"
                                style={{ background: slide.background }}
                            >
                                <div className="relative h-64">
                                    <Image
                                        src={slide.productImage}
                                        alt={slide.title}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                                <div className="mt-4 text-right space-y-2 text-white">
                                    <h3 className="text-xl font-bold">{slide.title}</h3>
                                    <p className="opacity-90 text-sm">{slide.subtitle}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {slide.features.map((feature, index) => (
                                            <span
                                                key={index}
                                                className="bg-white/20 px-3 py-1 rounded-full text-xs"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Controls */}
            <button
                onClick={scrollPrev}
                className="absolute top-1/2 -translate-y-1/2 left-2 bg-white/80 p-2 rounded-full shadow-lg"
            >
                <FaChevronLeft className="h-5 w-5" />
            </button>
            <button
                onClick={scrollNext}
                className="absolute top-1/2 -translate-y-1/2 right-2 bg-white/80 p-2 rounded-full shadow-lg"
            >
                <FaChevronRight className="h-5 w-5" />
            </button>
        </section>
    );
};

export default ProductBannerSlider;