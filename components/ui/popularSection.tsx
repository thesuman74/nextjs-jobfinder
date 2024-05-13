import data from "@/db.json";

interface Item {
  id: number;
  name: string;
  vacancies: number;
}

export function PopularSection() {
  const { popularvacancies }: { popularvacancies: Item[] } = data;

  return (
    <section className="mx-5" id="most-popular-vacancies">
      <div className="container max-w-screen-lg px-5 md:mx-auto my-5 flex flex-col justify-center gap-10 py-5">
        <div className="ml-3">
          <h1 className="text-3xl font-normal ">Popular vacancies</h1>
        </div>
        <div className="grid grid-cols-3 gap-3 ">
          {popularvacancies.map((item) => {
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
      </div>
    </section>
  );
}

export function PopularCategories() {
  const { popularvacancies }: { popularvacancies: Item[] } = data;

  return (
    <section className="mx-5" id="most-popular-categories">
      <div className="container max-w-screen-lg px-5 md:mx-auto my-5 flex flex-col justify-center gap-10 py-5">
        <div className="ml-3 flex justify-between">
          <h1 className="text-3xl font-normal">Popular vacancies</h1>
          <button className="border px-4 py-1 rounded-md text-blue-700 hover:bg-blue-600 hover:text-white ">
            View All
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3 ">
          {popularvacancies.map((item) => {
            return (
              <div
                className="flex space-x-2 rounded-md bg-white items-center"
                key={item.id}
              >
                <img
                  className="h-auto w-7 mx-1 rounded-md "
                  src="https://picsum.photos/100"
                />
                <div>
                  <h2 className="font-medium text-black">{item.name}</h2>
                  <p className="text-slate-600 text-sm">
                    {item.vacancies} vacancies
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
