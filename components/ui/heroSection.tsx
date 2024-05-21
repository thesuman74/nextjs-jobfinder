import React from "react";

export default function HeroSection() {
  return (
    <section className="">
      <div className="w-full mx-0 my-0 bg-gray-100">
        <div className="max-w-screen-lg mx-auto p-4">
          <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10">
            <div className="flex-1 flex flex-col justify-center p-5">
              <h1 className="text-3xl text-black font-medium">
                Find a job that suits your interest and skill
              </h1>
              <p className="text-slate-400">
                Just add your desired image size (width & height) after our URL,
                and you'll get a random image.
              </p>
            </div>
            <div className="flex-1 mt-3">
              <img
                className="h-full w-full rounded-md object-cover"
                src="https://picsum.photos/600/400"
                alt="Hero"
              />
            </div>
          </div>
          <div className="mt-4">
            <Cards />
          </div>
        </div>
      </div>
    </section>
  );
}

function Cards() {
  return (
    <div className="container mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
      <CardLayout number={1213515} title="Jobs" />
      <CardLayout number={3515} title="Companies" />
      <CardLayout number={13515} title="Candidates" />
      <CardLayout number={1213} title="New Jobs" />
    </div>
  );
}

interface CardLayoutProps {
  number: number;
  title: string;
}

function CardLayout({ number, title }: CardLayoutProps) {
  return (
    <div className="flex items-center space-x-2 rounded-md bg-white p-4 shadow-lg">
      <div className="h-12 w-12 rounded-md bg-blue-300 flex-shrink-0">
        <img
          className="rounded-md w-full h-full object-cover"
          src="https://picsum.photos/100"
          alt="Icon"
        />
      </div>
      <div>
        <h1 className="text-md font-medium text-black">{number}</h1>
        <p className="text-sm text-slate-500">{title}</p>
      </div>
    </div>
  );
}
