"use client";

import SearchCard from "@/components/ui/cards/SearchCard";
import { PopularVacanciesType } from "@/lib/type";
import { useState, useEffect, Suspense } from "react";
import Loading from "../loading";

export default function Searchpage({
  searchParams,
}: {
  searchParams: { name: string };
}) {
  const [results, setResults] = useState<PopularVacanciesType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
      } finally {
        setIsLoading(false); // Set isLoading to false after data fetching is done
      }
    };

    if (searchParams.name) {
      // Simulate a loading delay of 1 seconds
      setIsLoading(true);
      setTimeout(() => {
        fetchData();
      }, 2000);
    }
  }, [searchParams.name]);

  return (
    <section>
      <Suspense fallback={<Loading />}>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="container mx-auto max-w-screen-lg my-5">
            <h1 className="my-4 ml-3 text-3xl font-normal">Featured Jobs</h1>
            <div className="flex flex-wrap justify-between gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
              {results.map((item) => (
                <SearchCard jobs={item} key={item.id} />
              ))}
            </div>
          </div>
        )}
      </Suspense>
    </section>
  );
}
