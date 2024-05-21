import React from "react";

const LoadingSkeleton = () => {
  return (
    <section>
      <div className="container  mx-auto max-w-screen-lg my-5 ">
        <h1 className="my-4 ml-3 text-3xl font-normal">Featured Jobs</h1>

        <div className="flex flex-wrap justify-between gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {/* First loading card */}
          <div className="m-3 max-w-sm min-w-60 flex-1 flex-col rounded-lg border bg-white p-2 shadow-sm hover:shadow-lg">
            <div className="space-y-2">
              <div>
                <p className="text-lg font-normal  w-full h-5 bg-slate-300 animate-pulse mb-2 rounded  "></p>
                <div className="flex items-center space-x-2 w-full h-5 rounded bg-slate-300 animate-pulse"></div>
              </div>

              <div className="flex items-center space-x-5">
                <div className="h-16 w-20 rounded-lg  bg-slate-300 animate-pulse"></div>
                <div className="w-full">
                  <p className="font-medium flex-wrap  h-5 bg-slate-300 rounded animate-pulse"></p>
                  <p className="text-sm font-medium rounded text-slate-500  h-5 bg-slate-300 animate-pulse mt-2 p-2 "></p>
                </div>
                <div className="h-5 w-5 ">
                  {/* <Heart className="hover:fill-red-500" color="#6345f7" /> */}
                </div>
              </div>
            </div>
          </div>

          {/* Second loading card */}
          <div className="m-3 max-w-sm min-w-60 flex-1 flex-col rounded-lg border bg-white p-2 shadow-sm hover:shadow-lg">
            <div className="space-y-2">
              <div>
                <p className="text-lg font-normal  w-full h-5 bg-slate-300 animate-pulse mb-2 rounded  "></p>
                <div className="flex items-center space-x-2 w-full h-5 rounded bg-slate-300 animate-pulse"></div>
              </div>

              <div className="flex items-center space-x-5">
                <div className="h-16 w-20 rounded-lg  bg-slate-300 animate-pulse"></div>
                <div className="w-full">
                  <p className="font-medium flex-wrap  h-5 bg-slate-300 rounded animate-pulse"></p>
                  <p className="text-sm font-medium rounded text-slate-500  h-5 bg-slate-300 animate-pulse mt-2 p-2 "></p>
                </div>
                <div className="h-5 w-5 ">
                  {/* <Heart className="hover:fill-red-500" color="#6345f7" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoadingSkeleton;
