import axios from "axios";
import { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    await axios.post("http://localhost:8000/signup", {
      username,
      password,
    });
    alert("Account created");
  };

  return (
    <div>
      <h2>Signup</h2>
      <input onChange={(e)=>setUsername(e.target.value)} />
      <input type="password" onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={signup}>Signup</button>
    </div>
  );
}

export default Signup;
