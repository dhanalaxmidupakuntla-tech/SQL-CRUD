import express from "express";
import * as controller from "../controllers/user.controller.js";
import { createUserValidation, idValidation } from "../validations/user.validation.js";

const router = express.Router();

router.post("/", createUserValidation, controller.createUser);
router.get("/", controller.getUsers);
router.get("/:id", idValidation, controller.getUser);
router.put("/:id", idValidation, controller.updateUser);
router.delete("/:id", idValidation, controller.deleteUser);

export default router;   // ✅ THIS LINE IS REQUIRED
