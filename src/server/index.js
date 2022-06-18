import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.static('dist'));

const PORT = process.env.SERVER_PORT || 2000;

app.listen(PORT, () => {
  console.log(`Server is listing on port : ${PORT}`);
});
