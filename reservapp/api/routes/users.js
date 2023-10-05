import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/prueba",verifyToken,(req,res,next) =>{
    res.send("Hola estoy autenticado!")
})

router.get("/prueba/:id",verifyUser,(req,res,next) =>{
    res.send("Hola estoy autenticado y puedo eliminar!")
})

router.get("/admin/:id",verifyAdmin,(req,res,next) =>{
    res.send("Hola estoy autenticado y puede hacer todas las acciones")
})

//update
router.put("/:id", verifyUser,updateUser);

//delete
router.delete("/:id",verifyUser, deleteUser)

//get
router.get("/:id", verifyUser, getUser)

//get all
router.get("/", verifyUser, getUsers)


export default router; 