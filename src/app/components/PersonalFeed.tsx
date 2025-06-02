"use client";

import React, { useState } from "react";
import { Post } from "../components/AdminPanel";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  posts: Post[];
};

export default function PersonalFeed({ posts }: Props) {
  const platforms = ["All", ...new Set(posts.map((p) => p.platform))];
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? posts : posts.filter(p => p.platform === active);

  return (
    <div>
      <Tabs defaultValue="All" onValueChange={setActive}>
        <TabsList>
          {platforms.map((platform) => (
            <TabsTrigger key={platform} value={platform}>
              {platform}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="space-y-4 mt-4">
        {filtered.map((post) => (
          <Card key={post.id}>
            <CardContent className="p-4 space-y-2">
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.description}</p>
              {post.image && <img src={post.image} alt={post.title} className="rounded w-full h-auto" />}
              <a href={post.url} target="_blank" className="text-blue-600 hover:underline">
                View on {post.platform}
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
