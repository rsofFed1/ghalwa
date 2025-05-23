import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blogPosts';

const HomeBlogFeature = () => {
    // Get the 3 most recent blog posts
    const recentPosts = [...blogPosts]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-tajawal">آخر التدوينات</h2>
                    <p className="mt-2 text-lg text-gray-600 font-tajawal">اكتشف آخر المقالات والمعلومات عن عالم الشاي والكرك</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {recentPosts.map(post => (
                        <Link href={`/blogs/${post.slug}`} key={post.id}>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={post.coverImage}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-tajawal font-semibold text-xl mb-2">{post.title}</h3>
                                    <p className="text-gray-600 mb-4 font-tajawal text-sm">{post.excerpt.substring(0, 100)}...</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <Link
                        href="/blogs"
                        className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors font-tajawal"
                    >
                        جميع المقالات
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeBlogFeature;