import { FeaturedJobsType } from "@/lib/type";
import { Annoyed, Heart } from "lucide-react";
import React from "react";
import data from "@/db.json";
import { topCompaniesTypes } from "@/lib/type";
import TopCompaniesCard from "../../ui/cards/TopCompaniesCard";

// const TopCompanies = ({ jobs }: { jobs: FeaturedJobsType }) => {
export default function TopCompanies() {
  const { TopCompanies }: { TopCompanies: topCompaniesTypes[] } = data;
  return (
    <section>
      <div className="container mx-auto max-w-screen-lg">
        <h1 className="my-4 ml-3 text-3xl font-normal">Top Companies</h1>

        <div className=" grid grid-cols-3 gap-5">
          {/* card starts from here  */}
          {TopCompanies.map((comp) => (
            <TopCompaniesCard item={comp} key={comp.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

// <section className="px-40">
//       <div>
//         <h1 className="my-4 ml-8 text-3xl font-normal">Featured Jobs</h1>
//       </div>
//       <div className="container mx-auto grid gap-3  md:grid-cols-2 lg:grid-cols-3">
//         {/* card starts from here  */}
//         {TopCompanies.map((comp) => (
//           <TopCompaniesCard item={comp} key={comp.id} />
//         ))}
//       </div>
//     </section>
