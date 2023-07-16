const express = require("express");
const app = express();
const port = 5000;

app.get('/plan', async (req,res)=>{
    const city = "Ahmedabad"; // req.query.city;
    const CN = "IN"; // req.query.country; default is India
    const url = `https://ai-trip-planner.p.rapidapi.com/?days=3&destination=${city}%2C${CN}`;
    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6c334b417amsh16879f3b5d270fbp160525jsnf73295c909c9',
        'X-RapidAPI-Host': 'ai-trip-planner.p.rapidapi.com'
    }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        res.send(result);
    } catch (error) {
        res.send(error);
    }
    
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});