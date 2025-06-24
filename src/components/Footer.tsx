import React from 'react';
import Link from 'next/link';
import FollowUs from './FollowUs';

const Footer = () => {
    return (
        <footer className="bg-base text-dark py-12 px-4 shadow-[1px_-1px_12px_rgba(0,0,0,0.15)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between align-middle flex-col text-center">

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg text-[#cc0000] font-bold mb-2 font-readex-pro">للاستفسار و الطلب</h3>
                        <ul className="space-y-3 flex flex-col items-center font-readex-pro">
                            {/* Direct Call */}
                            <li className="flex items-center justify-center md:justify-start gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                                <Link href="tel:+966505291404" className="hover:underline" dir='ltr'>+966505291404</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Nearest Ghalwa Location */}
                    <div className="flex flex-col items-center col-span-1 my-6">
                        <h3 className="text-xl font-bold mb-2 font-readex-pro">
                            <span className='text-[#cc0000]'>أقرب</span>
                            <span className='text-[#fe9a00]'>غلوة</span>
                            <span className='text-[#cc0000]'>لك</span>
                        </h3>
                        <Link
                            href="https://wa.me/+966505291404"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center md:justify-start gap-2 text-dark hover:text-green-600 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                            </svg>
                            <span className="font-readex-pro">تواصل عبر واتساب</span>
                        </Link>
                    </div>

                    <FollowUs />
                </div>

                {/* Distributor Call To Action */}
                <Link
                    href="https://wa.me/+966505291404"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="bg-amber-50 rounded-xl p-4 mt-8 shadow-sm">
                        <div className="flex flex-col items-center justify-between gap-4">
                            <p className="text-md font-readex-pro text-[#fe9a00] text-center md:text-right">
                                وسع نشاطك التجاري مع غلوة وكن أحد موزعينا المعتمدين.
                            </p>
                            <div className="text-center flex md:text-right">
                                <p className="text-md font-readex-pro text-gray-700">
                                    تواصل معنا الآن
                                </p>
                                <span
                                    aria-label='Whatsapp icon'
                                    role='img'
                                    className="flex mr-4 items-center gap-2 text-green-600 hover:text-green-700 font-readex-pro font-medium transition-colors duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" aria-label='Whatsapp icon'>
                                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;