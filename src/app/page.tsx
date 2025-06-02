"use client";

import { useState } from "react";
import PersonalFeed from "../app/components/PersonalFeed";
import { Post } from "../app/components/AdminPanel";

export default function Home() {
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
      <h1 className="text-2xl font-bold mb-4">My Personal Feed</h1>
      <PersonalFeed posts={posts} />
    </main>
  );
}
