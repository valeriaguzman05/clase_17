"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

var router = _express["default"].Router();

var port = 9000;

var handler = function handler() {
  console.log("El servidor esta escuchando correctamente en el puerto 9000...");
};

var authRoutes = require("./auth");

app.use('/auth', authRoutes); // "/auth" es mi ruta y luego ecesito mi sub ruta de login logout y recover. // 

app.listen(port, handler);