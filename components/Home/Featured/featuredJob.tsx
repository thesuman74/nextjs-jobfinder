import data from "@/db.json";
import { FeaturedJobsType } from "@/lib/type";
import FeaturedCard from "../../ui/cards/FeaturedCard";

export default async function FeaturedJob() {
  // const { featuredjobs }: { featuredjobs: FeaturedJobsType[] } = data; to fetch data directly from db.json

  const featureRes = await fetch("http://localhost:8000/featuredjobs", {
    next: { revalidate: 10 },
  });
  const featureResData = await featureRes.json();

  // console.log(featureResData);

  return (
    <section>
      <div className="container  mx-auto max-w-screen-lg my-5 ">
        <h1 className="my-4 ml-3 text-3xl font-normal">Featured Jobs</h1>

        <div className="flex flex-wrap justify-between gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {featureResData.map((item: FeaturedJobsType) => (
            <FeaturedCard jobs={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
