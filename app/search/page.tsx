"use client";

import FeaturedCard from "@/components/ui/cards/FeaturedCard";
import { FeaturedJobsType } from "@/lib/type";
import { useState, useEffect } from "react";

interface DataItem {
  id: number;
  name: string;
  profession: string;
}

export default function Searchpage({
  searchParams,
}: {
  searchParams: { name: string };
}) {
  const [results, setResults] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/search?query=${encodeURIComponent(
            searchParams.name
          )}`
        );
        // console.log("response", response.json());

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
    // <div>
    //   <h1>Search</h1>
    //   <ul>
    //     {results.length > 0 ? (
    //       results.map((result) => (
    //         <li key={result.id}>
    //           {result.name} - {result.profession}
    //         </li>
    //       ))
    //     ) : (
    //       <li>No results found</li>
    //     )}
    //   </ul>
    // </div>
    <section>
      <div className="container  mx-auto max-w-screen-lg my-5 ">
        <h1 className="my-4 ml-3 text-3xl font-normal">Featured Jobs</h1>

        <div className="flex flex-wrap justify-between gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {/* {results.map((item: FeaturedJobsType) => (
            <FeaturedCard jobs={item} key={item.id} />
          ))} */}
        </div>
      </div>
    </section>
  );
}
