// to get individual item

async function getNote(noteId: string) {
  const res = await fetch(`http://localhost:8001/users/${noteId}`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);

  return (
    <div>
      <h1>Notes/{note.id}</h1>
      <div className="container max-w-sm bg-yellow-300 shadow-md rounded-sm">
        <h3>{note.name}</h3>
        <h5>{note.email}</h5>
        <p>{note.number}</p>
      </div>
    </div>
  );
}
