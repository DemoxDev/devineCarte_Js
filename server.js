import express from 'express';
const app = express();

import ejs from 'ejs';

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
});