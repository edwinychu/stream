const port = process.env.PORT || 8080;
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/* parses body of post requests into json format */
app.use(bodyParser.json());

/* sending up static files to browser in dist folder */
app.use(express.static(__dirname + "/../client/dist"))


/* create routes for getting streams */

// initial route for streams home page
app.get('/', (req, res) => {


});

app.get('/streams', (req, res) => {


});




app.listen(port, function() {
  console.log("listening on port", port)
})
