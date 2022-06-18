import express from 'express';
import cors from 'cors';
import { renderer } from './renderer';

const app = express();

app.use(cors());

app.use(express.static('dist'));

const PORT = process.env.SERVER_PORT || 2000;

app.get('*', (req, res) => {
  res.status(200).send(renderer());
});
app.listen(PORT, () => {
  console.log(`Server is listing on port : ${PORT}`);
});
