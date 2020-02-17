const express=require('express');
const router=express.Router();


// @route   Get api/auth (note, the / below refers to api/users, not root of app )
// @desc    Get logged in user
// @access  Private
router.get('/',(req,res)=>{
    res.send('Get logged in user');
});

// @route   Post api/auth (note, the / below refers to api/users, not root of app )
// @desc    Auth user and get token
// @access  Public
router.post('/',(req,res)=>{
    res.send('Login user');
});


module.exports=router;
