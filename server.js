const express = require('express');
const cors = require('cors');  
const app = express();
const port = 8000;

require('./config/mongoose.config.js')

app.use(cors()); //Esto es nuevoTodas los demás solicitudes HTTP de origen 
//cruzado son solicitudes no simples. 
//Si los recursos de la API reciben solicitudes no simples, tiene que habilitar el soporte de CORS.
//Es un mecanismo para permitir o restringir los recursos solicitados en un 
//servidor web dependiendo de dónde se inició la solicitud HTTP.
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));

const allUserRoutes = require('./routes/user.routes');
allUserRoutes(app);

const allProductRoutes = require('./routes/product.routes');
allProductRoutes(app);

const allProveedorRoutes = require('./routes/proveedor.routes');
allProveedorRoutes(app);

const allFacturaRoutes = require('./routes/factura.routes');
allFacturaRoutes(app);

const allDetalleRoutes = require('./routes/detalle.routes');
allDetalleRoutes(app);

app.listen(port, () => console.log("Server is listening at port ", port));