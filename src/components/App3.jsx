import { useState } from "react";
export default function App3() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [msg, setMsg] = useState();
  const handleSubmit = () => {
    if (email === "john@gmail.com" && password === "1234") {
      setMsg("Welcome John");
    } else {
      setMsg("Access Denied");
    }
  };
  return (
    <div>
      <h3>This is App3</h3>
      {msg}
      <p>
        <input
          type="text"
          placeholder="Enter Email or Username"
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
