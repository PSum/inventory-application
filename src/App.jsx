import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

// Todo: Add different files
// Add Obisidian entry for git branching

function App() {
  const [loading, setLoading] = useState(true);
  const [catalog, setCatalog] = useState([]); // Moved inside the Catalog component

  const fetchCatalog = async () => {
    try {
      const response = await axios.get('http://localhost:3000');
      
      // Only update state if new data is different from current data
      if (JSON.stringify(response.data) !== JSON.stringify(catalog)) {
        setCatalog(response.data);
      }
      setLoading(false);
    } catch (error) {
      console.log("Error fetching data", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCatalog();
  }, []); // Empty dependency array means it runs only once on mount


  function AddItems ({onItemAdded}) {
  const [formData, setFormData] = useState({name: "",email: "",message: ""});
    console.log(formData.name)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const itemName = formData.name;
    const price = formData.email;
    const description = formData.description;
    try{
      const response = await axios.post('http://localhost:3000/addItem', {
        item: itemName,
        price: price,
        description: description,
      });
      console.log(response);
      onItemAdded();
    }
      catch (error){
        console.log(error);
      }
    };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name of item:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>

      <label htmlFor="email">Price:</label>
      <input type="number" id="email" name="email" value={formData.email} onChange={handleChange}/>

      <label htmlFor="message">Description:</label>
      <textarea id="message" name="message" value={formData.message} onChange={handleChange}/>

      <button type="submit">Submit</button>
    </form>
  );
  }


function Catalog() {
  if (loading) {
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

  return (
    <>
    <Catalog></Catalog>
    <AddItems onItemAdded={fetchCatalog}></AddItems>
    </>
  )
}

export default App
