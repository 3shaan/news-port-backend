const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const port = 5000;
const catagory = require('./Catagory.json');
const news = require('./news.json');

app.get('/', (req, res) => {
    res.send('hello word')
});

app.get('/catagory', (req, res) => {
    res.send(catagory)
});

app.get('/news/:id', (req, res) => {
    const selectedNews = news.find((n) => n._id === req.params.id);
    res.send(selectedNews);
    
});
app.get('/catagories/:id', (req, res) => {
    if (req.params.id === '08') {
      res.send(news);
    } else {
      const selectedNews = news.filter((n) => n.category_id === req.params.id);
      res.send(selectedNews);
    }
});
app.get('/news', (req, res) => {
    res.send(news);
});
app.listen(port, () => {
    console.log('example server', port);
})