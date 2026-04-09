import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPostsData';

interface RelatedBlogsProps {
  slugs: string[];
}

const RelatedBlogs = ({ slugs }: RelatedBlogsProps) => {
  const items = blogPosts.filter((post) => slugs.includes(post.slug));
  if (items.length === 0) return null;
  return (
    <div className="rounded-xl border border-primary-100 bg-white p-5">
      <h3 className="text-lg font-bold text-neutral-900">Related Blogs</h3>
      <ul className="mt-3 space-y-2">
        {items.map((post) => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`} className="text-primary-700 font-semibold hover:underline">{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedBlogs;
