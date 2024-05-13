export default function HeroSection() {
  return (
    // <!-- hero section  -->
    <div className=" w-full mx-0 my-0 bg-gray-100 ">
      <div className="h-[500px] w-auto ">
        <div>
          <div className="mx-auto mt-4 flex  space-x-10 h-1/2 w-auto max-w-screen-lg flex-row ">
            <div className="h-[300px] w-1/2  space-y-5 flex flex-col justify-center p-5 ">
              <h1 className="text-[40px] text-black font-medium ">
                Find a job that suits your interest and skill
              </h1>
              <p className="text-slate-400">
                Just add your desired image size (width & height) after our URL,
                and you'll get a random image.
              </p>
            </div>

            <div className="h-[300px] w-1/2  ">
              <img
                className="h-full w-auto rounded-md"
                src="https://picsum.photos/600/400"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-4 h-[150px] w-auto max-w-screen-lg ">
          <Cards />
        </div>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="container mx-auto grid max-w-screen-lg grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      <CardLayout number={1213515} title={"surjon"} />
      <CardLayout number={1213515} title={"surjon"} />
      <CardLayout number={1213515} title={"surjon"} />
      <CardLayout number={1213515} title={"surjon"} />
    </div>
  );
}
interface CardLayoutProps {
  number: number;
  title: string;
}

function CardLayout({ number, title }: CardLayoutProps) {
  return (
    <div className="container mx-auto grid max-w-screen-lg grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      <div className="mx-auto my-7 flex max-w-[18rem] items-center space-x-8 rounded-md bg-white p-6 shadow-lg">
        <div className="h-12 w-12 rounded-md bg-blue-300">
          <img className="rounded-md" src="https://picsum.photos/100" />
        </div>
        <div>
          <h1 className="text-md font-medium text-black">{number}</h1>
          <p className=" text-sm text-slate-500">{title}</p>
        </div>
      </div>
    </div>
  );
}
