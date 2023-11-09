const express = require('express');
const uniqid = require('uniqid');
const cors = require('cors');
const morgan = require('morgan'); 
const PORT = 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

const data = [
  { id: uniqid(), breed: 'Beagle', image_url: 'https://images.dog.ceo/breeds/beagle/n02088364_2652.jpg' },
  { id: uniqid(), breed: 'Chihuahua', image_url: 'https://images.dog.ceo/breeds/chihuahua/black_chihuahua.jpg' },
  { id: uniqid(), breed: 'Maltese', image_url: 'https://images.dog.ceo/breeds/maltese/n02085936_1549.jpg' },
  { id: uniqid(), breed: 'Dachshund', image_url: 'https://images.dog.ceo/breeds/chihuahua/black_chihuahua.jpg' },
];

app.get("/", (req, res) => {
  res.send('Hello, World!');
})

app.get("/dogs", (req, res) => {
  res.json(data);
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));