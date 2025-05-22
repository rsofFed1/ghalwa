"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { FaTiktok } from 'react-icons/fa';

type TikTokVideo = {
    id: string;
    title: string;
    embedUrl: string;
    thumbnailUrl: string;
};

const tikTokVideos: TikTokVideo[] = [
    {
        id: "7341857905690723614",
        title: "طريقة تحضير كرك غلوة بنكهة الزعفران",
        embedUrl: "https://www.tiktok.com/embed/7341857905690723614",
        thumbnailUrl: "/tiktok-thumbnails/tiktok1.jpg"
    },
    {
        id: "7342270407072827686",
        title: "كرك غلوة مع الضيوف - النكهة المثالية",
        embedUrl: "https://www.tiktok.com/embed/7342270407072827686",
        thumbnailUrl: "/tiktok-thumbnails/tiktok2.jpg"
    },
    {
        id: "7340645038934612269",
        title: "كيف تصنع براد كرك غلوة بنكهة الهيل",
        embedUrl: "https://www.tiktok.com/embed/7340645038934612269",
        thumbnailUrl: "/tiktok-thumbnails/tiktok3.jpg"
    },
    {
        id: "7341120487035991342",
        title: "كرك غلوة الأصلي - طعم لا يُنسى",
        embedUrl: "https://www.tiktok.com/embed/7341120487035991342",
        thumbnailUrl: "/tiktok-thumbnails/tiktok4.jpg"
    }
];

export default function TikTokSection() {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openVideoModal = (videoId: string) => {
        setActiveVideo(videoId);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent body scrolling
    };

    const closeVideoModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = ''; // Re-enable body scrolling
    };

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-4">
                        <FaTiktok className="text-[#ff0050] text-3xl mr-2" />
                        <h2 className="text-3xl md:text-4xl font-bold font-tajawal">شاهد كرك غلوة على تيك توك</h2>
                    </div>
                    <p className="text-gray-600 max-w-2xl mx-auto font-tajawal text-lg">
                        اكتشف أفضل الوصفات والنصائح لتحضير كرك غلوة المثالي من خلال مقاطع الفيديو الخاصة بنا
                    </p>
                </div>

                {/* TikTok Videos Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tikTokVideos.map((video) => (
                        <div
                            key={video.id}
                            className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer"
                            onClick={() => openVideoModal(video.id)}
                        >
                            <div className="relative aspect-[9/16] w-full">
                                {/* Video Thumbnail */}
                                <Image
                                    src={video.thumbnailUrl}
                                    alt={video.title}
                                    className="w-full h-full object-cover"
                                />
                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition-colors">
                                        <FaTiktok className="text-black text-2xl" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 text-right">
                                <h3 className="font-tajawal font-medium text-lg">{video.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* TikTok Follow Button */}
                <div className="mt-12 text-center">
                    <a
                        href="https://www.tiktok.com/@_ghalwa"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center bg-gradient-to-r from-[#ff0050] to-[#00f2ea] text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition-shadow"
                    >
                        <FaTiktok className="mr-2 text-xl" />
                        تابعنا على تيك توك
                    </a>
                </div>

                {/* Video Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeVideoModal}>
                        <div className="relative bg-black w-full max-w-lg mx-auto rounded-xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
                            <button
                                onClick={closeVideoModal}
                                className="absolute top-2 right-2 bg-white/20 rounded-full p-2 z-10 hover:bg-white/40 transition-colors"
                            >
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="aspect-[9/16] w-full">
                                <iframe
                                    src={tikTokVideos.find(v => v.id === activeVideo)?.embedUrl}
                                    className="w-full h-full"
                                    allowFullScreen
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}