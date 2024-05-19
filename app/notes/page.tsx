import Link from "next/link";
import CreateNote from "./[id]/CreateNote";

export default async function NotesPage() {
  const res = await fetch("http://localhost:8001/users", {
    next: { revalidate: 10 },
  });
  const data = await res.json();

  console.log(data);

  return (
    <div className="my-10">
      <h1 className="bg-red-300 w-max mx-auto   text-3xl">Notes</h1>
      <div className=" max-w-xl mx-auto flex flex-wrap justify-between gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {data.map((note: { id: any }) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
      <CreateNote />
    </div>
  );
}

function Note({ note }: any) {
  const { id, name, email, number } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className="container bg-yellow-300 shadow-md rounded-sm">
        <h2>{name}</h2>
        <h5>{email}</h5>
        <p>{number}</p>
      </div>
    </Link>
  );
}
