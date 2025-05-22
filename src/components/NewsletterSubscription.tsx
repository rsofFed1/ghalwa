import React from 'react';

const NewsletterSubscription = () => {
    return (
        <section className="py-16 bg-white" id="newsletter">
            <div className="container mx-auto px-4 max-w-2xl text-center">
                {/* Envelope Icon */}
                <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16" fill="#333333">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold mb-3 font-tajawal">
                    اشترك في النشرة الإخبارية لدينا
                </h2>

                {/* Description */}
                <p className="text-gray-600 font-medium mb-8 font-tajawal">
                    احصل على أحدث المعلومات حول الأحداث والمبيعات والعروض
                </p>

                {/* Subscription Form with Button on Left Side (Arabic Style) */}
                <div className="flex rounded-4xl overflow-hidden shadow-sm">
                    {/* Email Input */}
                    <input
                        type="email"
                        placeholder="البريد الإلكتروني"
                        className="bg-[#F2F2F2] w-full py-4 px-6 text-right font-tajawal focus:outline-none"
                        required
                    />
                    {/* Subscribe Button on Left Side */}
                    <button
                        type="submit"
                        className="bg-[#2D2D2D] text-white text-lg py-4 px-8 font-bold font-tajawal"
                    >
                        اشترك
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSubscription;