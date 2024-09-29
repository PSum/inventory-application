import {useState} from 'react';
import axios from 'axios';
// todo: learn how to use grid with css again

export default function RemoveItems ({onItemRemoved}){
    const [formData, setFormData] = useState("");
  const handleChange = (event) => {
    const { value } = event.target;
    setFormData(() => (value));
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    try{
      await axios.delete('http://localhost:3000/deleteItem', {
        params: {itemName: formData}
      });
      onItemRemoved();
    }
      catch (error){
        console.log(error);
      }
    };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="itemToRemove">Type Itemname to remove:</label>
      <textarea id="itemToRemove" name="itemToRemove" value={formData} onChange={handleChange}/>

      <button type="submit">Remove Item</button>
    </form>
  );
}