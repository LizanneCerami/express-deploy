import functions from "firebase-functions";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json()); // needed for POST and PATCH

app.get('/test', (req, res) => {
  res.send("My cloud function API is working! 🤯");
});

export const api = functions.https.onRequest(app);
