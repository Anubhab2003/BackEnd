import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [content, setContent] = useState(""); // Initialize as an empty string

  useEffect(() => {
    axios
      .get("http://localhost:3500/test") // Specify full URL with the backend port
      .then((response) => setContent(response.data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setContent("Error fetching data"); // Display an error message in the UI
      });
  }, []);

  return (
    <>
      <h1>{content}</h1>
    </>
  );
}

export default App;
