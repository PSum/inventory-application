import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)
  const [catalog, setCatalog] = useState([]);
  const [loading, setLoading] = useState(true);

function Catalog () {
  const fetchCatalog = async () => {
  try {
    const response = await axios.get('http://localhost:3000');
    setCatalog(response.data);
    console.log(response.data);
  } catch (error){
    console.log("Error fetching data", error);
  }
  }
  //useEffect(()=>{
    //fetchCatalog();
  //},[])
  if (loading == true ){
    fetchCatalog();
    setLoading(false);
  }

  const printElement = catalog.map((item) => {
    return (<div key={item.id}>
      <div>{item.text}</div>
      <div>{item.price}</div>
      <div>{item.description}</div>
    </div>)
  });

  return (
    printElement
  )

}


  return (
    <>
    <Catalog></Catalog>
    </>
  )
}

export default App
