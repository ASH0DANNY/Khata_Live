backend is running on port 4000
and frontend is running on 3000


//Use below backend code to access requests from different port no(@)

const express = require('express');
const cors = require('cors'); //include this(@)
const app = express();
const port = 4000;

app.use(cors()); // Allow all CORS requests//(@)

// Define your route
app.get('/transaction/history', (req, res) => {
    // Handle fetching history
    res.json({ transactions: [...] }); // Replace with actual data
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});




//This is frontend part(@)

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000', // Replace with your backend URL
});

// Example usage in your component
const fetchHistory = async () => {
    try {
        const response = await axiosInstance.get('/transaction/history');
        // Handle response
    } catch (error) {
        // Handle error
    }
};






//If not working add below lines
const corsOptions = {
    origin: 'http://localhost:3000', // Allow only requests from this origin
    methods: ['GET', 'POST'], // Allow only specified HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow only specified headers
};

app.use(cors(corsOptions));


//and this also
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
