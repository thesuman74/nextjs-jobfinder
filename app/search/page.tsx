import { useState } from "react";

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
  // const [results, setResults] = useState<DataItem[]>([]);
  return (
    <div>
      <h1>Search</h1>
      {/* <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name or profession"
      /> */}
      {/* <button onClick={handleSearch}>Search</button> */}
      <HandleSearch name={searchParams.name} />
    </div>
  );
}
const HandleSearch = async ({ name }: { name: string }) => {
  try {
    console.log("I am in handle search");
    const response = await fetch(`/api/search?query=${name}`, {
      method: "GET",
    });
    console.log("I am in handle search", response);

    const data: DataItem[] = await response.json();
    console.log("I am in handle search", data);

    // setResults(data);
    return (
      <ul>
        {data.map((result) => (
          <li key={result.id}>
            {result.name} - {result.profession}
          </li>
        ))}
      </ul>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <ul>
        <li>data not found</li>
      </ul>
    );
  }
};
