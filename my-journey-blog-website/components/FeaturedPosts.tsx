import Link from "next/link";

// This would normally be fetched from a database or CMS
const featuredPosts = [
  {
    id: 1,
    title: "Payment Gateway 101",
    excerpt: "Ever wondered what happens when you click \"Pay Now\"? Breaking down how payment gateways work in simple terms.",
    date: "March 15, 2025",
    slug: "payment-gateway-101"
  },
  {
    id: 2,
    title: "The Evolution of Mobile Payments",
    excerpt: "From Samsung Pay to today's solutions, how mobile payments have transformed over the last decade.",
    date: "March 10, 2025",
    slug: "evolution-of-mobile-payments"
  },
  {
    id: 3,
    title: "Understanding Tokenization",
    excerpt: "What is payment tokenization and why does it matter for your security? Insights from implementing tokenization systems.",
    date: "March 5, 2025",
    slug: "understanding-tokenization"
  }
];

export function FeaturedPosts() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Featured Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredPosts.map((post) => (
          <div key={post.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link 
                href={`/blog/${post.slug}`} 
                className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link 
          href="/blog" 
          className="inline-block border border-blue-600 text-blue-600 px-6 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors"
        >
          View All Articles
        </Link>
      </div>
    </section>
  );
}
