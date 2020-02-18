const express=require('express');
const router=express.Router();

// https://express-validator.github.io/docs/
// We installed express validator already and it lets us check
const { check, validationResult } = require('express-validator'); // post below

const User=require('../models/User');



// @route   POST api/users (note, the / below refers to api/users, not root of app )
// @desc    Register a user
// @access  Public


router.post('/',[
    check('name','Please enter your name')
    .not()
    .isEmpty(),
    check('email','Please include a valid email')
    .isEmail(),
    check('password','Please enter at least 6 characters')
    .isLength({min:6})
],(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    res.send(req.body);
});

module.exports=router;
