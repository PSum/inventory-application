import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  function AddItems () {
  const [formData, setFormData] = useState({name: "",email: "",message: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name of item: ${formData.name}, Price: ${formData.email}, Description: ${formData.message}`
    );
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
    <AddItems></AddItems>
    </>
  )
}

export default App
