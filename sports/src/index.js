import express from 'express';

const app = express();
const port = 8000

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
})