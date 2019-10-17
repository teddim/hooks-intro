import React, {useState} from 'react';
import "./App.css";

const EntryForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [breed, setBreed] = useState('siamese');
  return (
    <div>
      <input
        type="text"
        placeholder="What is your cat's name?"
        value={name}
        onChange={(e) => setName(e.target.value)}>
      </input>
      <input
        type="number"
        placeholder="How old is the cat?"
        value={age}
        onChange={(e) => setAge(e.target.value)}>
      </input>
      <input
        type="text"
        placeholder="What is your cat's breed?"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}>
      </input>
      <button type="submit">Submit</button>
    </div>
  )
}

export default EntryForm;
