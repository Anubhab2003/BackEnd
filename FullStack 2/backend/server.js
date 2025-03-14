import express from "express";
import cors from "cors"; // Import CORS

const app = express();
const PORT = 3500;

// Enable CORS to allow requests from frontend
app.use(cors());

app.get("/test", (req, res) => {
  res.send("I LOVE CRICKET");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
