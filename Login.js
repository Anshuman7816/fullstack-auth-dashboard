import axios from "axios";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await axios.post("http://localhost:8000/login", {
      username,
      password,
    });
    localStorage.setItem("token", res.data.access_token);
    alert("Login successful");
  };

  return (
    <div>
      <h2>Login</h2>
      <input onChange={(e)=>setUsername(e.target.value)} placeholder="Username"/>
      <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
