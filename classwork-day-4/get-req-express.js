const express = require('express');
const axios = require('axios');
const app = express();
app.get('/',async (req, res) => {
    try {
        const apiUrl1 ="https://jsonplaceholder.typicode.com/posts/1";
        const response1=await axios.get(apiUrl1);
        console.log('fetched data: ', JSON.stringify(response1.data, null, 2));
        const apiUrl2 = "https://jsonplaceholder.typicode.com/posts/2";
        const response2 = await axios.get(apiUrl2);
        console.log('fetched data: ', JSON.stringify(response2.data, null, 2));
        res.send({ // return actual value or actual data
            api1: response1.data,
            api2: response2.data
        })
    } catch (error) {
        console.log('API error',error.message);
        res.status(500).send("Failed to fetch data from api");

    }
})
app.listen(3000,()=>{
console.log('svr is running on 3000');
})


