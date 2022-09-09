const express = require('express');
const cors = require('cors');  
const app = express();
const port = 8000;


require('./config/mongoose.config.js')

app.use(cors()); //Esto es nuevo
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));

const allUserRoutes = require('./routes/user.routes');
allUserRoutes(app);

const allProductRoutes = require('./routes/product.routes');
allProductRoutes(app);



app.listen(port, () => console.log("Server is listening at port ", port));