import React from 'react';
import BlogCard from './BlogCard.tsx';
import '../../Styles/Blogsection.css'

interface BlogPost {
    title: string;
}

function BlogSection() {
    const blogPosts: BlogPost[] = [
        { title: "Innovative Partnerships Driving Sustainable Development" },
        { title: "Case Study: Successful Collaboration for SDG 17" },
        { title: "Innovative Partnerships Driving Sustainable Development" },
        { title: "Case Study: Successful Collaboration for SDG 17" }
    ];

    return (
        <section className="blog-section">
            <h2 className="blog-section__title">Latest News / Blog</h2>
            <div className="blog-section__container">
                {blogPosts.map((post, index) => (
                    <BlogCard key={index} title={post.title} />
                ))}
            </div>
        </section>
    );
}

export default BlogSection;
