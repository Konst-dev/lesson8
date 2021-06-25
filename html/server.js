const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const fs = require('fs');

app.use(express.static('.'));
app.use(bodyParser.json());

app.get('/catalog', (req, res) => {
  fs.readFile('./catalog.json', (err, data) => {
    if (err) {
      throw Error(err);
    } else {
      res.send(data);
    }
  })
});

app.post('/addToCart', (req, res) => {
  fs.readFile('cart.json', 'utf8', (err, data) => {
    if (err) {
      res.send('{"result": 0}');
    } else {
      const cart = JSON.parse(data);
      const item = req.body;
      //  console.log(req);
      console.log(item);

      cart.push(item);

      fs.writeFile('cart.json', JSON.stringify(cart), (err) => {
        if (err) {
          res.send('{"result": 0}');
        } else {
          res.send('{"result": 1}');
        }
      });
    }
  });
});



app.post('/deleteFromCart', (req, res) => {
  const item = req.body;
  fs.writeFile('cart.json', JSON.stringify(item), (err) => {
    if (err) {
      res.send('{"result": 0}');
    } else {
      res.send('{"result": 1}');
    }
  });

});

app.post('/addAction', (req, res) => {
  const item = req.body;
  fs.appendFile('stats.json', JSON.stringify(item), (err) => {
    if (err) {
      res.send('{"result": 0}');
    } else {
      res.send('{"result": 1}');
    }
  });
  var s = "\n";
  fs.appendFileSync('stats.json', s, (err) => { });
});

app.listen(3000, () => { console.log('express server started on 3000 port') });