const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create new schema
const itemSchema = new Schema ({

   name: {
       type: String,
       required: true
   },
   
   description: {
       type: String,  
       required: true
    },
    
    price: {
        type: String,
        required: true        
    },

    date:{
        type: Date,
        default: Date.now
    }

});

module.exports = Item = mongoose.model('menu-items', itemSchema);