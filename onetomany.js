//One to Many relation in mongoose
//foreign key will be on the many side 
//Collection 1 : Owner
// Collection 2 : House

const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/testRelations');

const ownerSchema = new mongoose.Schema({
    name: String
},
    {
        collection: 'owners'
    });

const houseSchema = new mongoose.Schema({
    area: String,
    city: String,
    pincode: Number,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner' }
},
    {
        collection: 'houses'
    }); 

const Owner = mongoose.model('Owner',ownerSchema);
const House = mongoose.model('House',houseSchema);

const owner1 = new Owner({
    name:'Rohila'
});

owner1.save();

const house1 = new House({
    area: 'Niranjanpur',
    city: 'Dehradun',
    pincode: 248001,
    owner: owner1._id
});
house1.save();


const house2 = new House({
    area: 'Numaish Camp',
    city: 'Saharanpur',
    pincode: 247001,
    owner: owner1._id
});
house2.save();