import {useState} from 'react';
// todo: add delete route to backend and finish handleSubmit function so it actually deletes the searched Item

export default function RemoveItems (){
    const [formData, setFormData] = useState("");
  const handleChange = (event) => {
    const { value } = event.target;
    setFormData(() => (value));
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
//    try{
//      const response = await axios.post('http://localhost:3000/addItem', {
//        item: itemName,
//        price: price,
//        description: description,
//      });
//      onItemAdded();
//    }
//      catch (error){
//        console.log(error);
//      }
    };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="itemToRemove">Type Itemname to remove:</label>
      <textarea id="itemToRemove" name="itemToRemove" value={formData} onChange={handleChange}/>

      <button type="submit">Remove Item</button>
    </form>
  );
}