  import { useState } from 'react'
import axios from 'axios'

  export default function AddItems ({onItemAdded}) {
  const [formData, setFormData] = useState({name: "",email: "",message: ""});
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