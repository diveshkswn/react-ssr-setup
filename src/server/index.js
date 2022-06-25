import express from 'express';
import cors from 'cors';
import { renderer } from './renderer';
import { fetchPopularRepos } from '../utils/api';

const app = express();

app.use(cors());

app.use(express.static('dist'));

const PORT = process.env.SERVER_PORT || 2000;

app.get('*', (req, res) => {
  fetchPopularRepos().then((data) => {
    res.status(200).send(renderer({ initialData: data.items?.slice(0, 10) }));
  });
});
app.listen(PORT, () => {
  console.log(`Server is listing on port : ${PORT}`);
});
