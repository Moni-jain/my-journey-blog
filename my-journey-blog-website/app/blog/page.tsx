import Link from "next/link";

// This would normally be fetched from a database or CMS
const blogPosts = [
  {
    id: 1,
    title: "Payment Gateway 101",
    excerpt: "Ever wondered what happens when you click \"Pay Now\"? Breaking down how payment gateways work in simple terms.",
    date: "March 15, 2025",
    slug: "payment-gateway-101",
    category: "Educational"
  },
  {
    id: 2,
    title: "The Evolution of Mobile Payments",
    excerpt: "From Samsung Pay to today's solutions, how mobile payments have transformed over the last decade.",
    date: "March 10, 2025",
    slug: "evolution-of-mobile-payments",
    category: "Educational"
  },
  {
    id: 3,
    title: "Understanding Tokenization",
    excerpt: "What is payment tokenization and why does it matter for your security? Insights from implementing tokenization systems.",
    date: "March 5, 2025",
    slug: "understanding-tokenization",
    category: "Educational"
  },
  {
    id: 4,
    title: "Behind the Scenes of Credit Card Declines",
    excerpt: "What really happens when your credit card gets declined? Insights from years working with payment processing systems.",
    date: "March 1, 2025",
    slug: "behind-the-scenes-credit-card-declines",
    category: "Experience-Based"
  },
  {
    id: 5,
    title: "Buy Now, Pay Later Revolution",
    excerpt: "From my experience with Apple BNPL Affirm integration at Walmart, why BNPL is expanding into new sectors beyond retail.",
    date: "February 25, 2025",
    slug: "buy-now-pay-later-revolution",
    category: "Industry Trends"
  },
  {
    id: 6,
    title: "Leading Cross-Functional Payment Teams",
    excerpt: "Key lessons from coordinating engineers, compliance, and business stakeholders on payment projects.",
    date: "February 20, 2025",
    slug: "leading-cross-functional-payment-teams",
    category: "Leadership Lessons"
  }
];

export default function BlogPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Payment Industry Insights</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">{post.date}</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{post.category}</span>
              </div>
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
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
    </div>
  );
}
