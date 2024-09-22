import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)
  const [catalog, setCatalog] = useState([]);

function Catalog () {
  const [loading, setLoading] = useState(true);
  const fetchCatalog = async () => {
  try {
    const response = await axios.get('http://localhost:3000');
    setCatalog(response.data);
    setLoading(false);
  } catch (error){
    console.log("Error fetching data", error);
    setLoading(false);
  }
  }

  useEffect(()=>{
    fetchCatalog();
  },[])

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
