import { useState } from "react";
export default function App4() {
  const [user, setUser] = useState({});
  const [msg, setMsg] = useState();

  const handleSubmit = () => {
    if (user.email === "john@gmail.com" && user.password === "1234") {
      setMsg("Welcome John");
    } else {
      setMsg("Access Denied");
    }
  };
  return (
    <div>
      <h3>This is App4</h3>
      {msg}
      <p>
        <input
          type="text"
          placeholder="Enter Email or Username"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
