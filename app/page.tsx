/** Add your relevant code here for the issue to reproduce */
async function getData(username) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${username}/albums`);
  return res.json();
}

export default async function Home() {
  const username = 1;
  const dataPromise = getData(username);

  // Wait for the promises to resolve
  const [data] = await Promise.all([dataPromise]) as any[];

  return (
    <>
      <h1>{data.length} Items</h1>
      {data.map(x => <pre>{JSON.stringify(x)}</pre>)}
    </>
  );
}