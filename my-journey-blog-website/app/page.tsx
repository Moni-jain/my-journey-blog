import Link from "next/link";
import { FeaturedPosts } from "@/components/FeaturedPosts";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">My Journey in the Payment Industry</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-600">
          Professional insights and thought leadership from 17+ years of experience in payment systems, 
          fintech solutions, and product management.
        </p>
        <div className="mt-8">
          <Link 
            href="/blog" 
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Read My Articles
          </Link>
        </div>
      </section>

      <FeaturedPosts />
      
      <section className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Stay Updated</h2>
        <NewsletterSignup />
      </section>
    </div>
  );
}
