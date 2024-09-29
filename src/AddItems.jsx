import { useState } from 'react'
import axios from 'axios'

  export default function AddItems ({onItemAdded}) {
  const [formData, setFormData] = useState({item: "",price: "",description: ""});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const itemName = formData.item;
    const price = formData.price;
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
      <label htmlFor="item">Name of item:</label>
      <input type="text" id="item" name="item" value={formData.item} onChange={handleChange}/>

      <label htmlFor="price">Price:</label>
      <input type="number" id="price" name="price" value={formData.price} onChange={handleChange}/>

      <label htmlFor="description">Description:</label>
      <textarea id="description" name="description" value={formData.description} onChange={handleChange}/>

      <button type="submit">Submit</button>
    </form>
  );
  }