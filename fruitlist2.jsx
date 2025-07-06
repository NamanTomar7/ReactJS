import { useState } from "react";

export default function FruitList2(){

    const [fruits , setFruits] = useState([]);
    const [newFruit, setNewFruit] = useState("");

    const addFruit = () =>{
        if(newFruit.trim() !== ""){
            setFruits([...fruits, newFruit]);
            setNewFruit("");
        }
    };

    const removeFruit = (indexToRemove) =>{
        setFruits(fruits.filter((fruit,index) => index!== indexToRemove));
    };

    return (
    <div>
        <h1>Dynamic Fruit List 🍇</h1>
        <input 
            type="text" 
            value={newFruit}
            onChange={(e) => setNewFruit(e.target.value)}
            placeholder="Enter fruit name"
        />
        <button onClick={addFruit}>Add</button>

        <ul>
            {fruits.map((fruit, index) => (
            <li key={index}>
                {fruit} 
                <button onClick={() => removeFruit(index)}>❌</button>
            </li>
            ))}
        </ul>
    </div>
    );

}