const express = require('express');
const app = express();
const PORT = 3000;

const SetupAndStartServer = () => {
     app.listen(PORT, ()=>{
          console.log('Server listening on port' , PORT);
     })
}

SetupAndStartServer();