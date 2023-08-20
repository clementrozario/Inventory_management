const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const ItemController = require('./controllers/ItemController');
const sequelize = require('./config/database'); 
const Item = require('./models/Item'); 


app.use(bodyParser.urlencoded({ extended: true }));


sequelize.sync({ force: false }) // Set force to true if you want to drop and recreate tables
    .then(() => {
        console.log('Database synced');
    })
    .catch(error => {
        console.error('Error syncing database:', error);
    });

// Defining the routes
app.get('/', async (req, res) => {
    try {
        const items = await Item.findAll();
        res.render('index.ejs', { items });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

app.post('/addItem', ItemController.addItem);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post('/addItem', ItemController.addItem);
app.delete('/deleteItem/:itemId', ItemController.deleteItem);
app.post('/buyItem/:itemId/:quantity', ItemController.buyItem);