import FeaturedCard from "@/components/ui/cards/FeaturedCard";
import { SearchBar } from "@/components/ui/header/searchbar";
import { Table } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

// export default function Test() {
//   return <Link href="/test">At About page, go to test</Link>;
// }

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className=" text-2xl">Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <SearchBar placeholder="Search invoices..." />
      </div>
      <Suspense key={query + currentPage} fallback={"loadings..."}>
        {/* <Table query={query} currentPage={currentPage} /> */}
        {/* <FeaturedCard jobs={query} /> */}
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}
