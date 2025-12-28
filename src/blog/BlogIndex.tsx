import { Helmet } from "@dr.pogodin/react-helmet";
import { blogPosts } from "./blogIndex";

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-stone-800 py-16">
      <Helmet>
        <title>Blog | BactermFinder</title>
        <meta name="description" content="Latest insights and updates about BactermFinder" />
        <meta property="og:title" content="Blog | BactermFinder" />
        <meta property="og:description" content="Latest insights and updates about BactermFinder" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12">Blog</h1>
        
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-stone-200"
            >
              <h2 className="text-2xl font-semibold mb-2 text-science-teal">
                {post.meta.title}
              </h2>
              <p className="text-sm text-stone-500 mb-3">
                {new Date(post.meta.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-stone-600 mb-4">{post.meta.description}</p>
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
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
