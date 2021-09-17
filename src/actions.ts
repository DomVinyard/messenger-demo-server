import { MessageType } from './server';
import fs from 'fs';
const MESSAGES_JSON = 'src/data/messages.json';

export const getMessages = async () => {
  const messages = fs.readFileSync(MESSAGES_JSON);
  return JSON.parse(`${messages}`);
};

export const postMessage = async (message: MessageType) => {
  const messages = JSON.parse(`${fs.readFileSync(MESSAGES_JSON)}`);
  const updatedMessages = [...messages, message];
  fs.writeFileSync(MESSAGES_JSON, JSON.stringify(updatedMessages));
};
