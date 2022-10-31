const express = require('express');
const bodyParser = require('body-parser');
const corsFile = require('cors');

// Init the Express application
const app = express();

// Set the network port
const port = 3003;

let user = {
    slackUsername:"Omowunmi Ekun",
    backend: true,
    age: 25,
    bio: "I love to learn"
}
app.use(corsFile());
// Use the body parser middleware for post requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", ( req, res ) => {
    res.json(user)
  } );
  

   // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );