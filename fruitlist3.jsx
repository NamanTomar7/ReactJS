import { useState } from "react";

export default function FruitList3(){
    const [fruits, setfruits] = useState([
        {id : 1, name: "Apple", color:"Red"},
        {id: 2, name:"Banana", color:"Yellow"}
    ]);
    const [newName, setNewName] = useState("");
    const [newColor, setNewColor] = useState("");

    function addFruit(){
        if(newName.trim() !== "" && newColor.trim !==""){
            const newFruit ={
                id: Date.now(),
                name: newName,
                color: newColor
            };
        setfruits([...fruits, newFruit]);
        setNewName("");
        setNewColor("");
        }           
    }

    function removeFruit(indexToRemove){
        setfruits(fruits.filter((fruit, index) => index !== indexToRemove));
    }

    return (
        <div>
            <h1>Fruit Object List</h1>
            <input type="text" 
                value={newName}
                onChange={(e)=> setNewName(e.target.value)}
                placeholder="Enter New Fruit Name"
            />
            <input type="text" 
                value={newColor}
                onChange={(e) => setNewColor(e.target.value)}
                placeholder="Enter New Fruit color"
            />
            <button onClick={addFruit}>Add</button>
            <ul>
                {fruits.map((fruit) =>(
                    <li key={fruit.id}>                      
                        {fruit.id}-{fruit.name}-{fruit.color}
                        <button onClick={() => removeFruit(fruit.id)}> ❌ </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}