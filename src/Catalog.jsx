export default function Catalog({loading, catalog}) {
  if (loading) {
  console.log(catalog)
    return <div>Loading...</div>;
  }

  const printElement = catalog.map((item) => {
    return (
      <div className='Eintrag' key={item.id}>
        <div>{item.item}</div>
        <div>{item.price}</div>
        <div>{item.description}</div>
      </div>
    );
  });

  return <div>{printElement}</div>;
}