import React from 'react';
import '../../Styles/Blogcard.css'

interface BlogCardProps {
    title: string;
}

function BlogCard({ title }: BlogCardProps) {
    return (
        <div className="blog-card">
            <div className="blog-card__container">
                <h3 className="blog-card__title">{title}</h3>
                <div className="blog-card__read-more">Read more :</div>
            </div>
        </div>
    );
}

export default BlogCard;
