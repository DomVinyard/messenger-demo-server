import { MessageType } from './server';
import fs from 'fs';

const MESSAGES_JSON = 'src/data/messages.json';

export const getMessages = async () => {
  let rawdata = fs.readFileSync(MESSAGES_JSON);
  let messages = JSON.parse(`${rawdata}`);
  return messages;
};

export const postMessage = async (message: MessageType) => {
  let messages = JSON.parse(`${fs.readFileSync(MESSAGES_JSON)}`);
  let data = JSON.stringify([...messages, message]);
  fs.writeFileSync(MESSAGES_JSON, data);
};
