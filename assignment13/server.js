const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');

// env variables
const PORT = process.env.PORT || 3001;
const DB_URI = 'mongodb+srv://kazemi:iTzLx6C92UZdJjT@nodeproject.hxrt1.mongodb.net/<dbname>?retryWrites=true&w=majority'

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

// Mongoose schema model
const Product = mongoose.model('product',
    {
        "productid": Number,
        "category": String,
        "price": Number,
        "name": String,
        "instock": Boolean
    }
        
);

// HTTP REQUESTS

// Gets all products
app.get('/product/get', (req, res) => {
    Product.find({}, (err, products) => {
        if (err) {
            console.log('Error fetching products', err);  
        } else {
            res.send(products);
        }
    });
});

// Creates a product
app.post('/product/create', (req, res) => {
    const { productId, category, price, name, instock } = req.body
    var product = new Product( { id: productId, category, price, name, instock } );
    io.emit('product', product);

    product.save(err => {
        if (err) {
          res.sendStatus(500)
          console.log('Error while creating product: ', err)
        } else {
          res.sendStatus(200)
        }
      });

});

// Updates a product by ID
app.put('product/update/:id', (req, res) => {
    Product.findOneAndUpdate(
        {
            productId: req.params.productId
        },
        {
            instock: false
        },

        err => {
            if(err) {
                console.log('Error while updating', err);
            }
            else {
                res.sendStatus(200);
            }
        }
    );
});

// Deletes a product by ID
app.delete('/product/delete/:productId', (req, res) => {
    Product.deleteOne({ productId: req.params.productId }, err => {
      if (err) {
          console.log('Delete Error: ', err);
      } else {
          res.sendStatus(200);
      }
    });
  });



io.on('connection', (socket) => {
    console.log('A user is connected');
});

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    console.log('MongoDB database connection', err);
});

// Listener
const server = http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    console.log('Server is listening on port', server.address().port);
  });