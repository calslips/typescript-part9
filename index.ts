import express from 'express';
import { calculator, Operation } from './calculator';
const app = express();

interface ReqBody {
  value1: number,
  value2: number,
  op: Operation
}

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.post('/calculate', (req, res) => {
  const { value1, value2, op }: ReqBody = req.body as ReqBody;

  const result = calculator(value1, value2, op);
  res.send(result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});