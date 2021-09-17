import cors from "cors";
import express from "express";
import { v4 as uuid } from "uuid";

import messages from "./data/messages.json";
import users from "./data/users.json";

const PORT_NUMBER = 4000;
const app = express();

app.use(cors());

app.get("/messages", (req, res) => {
  res.status(200).json(messages);
});

app.post("/messages", (req, res) => {
  console.log(req);

  if (!req.body) {
    res.status(400).json({ message: "Missing request body" });
  }

  const { content, recipientId, senderId } = req.body;

  if (!content || !recipientId || !senderId) {
    res.status(400).json({ message: "Missing required fields" });
  }

  const message = {
    content,
    recipientId,
    senderId,
    timestamp: new Date().getTime(),
    id: uuid(),
  };

  // store the message in the DB

  res.status(200).json(messages);
});

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.listen(PORT_NUMBER, () => {
  console.log(
    `If you can see this message in the console, this means that you successfully started the server! \n\nYou can see what comes back by visiting localhost:${PORT_NUMBER} in your browser. \n\nChanges will not be processed unless you restart your server (close and restart). \n\nThe server is currently listening for requests - press Ctrl + C to quit.`
  );
});
