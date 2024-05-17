import { Heart } from "lucide-react";
import React from "react";
import data from "@/db.json";
import { topCompaniesTypes } from "@/lib/type";

// interface topCompaniesTypes {
//   id: number;
//   company: string;
//   location: String;
//   open_position: number;
// }

const TopCompaniesCard = ({ item }: { item: topCompaniesTypes }) => {
  //   const { TopCompanies }: { TopCompanies: topCompaniesTypes[] } = data; yesto chai main container ma garney
  return (
    <div className="space-x-5">
      <div
        className="m-3 min-w-60 max-w-sm flex-1 flex-col rounded-lg border bg-white p-2 shadow-sm hover:shadow-lg"
        key="{item.id}"
      >
        <div className="space-y-2">
          <div className="flex items-center space-x-5 ">
            <div className="h-16 w-16 rounded-lg bg-red-500">
              <img
                className="h-full w-full rounded-lg object-cover"
                src="https://picsum.photos/100"
                alt="photo"
              />
            </div>
            <div>
              <div className="flex items-center justify-between space-x-4 ">
                <p className="text-sm  font-medium">{item.company}</p>
                <p className="my-2 w-20 rounded-sm bg-pink-100 text-center text-sm text-pink-500">
                  Featured
                </p>
              </div>
              <p className="text-sm font-medium text-slate-500">
                {item.location}
              </p>
            </div>
            {/* <div className="h-5 w-5">
              <Heart className="hover:fill-red-500" color="#6345f7" />
            </div> */}
          </div>

          <div className="mx-auto grid rounded-sm bg-sky-200 p-1 text-center">
            <p className="font-medium text-sky-600">Open Positions (3)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCompaniesCard;
