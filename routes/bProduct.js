const express = require("express");
const router = express.Router(); 

const authMiddle = require("../middlewares/authMiddle.js");
const multer = require("multer")
const bproductController = require("../controllers/bproductController")
const {body, check} = require('express-validator')
const validatorPDB = require("../validator/validatorProductDb"); 


router.get('/opciones', bproductController.enlaces);
// TIPO DE PRODUCTO
router.get("/altaType",bproductController.altaType);
router.put("/creaType",validatorPDB.altaType,bproductController.creaType)
router.get("/listType",bproductController.listType);
router.get("/deleteType/:id",bproductController.deleteType)
// AÑO PRODUCTO
router.get("/altaYear",bproductController.altaYear);
router.put("/creaYear",validatorPDB.altaYear,bproductController.creaYear)
router.get("/listYear",bproductController.listYear);
router.get("/deleteYear/:id",bproductController.deleteYear)
// COLECCIÓN PRODUCTO
router.get("/altaColection",bproductController.altaColection);
router.put("/creaColection",validatorPDB.altaColection,bproductController.creaColection)
router.get("/listColection",bproductController.listColection);
router.get("/deleteColection/:id",bproductController.deleteColection);
// TABLA COLORES . cARGA EL LINK A ARCHIVO json 
router.get("/altaColor",bproductController.altaColor);
router.put("/creaColor",validatorPDB.altaColor,bproductController.creaColor)
router.get("/listColor",bproductController.listColor);
router.get("/deleteColor/:id",bproductController.deleteColor);
// TABLA PRODUCTOS 
router.get("/altaProduct",bproductController.altaProduct);
router.put("/creaProduct",validatorPDB.altaColor,bproductController.creaProduct)

module.exports = router