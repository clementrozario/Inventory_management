const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const ItemController = require('./controllers/ItemController');
const sequelize = require('./config/database'); // Import your Sequelize instance
const Item = require('./models/Item'); // Import the Item model

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Sync models with the database
sequelize.sync({ force: false }) // Set force to true if you want to drop and recreate tables
    .then(() => {
        console.log('Database synced');
    })
    .catch(error => {
        console.error('Error syncing database:', error);
    });

// Define routes
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

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post('/addItem', ItemController.addItem);
app.delete('/deleteItem/:itemId', ItemController.deleteItem);
app.post('/buyItem/:itemId/:quantity', ItemController.buyItem); // New route for buying