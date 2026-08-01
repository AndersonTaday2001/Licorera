import { Router } from "express";
import { UserController } from "./user.controller.js";

const router = Router();

router.post("/", UserController.create);
router.get("/:id", UserController.getById);

export default router;
