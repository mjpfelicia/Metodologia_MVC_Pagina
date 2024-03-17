const express = require("express");
const ControllerFilme = require("../controllers/ControllerFilmes");
const router = express.Router();

router.get("/cadastrar", ControllerFilme.cadastrarFilme);
router.post("/cadastrar", ControllerFilme.FilmeCreate);


router.get("/", ControllerFilme.listarFilmes);



router.get("/update/:id_filme", ControllerFilme.UpdateFilme);
router.post("/update", ControllerFilme.FilmeUpdate);

router.post("/remover", ControllerFilme.removerFilme);


module.exports = router;