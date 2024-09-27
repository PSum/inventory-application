import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import AddItems from './AddItems'
import Catalog from './Catalog'

// Add Obisidian entry for git branching

function App() {
  const [loading, setLoading] = useState(true);
  const [catalog, setCatalog] = useState([]); // Moved inside the Catalog component

  async function fetchCatalog () {
    try {
      const response = await axios.get('http://localhost:3000');
      
      // Only update state if new data is different from current data
      if (JSON.stringify(response.data) !== JSON.stringify(catalog)) {
        setCatalog(response.data);
      }
      setLoading(false);
    } catch (error) {
      console.log("Error fetching data", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchCatalog();
  }, []); // Empty dependency array means it runs only once on mount

  return (
    <>
    <Catalog isLoading={loading} catalog={catalog}></Catalog>
    <AddItems onItemAdded={fetchCatalog}></AddItems>
    </>
  )
}

export default App
