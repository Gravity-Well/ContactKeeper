const express=require('express');
const router=express.Router();


// @route   Get api/contacts (note, the / below refers to api/users, not root of app )
// @desc    Get all user contacts
// @access  Private
router.get('/',(req,res)=>{
    res.send('Get all contacts');
});

// @route   Post api/contacts (note, the / below refers to api/users, not root of app )
// @desc    Add new contact
// @access  Private
router.post('/',(req,res)=>{
    res.send('Add contact');
});

// @route   PUT api/contacts (note, the / below refers to api/users, not root of app )
// @desc    Update contact
// @access  Private
router.put('/:id',(req,res)=>{
    res.send('Update contacts');
});

// @route   PUT api/contacts (note, the / below refers to api/users, not root of app )
// @desc    Update contact
// @access  Private
router.delete('/:id',(req,res)=>{
    res.send('Update contacts');
});

module.export=router;
