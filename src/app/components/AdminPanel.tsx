"use client";

import React, { useState } from "react";

export type Post = {
  id: number;
  platform: string;
  title: string;
  description: string;
  image: string;
  url: string;
};

type Props = {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
};

export default function AdminPanel({ posts, setPosts }: Props) {
  const [newPost, setNewPost] = useState<Post>({
    id: Date.now(),
    platform: "Instagram",
    title: "",
    description: "",
    image: "",
    url: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const addPost = () => {
    if (!newPost.title || !newPost.url) return;
    setPosts([...posts, { ...newPost, id: Date.now() }]);
    setNewPost({ ...newPost, title: "", description: "", image: "", url: "" });
  };

  const deletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="p-4 border rounded-xl bg-gray-100 mt-4">
      <h2 className="text-lg font-bold mb-2">🛠 Admin Panel</h2>
      <div className="grid gap-2 md:grid-cols-2">
        <input
          name="title"
          placeholder="Title"
          value={newPost.title}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          name="description"
          placeholder="Description"
          value={newPost.description}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          name="image"
          placeholder="Image URL"
          value={newPost.image}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          name="url"
          placeholder="Redirect URL"
          value={newPost.url}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <select name="platform" value={newPost.platform} onChange={handleChange} className="p-2 border rounded">
          <option>Instagram</option>
          <option>Twitter</option>
          <option>YouTube</option>
          <option>GitHub</option>
          <option>Strava</option>
          <option>LinkedIn</option>
          <option>Letterboxd</option>
        </select>
        <button onClick={addPost} className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          ➕ Add Post
        </button>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Existing Posts</h3>
        <ul className="text-sm">
          {posts.map((post) => (
            <li key={post.id} className="flex justify-between items-center py-1 border-b">
              <span>{post.title} ({post.platform})</span>
              <button onClick={() => deletePost(post.id)} className="text-red-500 hover:underline">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
