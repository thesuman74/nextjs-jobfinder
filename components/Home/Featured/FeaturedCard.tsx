import { FeaturedJobsType } from "@/lib/type";
import { Annoyed } from "lucide-react";
import React from "react";

const FeaturedCard = ({ jobs }: { jobs: FeaturedJobsType }) => {
  return (
    <div
      className="m-3 max-w-sm min-w-60 flex-1 flex-col rounded-lg border bg-white p-2 shadow-sm"
      key={jobs.id}
    >
      <div className="space-y-2">
        <div>
          <p className="text-lg font-normal">{jobs.post}</p>
          <div className="flex items-center space-x-2">
            <p className="my-2 w-20 rounded-sm bg-green-100 text-center text-sm text-green-500">
              {jobs.hours}
            </p>
            <p className="text-xs text-slate-400">Salary: {jobs.salary}+</p>
          </div>
        </div>

        <div className="flex items-center space-x-5">
          <div className="h-16 w-16 rounded-lg bg-red-500">
            <img
              className="h-full w-full rounded-lg object-cover"
              src="https://picsum.photos/100"
              alt="photo"
            />
          </div>
          <div>
            <p className="font-medium flex-wrap">{jobs.company}</p>
            <p className="text-sm font-medium text-slate-500">
              {jobs.openposition} open positions
            </p>
          </div>
          <div className="h-5 w-5 ">
            <Annoyed color="#4784e6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
