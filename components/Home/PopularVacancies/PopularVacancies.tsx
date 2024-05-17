export async function PopularSection() {
  // const { popularvacancies }: { popularvacancies: Item[] } = data;

  const res = await fetch("http://localhost:8000/popularvacancies", {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  console.log(data);

  return (
    <div className="grid grid-cols-3 gap-3 ">
      {data.map((item: PopularVacanciesType) => {
        return (
          <div className="bg-white " key={item.id}>
            <h2 className="font-medium text-black">{item.name}</h2>
            <p className="text-slate-600 text-sm">
              {item.vacancies}&nbsp;vacancies
            </p>
          </div>
        );
      })}
    </div>
  );
}

import { PopularVacanciesType } from "@/lib/type";
import React, { Suspense } from "react";

const PopularVacancies = () => {
  return (
    <section className="mx-5" id="most-popular-vacancies my-5">
      <div className="container max-w-screen-lg px-5 md:mx-auto my-5 flex flex-col justify-center gap-10 py-5">
        <div className="ml-3">
          <h1 className="text-3xl font-normal ">Popular vacancies</h1>
        </div>
        <Suspense fallback={<p>Loading feed...</p>}>
          <PopularSection />
        </Suspense>
      </div>
    </section>
  );
};

export default PopularVacancies;
