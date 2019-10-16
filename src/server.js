import express from "express";
const app = express();
const router = express.Router();
const port = 9000
const handler = function handler () {
     console.log("El servidor esta escuchando correctamente en el puerto 9000...")
}

const authRoutes = require("./auth")

app.use('/auth', authRoutes)
// "/auth" es mi ruta y luego ecesito mi sub ruta de login logout y recover. // 
app.listen (port, handler)
