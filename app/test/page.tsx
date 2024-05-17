export default async function Test() {
  const res = await fetch("http://localhost:8000/users");
  const data = await res.json();

  return <h1>{data[0].id}</h1>;
}
