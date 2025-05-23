const YouTubeEmbed = () => {
    // Replace this with your actual YouTube video ID
    const videoId = "8fdpO7PTSyM";

    return (
        <section className="py-16 md:py-24 bg-[#fdf8f1]">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    {/* Video Title */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold font-tajawal text-amber-900">
                            ودك بشاي كرك يميز مزاجك ومزاج الحبايب ؟ غلوة
                        </h2>
                        <p className="text-gray-600 mt-3 font-tajawal text-lg">
                            شاهد كيف يتم تحضير أفضل كرك في المملكة
                        </p>
                    </div>

                    {/* YouTube Video iframe */}
                    <div className="relative rounded-xl overflow-hidden shadow-xl">
                        <div className="aspect-video w-full">
                            <iframe
                                src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                                className="w-full h-full"
                                title="كرك غلوة - فيديو"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            ></iframe>
                        </div>
                    </div>

                    {/* Video Description */}
                    <div className="mt-8 text-center">
                        <p className="text-gray-600 font-tajawal text-lg max-w-3xl mx-auto">
                            في هذا الفيديو نستعرض طريقة تحضير كرك غلوة الأصيل بخطوات سهلة وبسيطة، لتستمتع بالنكهة الأصلية في منزلك. كرك غلوة - الطعم على أصوله.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default YouTubeEmbed;



{/* <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/8fdpO7PTSyM?si=Mr5X3YRC3HZzeG5m"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

</iframe> */}