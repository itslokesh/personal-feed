"use client";

import { useState } from "react";
import AdminPanel, { Post } from "../components/AdminPanel";
import PersonalFeed from "../components/PersonalFeed";

export default function AdminPage() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      platform: "Instagram",
      title: "Sunset photo",
      description: "Captured a stunning sunset",
      image: "https://via.placeholder.com/600x400",
      url: "https://instagram.com/example",
    },
  ]);

  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">🛠 Admin Dashboard</h1>
      <AdminPanel posts={posts} setPosts={setPosts} />
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Preview Feed</h2>
        <PersonalFeed posts={posts} />
      </div>
    </main>
  );
}
