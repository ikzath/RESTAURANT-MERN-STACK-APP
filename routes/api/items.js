const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/items');

//@route GET API/items
//@desc API all items
//access public
router.get('/', (req,res)=>{
  Item.find()
     .sort({ date: -1 })
     .then(items => res.json(items));

});

// @route GET API7 items/:id
// @description Get single book by id
// @access Public
    router.get('/:id', (req, res) => {
    Item.findById(req.params.id)
      .then(item => res.json(item))
      .catch(err => res.status(404).json({ msg: 'No item found' }));
  });


    //@route  POST API/items
    //@desc API all items
    // access private
    router.post('/', (req, res)=>{
      const newItem = new Item({
          name: req.body.name,
          description: req.body.description,
          price: req.body.price
        });
      newItem.save().then(item => res.json(item));    
      });


    // @route GET api/books/:id
    // @description Update book
    // @access Public
    router.put('/:id', (req, res) => {
        Item.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
        );
    });
    
  
//@route  DELETE API/items
//@desc   DELETE A iTEM
//access private
router.delete('/:id', (req,res)=>{
    Item.findById(req.params.id)
    .then(item => item.remove().then(()=> res.json({ msg: 'deleted succesfully' })))
    .catch(err => res.status(404).json({ success: false}));
   });


   
module.exports = router;