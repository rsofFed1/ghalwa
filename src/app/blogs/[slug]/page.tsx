import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '../../../data/blogPosts';

// Format date to Arabic format
const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ar-SA', options);
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;
    // Find the post by slug
    const post = blogPosts.find((post) => post.slug === slug);

    // If post doesn't exist, return 404
    if (!post) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-32 lg:py-40 rtl">
            <Link href="/blogs" className="inline-flex items-center mb-8 text-dark hover:text-gray-700 transition-colors font-tajawal">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="ml-2">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>
                العودة إلى المدونة
            </Link>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-80 w-full">
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="p-8">
                    <h1 className="text-3xl font-bold mb-4 font-tajawal">{post.title}</h1>
                    <p className="text-gray-500 mb-8 font-tajawal">{formatDate(post.date)}</p>

                    <div
                        className="prose prose-lg max-w-none font-tajawal prose-headings:font-tajawal prose-headings:text-right prose-p:text-right"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>
            </div>
        </div>
    );
}