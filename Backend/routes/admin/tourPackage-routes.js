import express from "express"
import {addTourPackage,getTourPackage,editTourPackage,deleteTourPackageById,uploadFields} from "../../controllers/admin/tourPackage-controller.js"


const router = express.Router()

router.post("/add", uploadFields, addTourPackage);

router.get("/get/", getTourPackage);

router.get("/edit/:id", editTourPackage);

router.delete("/delete/:id", deleteTourPackageById);

export default router