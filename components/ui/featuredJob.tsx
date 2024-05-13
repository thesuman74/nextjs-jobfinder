import data from "@/db.json";
import { FeaturedJobsType } from "@/lib/type";
import FeaturedCard from "../Home/Featured/FeaturedCard";

export default function FeaturedJob() {
  const { featuredjobs }: { featuredjobs: FeaturedJobsType[] } = data;
  return (
    <section>
      <div className="container mt-10 mx-auto max-w-screen-lg ">
        <h1 className="my-4 ml-3 text-3xl font-normal">Featured Jobs</h1>

        <div className="flex flex-wrap justify-between gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {featuredjobs.map((item) => (
            <FeaturedCard jobs={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
