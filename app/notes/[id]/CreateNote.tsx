"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateNote() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const router = useRouter(); // Initialize the useRouter hook

  const create = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    const res = await fetch("http://localhost:8001/users", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        number: Number(number), // Convert number to a number type
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      setName("");
      setEmail("");
      setNumber("");

      router.refresh(); // Refresh the router
    } else {
      console.error("Failed to create user");
    }
  };

  return (
    <form onSubmit={create} className="container max-w-lg my-5">
      <h3>Create a new user</h3>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="block mb-2 p-2 border border-gray-300 rounded"
      />

      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="block mb-2 p-2 border border-gray-300 rounded"
      />

      <input
        type="text"
        placeholder="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        required
        className="block mb-2 p-2 border border-gray-300 rounded"
      />

      <button
        type="submit"
        className="block p-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
}
