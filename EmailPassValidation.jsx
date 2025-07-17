import { useState } from "react";

export default function FormHandle(){
  const [form, setForm] = useState({email:"", password:""});
  const [error, setError] =  useState("");

  function handleSubmit(e){
    e.preventDefault();

    if(form.email.trim() ==""){
      setError("Email can not be empty!");
      return 
    }

    if(form.password.length < 6){
      setError("Password length must be atleast 6 characters")
      return 
    }

    setError("");
    alert(`Your email is ${form.email} and password is ${form.password}`);
    setForm({email:"", password:""});
  }

  return(
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={form.email}
        onChange={(e) => setForm({...form, email: e.target.value})}
        placeholder="Enter Your Email..."
      />
      <input 
        type="password" 
        value={form.password}
        onChange={(e)=> setForm({...form, password:e.target.value})}
        placeholder="Enter Your Password"  
      />
      <button type="submit">Submit</button>

       
      {error && <p style={{color:"red"}}>{error}</p> }
      
    </form>
  );
}