import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("stateValue");

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>This is some text for display</h2>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
