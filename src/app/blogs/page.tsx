"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '../../data/blogPosts';

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 py-32 lg:py-40 rtl">
            <h1 className="text-4xl font-bold mb-12 text-center font-tajawal">مدونة غلوة</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <Link href={`/blogs/${post.slug}`} key={post.id}>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="relative h-56 w-full">
                                <Image
                                    src={post.coverImage}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-2 font-tajawal">{post.title}</h2>
                                <p className="text-gray-600 mb-4 font-tajawal text-right">{post.excerpt}</p>
                                <p className="text-sm text-gray-500 font-tajawal">{post.date}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}