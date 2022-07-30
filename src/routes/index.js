const express = require("express")
const router = express.Router()

router.get("/", function (req, res) {
    res.status(200).send({
        title: "Cafe Filtrado ['']p",
        description: "API que reúne iniciativas gratuitas para formação de mulheres no setor cafeeiro",
        details: "Projeto Final - Turma On16 Back-End - Todas em Tech - Reprograma",
        version: "1.0.0"
    })
})

module.exports = router