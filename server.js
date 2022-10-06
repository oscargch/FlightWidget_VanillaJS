const PORT = 8000;
const axios = require("axios").default;
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
app.use(cors());


// const { allowedNodeEnvironmentFlags } = require("process");

app.get('/flights', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://toronto-pearson-airport.p.rapidapi.com/departures',
        headers: {
          'X-RapidAPI-Key': process.env.RAPID_API_KEY,
          'X-RapidAPI-Host': 'toronto-pearson-airport.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
          res.json(response.data);
        //   res.json(response.data.slice(0,6)); option to get less data
      }).catch(function (error) {
          console.error(error);
      });
})

app.listen(PORT, () => console.log('running on PORT 8000'));