import express from "express";
import { Login, Logout, register } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/Login", Login);
router.post("/Logout", Logout);

export default router;
