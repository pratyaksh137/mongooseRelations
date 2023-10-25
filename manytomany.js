const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/testRelations');

const ownerSchema = new mongoose.Schema({
    name: String
}, {
    collection: 'owners'
});

const houseSchema = new mongoose.Schema({
    city: String,
    pincode: Number
}, { collection: 'houses' });

//Below schema defined to create an intersection collection between owners and houses.
const houseowner = new mongoose.Schema({
    houseOwner: { type: mongoose.Schema.Types, ref: 'Owner' },
    ownerHouse: { type: mongoose.Schema.Types, ref: 'House' }
});

//data add krna 

