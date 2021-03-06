const express = require('express');
const products = require('./data/products')
const PORT = 5000;

const app = express();

app.get('/', (req, res)=>{
    res.send('Hello from backend')
})

app.get('/api/products', (req, res)=>{
    res.json(products);
})

app.get('/api/products/:id', (req, res)=>{

    // const product = products.find(p => p._id ===req.params['id'] );
    // res.json(product);
    res.json(req.params)
})
 

app.listen(PORT, 
    console.log(`Server running on ${PORT}`)
)