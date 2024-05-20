"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function SearchBar({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter(); // Use push for redirecting to the results page

  const debouncedHandleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("name", term);
    } else {
      params.delete("name");
    }
    replace(`/search?${params.toString()}`); // Redirect to search page with query
  }, 500);

  return (
    <div className="w-full grid-cols-4 grid bg-white shadow-sm items-center px-5 py-2">
      <div className="flex space-x-4 items-center pl-10">
        <img
          className="w-12 h-12 rounded-full"
          src="https://picsum.photos/150"
        />
        <h1 className="text-xl font-medium">Job Pilot</h1>
      </div>
      <label className="relative col-span-2 mx-5 flex">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
        </span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          type="text"
          name="search"
          placeholder={placeholder}
          onChange={(e) => debouncedHandleSearch(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
        />
      </label>
      <div className="flex md:flex-row">
        <div className="space-x-5 flex">
          <button className="border px-4 py-1 rounded-md text-blue-600 font-normal hover:bg-blue-600 hover:text-white">
            Sign In
          </button>
          <button className="border flex px-4 py-1 rounded-lg bg-blue-600 text-white hover:text-blue-600 hover:bg-white">
            Post a Job
          </button>
        </div>
      </div>
    </div>
  );
}
