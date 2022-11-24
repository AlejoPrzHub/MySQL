const{Router} = require("express");
const router = Router();
const EstudiantesCtrl = require ("../controller/estudiantes.controller")


router.get("/Estudiantes", EstudiantesCtrl.getEstudiantes);
//router.get("/Estudiantes?=", EstudiantesCtrl.getEstudiantes2);
router.post("/Estudiantes",EstudiantesCtrl.postEstudiantes)
router.put("/Estudiantes", EstudiantesCtrl.putEstudiantes);
router.delete("/Estudiantes", EstudiantesCtrl.delEstudiantes);

module.exports = router;