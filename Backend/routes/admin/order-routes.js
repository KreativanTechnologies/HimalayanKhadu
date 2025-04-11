import express from "express"
import {getAllOrdersOfAllUsers,getOrderDetailsForAdmin,updateOrderStatus} from "../../controllers/admin/order-controller.js"


const router = express.Router()

router.post("/get", getAllOrdersOfAllUsers);

router.get("/get/:id", getOrderDetailsForAdmin);

router.put("/update/:id", updateOrderStatus);

export default router