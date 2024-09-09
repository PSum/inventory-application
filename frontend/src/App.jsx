import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)
  const [catalog, setCatalog] = useState([]);

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
  useEffect(()=>{
    fetchCatalog();
  },[])
}


  return (
    <>
    <Catalog></Catalog>
    </>
  )
}

export default App
