const express=require('express');
const router=express.Router();


// @route   POST api/users (note, the / below refers to api/users, not root of app )
// @desc    Register a user
// @access  Public
router.post('/',(req,res)=>{
    res.send('Register a user');
});

module.exports=router;
