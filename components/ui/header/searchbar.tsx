export function SearchBar() {
  return (
    <div className="w-full  grid-cols-4 grid bg-white shadow-sm items-center px-5 py-2">
      <div className="flex space-x-4 items-center pl-10">
        <img
          className="w-12 h-12 rounded-full"
          src="https://picsum.photos/150"
        />
        <h1 className="text-xl font-medium">Job Pilot</h1>
      </div>

      <label className="relative block col-span-2 mx-5 ">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
        </span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
        />
      </label>

      <div className="space-x-5">
        <button className="border px-4 py-1 rounded-md text-blue-600 font-normal hover:bg-blue-600 hover:text-white">
          Sign In
        </button>
        <button className="border px-4 py-1 rounded-lg bg-blue-600 text-white hover:text-blue-600 hover:bg-white">
          Post a Job
        </button>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="max-w-2xl mx-auto">
      <form>
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
    </div>
  );
}

// <!-- hero section  -->

// <div class="h-[500px] w-auto bg-slate-400">
//   <div class="mx-auto mt-4 flex h-1/2 w-auto max-w-screen-lg flex-row bg-sky-300">
//     <div class="h-[250px] w-1/2 bg-blue-600 flex flex-col justify-center p-5 ">
//       <h1 class="text-2xl text-white  ">Find a job that suits your interest and skill</h1>
//       <p>Just add your desired image size (width & height) after our URL, and you'll get a random image.</p>

//     </div>
//     <div class="h-[250px] w-1/2  bg-red-300">
//       <img class="h-full w-auto" src="https://picsum.photos/600/400" />
//     </div>
//   </div>
//   <div class="mx-auto mt-4 h-[150px] w-auto max-w-screen-lg bg-purple-400">cards</div>
// </div>
