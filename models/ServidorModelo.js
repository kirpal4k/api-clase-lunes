const express = require('express')
var cors = require('cors')

//IMPORTAR LA FUNCION PARA CONECTARME CON LA BD
const { conectarBD } = require('../database/conexion.js')

const rutas = require('../routes/rutas.js')

class ServidorModelo {

    constructor() {

        this.app = express();
        this.despertarBD();
        this.llamarAuxiliares();
        this.enrutarPeticiones();

    }

    despertarServidor() {

        this.app.listen(process.env.PORT, function () {
            console.log("servidor encendido " + process.env.PORT)
        })

    }

    enrutarPeticiones() {

        this.app.use("/", rutas);

    }

    despertarBD() {

        conectarBD()

    }

    llamarAuxiliares() {

        this.app.use(express.json())

    }

}

module.exports = ServidorModelo