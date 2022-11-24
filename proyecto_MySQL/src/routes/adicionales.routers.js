const{Router} = require("express");
const router = Router();
const AdicionalesCtrl = require ("../controller/adicionales.controller")


router.get("/Media", AdicionalesCtrl.getMedia);
router.get("/Apuntadas",AdicionalesCtrl.getApuntadas);
router.get("/Impartidas", AdicionalesCtrl.getImpartidas);


module.exports = router;