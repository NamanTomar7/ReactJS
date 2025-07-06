import { useState } from "react";
import App from "./condition";
import ConfirmPass from "./pass";
import Fruitlist from "./fruitlist";
import FruitList2 from "./fruitlist2";
import FruitList3 from "./fruitlist3";

export default function Hello(){
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    
    <div className="App">
      <h1>Controlled Input Example</h1>
      <input 
        tyupe="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <input type="number" 
        value={age} 
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter Your Age here"
      />
      <p>Your name is: {name} and you are {age} years old</p>
      <App/>
      <ConfirmPass/>
      <Fruitlist/>
      <FruitList2/>
      <FruitList3/>
    </div>
  );
}