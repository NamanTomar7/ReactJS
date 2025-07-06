import { useState } from "react";

export default function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [age, setAge] = useState("");

  return (
    <div className="App">
      <h1>Conditional Rendering Example</h1>
      {isLoggedIn ? (
        <p>Welcome back, user!</p>
      ) : (
        <p>Please log in.</p>
      )}
      
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log out" : "Log in"}
      </button>
      <br />
      <input type="number" 
      value={age} 
      placeholder="Write Your Age Here"
      onChange={(e) => setAge(e.target.value)}
      />
      {age>=18?(
        <p>You are an adult</p>
      ):(
        <p>You are not an adult yet</p>
      )
      }
    </div>
  );
}
