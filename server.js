
// Included the following packages
// npm init -y
// modifed package.json "main"
// npm install the following 
// express
// bcrypt (for passwords)
// jsonwebtoken
// config for Global variables
// express-validator
// mongoose

// dev dependencies
// npm i -D nodemon concurrently (run back and from-end React server at the same time)

const express=require('express');
const app=express();
const connectDB=require('./config/db');

// Connect to the db
connectDB();

// Init middleware built in. Don't need to install bodyparser anymore
app.use(express.json({extended:false}));


app.get('/',(req,res)=>{
    res.json({msg:'Welcome to the ContactKeeper API...'})
})

// Define routes
app.use('/api/users',require('./routes/users'));
app.use('/api/contacts',require('./routes/contacts'));
app.use('/api/auth',require('./routes/auth'));



const PORT=process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
});


// use "npm run server". This uses the server script in package.json
// in the terminal to start the web server