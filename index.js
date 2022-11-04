const express = require('express');
const bodyParser = require('body-parser');
const corsFile = require('cors');



const app = express();

// Set the network port
const port = 3003;

let user = {
    slackUsername:"Omowunmi Ekun",
    backend: true,
    age: 25,
    bio: "I love to learn"
}



// operationMethod(operation_type: string){

// }
app.use(corsFile());
// Use the body parser middleware for post requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", ( req, res ) => {
    res.json(user)
  } );

  app.post("/perform-operation",(req,res)=>{
    let body = req.body;
    let result = 0;
    if(body){
        if(typeof(body.x) !== 'number' || typeof(body.y) !== 'number'
        ){
            return res.status(400).json({ error:'Invalid Numbers' })
        }
        if( !Number.isInteger(body.x) ||  !Number.isInteger(body.y)){
            {
                return res.status(400).json({ error:'Invalid : Must be an Integer' })
            }
        }
        
        switch(body.operation_type){
            case 'addition':
                result = body.x + body.y;
                break;
            case 'subtraction':
                result = body.x - body.y;
                break;
            case 'multiplication':
                result = body.x * body.y;
                break;
            default:
                return res.status(500).json({error: 'Invalid Operation Type'});
        }
        return res.status(200).json({"slackUsername":'Omowunmi Ekun', "result":result, "operation_type":body.operation_type})
    }
  })

  

   // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );