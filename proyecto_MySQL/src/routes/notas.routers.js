const{Router} = require("express");
const router = Router();
const NotasCtrl = require ("../controller/notas.controller")


router.get("/Notas", NotasCtrl.getNotas);
router.post("/Notas",NotasCtrl.postNotas)
router.put("/Notas", NotasCtrl.putNotas);
router.delete("/Notas", NotasCtrl.delNotas);

module.exports = router;