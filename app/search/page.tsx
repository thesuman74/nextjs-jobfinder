"use client";

import SearchCard from "@/components/ui/cards/SearchCard";
import { PopularVacanciesType } from "@/lib/type";
import { useState, useEffect } from "react";

export default function Searchpage({
  searchParams,
}: {
  searchParams: { name: string };
}) {
  const [results, setResults] = useState<PopularVacanciesType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/search?query=${encodeURIComponent(
            searchParams.name
          )}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Data fetched after filter:", data);

        if (data.success) {
          setResults(data.data);
        } else {
          console.error("Error fetching search results:", data.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (searchParams.name) {
      fetchData();
    }
  }, [searchParams.name]);

  return (
    <section>
      <div className="container mx-auto max-w-screen-lg my-5">
        <h1 className="my-4 ml-3 text-3xl font-normal">Featured Jobs</h1>
        <div className="flex flex-wrap justify-between gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {results.map((item) => (
            <SearchCard jobs={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
