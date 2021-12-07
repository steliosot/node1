// Import libraries
const express = require('express');
const app = express();
const movieRoutes = require('./routes/movies');
const userRouter = require('./routes/users');

// Middleware
app.use('/movies',movieRoutes);
app.use('/users',userRouter);

// Create a new route
app.get('/', (req,res) => {
    res.send('You are in home!');
});

// Server
app.listen(3000, ()=> {
    console.log('Server is up and running...')
});




