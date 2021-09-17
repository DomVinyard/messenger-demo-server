import cors from 'cors';
import express from 'express';
import users from './data/users.json';
import { getMessages, postMessage } from './actions';

const PORT_NUMBER = 4000;
const app = express();

app.use(cors());
app.use(express.json());

export type MessageType = {
  content: string;
  recipientId: string;
  senderId: string;
  timestamp: number;
  id: string;
};

app.get('/messages', async (req, res) =>
  res.status(200).json(await getMessages())
);

app.post('/messages', async (req, res) => {
  await postMessage(req.body);
  res.sendStatus(200);
});

app.get('/users', (req, res) => {
  res.status(200).json(users);
});

app.listen(PORT_NUMBER, () => {
  console.log(
    `If you can see this message in the console, this means that you successfully started the server! \n\nYou can see what comes back by visiting localhost:${PORT_NUMBER} in your browser. \n\nChanges will not be processed unless you restart your server (close and restart). \n\nThe server is currently listening for requests - press Ctrl + C to quit.`
  );
});
