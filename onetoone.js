//Below is an example for defining a basic One to one relationships b/w two collections in mongoose 
const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/testRelations');

const ownerSchema = new mongoose.Schema({
    name: String
});

const houseSchema = new mongoose.Schema({
    area: String,
    city: String,
    pincode: Number,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner' } //relation is defined here.
});

const Owner = mongoose.model('Owner', ownerSchema);
const House = mongoose.model('House', houseSchema);

const owner = new Owner({ name: 'Pratyaksh' });
owner.save();

const house = new House({
    area: 'Niranjanpur',
    city: 'Dehradun',
    pincode: 248001,
    owner: owner._id
});
house.save();


