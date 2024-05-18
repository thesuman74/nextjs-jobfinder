"use client";

import { useState } from "react";

interface DataItem {
  id: number;
  name: string;
  profession: string;
}

export default function Home() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<DataItem[]>([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/search?query=${query}`);
      const data: DataItem[] = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name or profession"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            {result.name} - {result.profession}
          </li>
        ))}
      </ul>
    </div>
  );
}
