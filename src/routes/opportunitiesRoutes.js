const express = require('express');
const router = express.Router();
const controller = require("../controller/opportunitiesController")
 
router.get("/search", controller.allOpportunities) 
router.get("/:id", controller.getOpportunityById) 
router.get("/category", controller.getOportunityByCategory)   
router.post("/new", controller.newOpportunity)
// router.put("/change/:id", controller.changeOpportunity)
router.patch("/update/:id", controller.updateOpportunityById)
router.delete ("/delete/:id", controller.deleteOpportunityById)

module.exports = router