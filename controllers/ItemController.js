// controllers/ItemController.js
const Item = require('../models/Item');

exports.addItem = async (req, res) => {
  try {
    const { itemName, description, price, quantity } = req.body;
    await Item.create({ itemName, description, price, quantity });
    res.redirect('/'); // Redirect to the main page after adding an item
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};


exports.buyItem = async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const quantity = parseInt(req.params.quantity);

    const item = await Item.findByPk(itemId);
    if (item) {
      item.quantity -= quantity;
      if (item.quantity < 0) {
        item.quantity = 0; // Ensure the quantity doesn't go negative
      }
      await item.save();
      res.sendStatus(200); // Send a success status
    } else {
      res.status(404).send('Item not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};


// controllers/ItemController.js
// ... (existing code) ...

exports.deleteItem = async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const item = await Item.findByPk(itemId);

    if (item) {
      await item.destroy();
      res.sendStatus(200); // Send a success status
    } else {
      res.status(404).send('Item not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
