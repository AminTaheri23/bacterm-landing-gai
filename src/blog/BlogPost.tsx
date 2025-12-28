import { useParams, Link } from "react-router-dom";
import { Helmet } from "@dr.pogodin/react-helmet";
import { blogPosts } from "./blogIndex";
import { marked } from "marked";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#F9F9F9] text-stone-800 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-stone-600 mb-6">
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/blog" className="text-science-teal hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-stone-800 py-16">
      <Helmet>
        <title>{post.meta.title} | BactermFinder</title>
        <meta name="description" content={post.meta.description} />
        <meta property="og:title" content={post.meta.title} />
        <meta property="og:description" content={post.meta.description} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.meta.date} />
        {post.meta.tags &&
          post.meta.tags.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
      </Helmet>

      <article className="max-w-4xl mx-auto px-6">
        <Link
          to="/blog"
          className="inline-block mb-8 text-science-teal hover:underline"
        >
          ← Back to Blog
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.meta.title}</h1>
          <p className="text-sm text-stone-500 mb-4">
            {new Date(post.meta.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          {post.meta.tags && post.meta.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-stone-100 text-stone-600 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div
          className="prose prose-stone prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: marked(post.content) }}
        />
      </article>
    </div>
  );
}
