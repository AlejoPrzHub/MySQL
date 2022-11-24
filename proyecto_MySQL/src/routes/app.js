const express= require("express")
const cors = require("cors")
const estudiantesRouters = require("../routes/estudiantes.routers")
const notasRouters =require("../routes/notas.routers")
const adicionalesRouters = require("../routes/adicionales.routers")
const errorHandling = require ("../error/errorHandling")

const app = express();

app.set("port", process.env.PORT|| 3000)
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(estudiantesRouters);
app.use(notasRouters);
app.use(adicionalesRouters);
app.use (function(req, res, next)
        {
            res.status(404).json
                        ({
                            error:true,
                            codigo: 404,
                            message:"Upss, algo no va bien"
                        })
        })
app.use(errorHandling);

module.exports = app;