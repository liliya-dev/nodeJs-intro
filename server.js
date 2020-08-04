const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.json({ name: '1', x: '2789' });
})

app.use(express.static('build'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})