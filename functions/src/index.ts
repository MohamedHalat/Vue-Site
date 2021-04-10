import * as functions from "firebase-functions";
import * as express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

exports.app = functions.https.onRequest(app);
