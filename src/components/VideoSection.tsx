'use client';

import { useRef, useState, useEffect } from 'react';

export default function VideoSection() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    // Initial load when component enters viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    // Auto-play/pause based on visibility
    useEffect(() => {
        if (!isVisible || !videoRef.current) return;

        const video = videoRef.current;

        // Create a new observer that will control play/pause
        const playbackObserver = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    if (isVideoLoaded) {
                        video.play()
                            .then(() => { })
                            .catch(err => console.log("Auto-play prevented by browser:", err));
                    }
                } else {
                    video.pause();
                }
            },
            {
                threshold: 0.5,
                rootMargin: "-10% 0px"
            }
        );

        if (containerRef.current) {
            playbackObserver.observe(containerRef.current);
        }

        return () => {
            playbackObserver.disconnect();
        };
    }, [isVisible, isVideoLoaded]);

    const handleVideoLoaded = () => {
        setIsVideoLoaded(true);
        if (videoRef.current) {
            videoRef.current.play()
                .catch(err => console.log("Initial autoplay attempt failed:", err));
        }
    };

    const handleVideoEnded = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play()
                .catch(err => console.log("Replay after ended failed:", err));
        }
    };

    return (
        <section className="">
            <div className="container mx-auto px-4">
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-readex-pro text-gray-700 mb-4">
                        استمتع بتجربة شاي غلوة
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto font-readex-pro">
                        شاهد كيف يتم تحضير أفضل شاي بنكهات متميزة ومذاق لا يقاوم
                    </p>
                </motion.div> */}

                <div
                    ref={containerRef}
                    className="w-fit mx-auto relative rounded-xl overflow-hidden"
                >
                    {isVisible && !isVideoLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-amber-50 bg-opacity-80 z-10">
                            <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    )}

                    <video
                        ref={videoRef}
                        className="h-[55vh] object-cover"
                        controls={false}
                        playsInline
                        muted
                        autoPlay
                        preload="auto"
                        onLoadedData={handleVideoLoaded}
                        onEnded={handleVideoEnded}
                        loop
                        // style={{ backgroundColor: 'rgb(246,130,34)' }}
                    >
                        {isVisible && (
                            <>
                                <source src="/ghalwa_optimized_video.mp4" type="video/mp4" />
                                <p className="text-center p-4 bg-gray-100">
                                    متصفحك لا يدعم تشغيل الفيديو
                                </p>
                            </>
                        )}
                    </video>
                </div>
            </div>
        </section>
    );
}