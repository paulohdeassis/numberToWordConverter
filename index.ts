import express, { Express, Request, Response } from 'express';
import { num2WordsController } from './controller/num2WordsController';

const app: Express = express();
app.use(express.json())
const port = 3000;

app.post('/', (req: Request, res: Response) => {
  const number = req.body.number

  const response = num2WordsController(number)
    res.send(response);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

