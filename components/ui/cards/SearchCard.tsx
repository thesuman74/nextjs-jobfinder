import { FeaturedJobsType, PopularVacanciesType } from "@/lib/type";
import { Annoyed, Heart } from "lucide-react";
import React from "react";

const SearchCard = ({ jobs }: { jobs: PopularVacanciesType }) => {
  return (
    <div
      className="m-3 max-w-sm min-w-60 flex-1 flex-col rounded-lg border bg-white p-2 shadow-sm hover:shadow-lg"
      key={jobs.id}
    >
      <div className="space-y-2">
        <div>
          <p className="text-lg font-normal">{jobs.name}</p>
          <div className="flex items-center space-x-2">
            <p className="my-2 w-20 rounded-sm bg-green-100 text-center text-sm text-green-500">
              Full time
            </p>
            <p className="text-xs text-slate-400">Salary: 40000+</p>
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
            {/* <p className="font-medium flex-wrap">{jobs.company</p> */}
            <p className="text-sm font-medium text-slate-500">
              {jobs.vacancies} Vacancies
            </p>
          </div>
          <div className="h-5 w-5 ">
            <Heart className="hover:fill-red-500" color="#6345f7" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
