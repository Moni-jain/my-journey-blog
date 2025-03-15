"use client";

import { useState } from "react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto">
      <p className="text-center mb-4 text-gray-600">
        Subscribe to my newsletter for the latest insights on payment industry trends and best practices.
      </p>
      
      {status === "success" ? (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md text-center">
          Thank you for subscribing! Check your email to confirm your subscription.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors disabled:bg-blue-400"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      )}
    </div>
  );
}
