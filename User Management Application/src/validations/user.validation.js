import { body, param } from "express-validator";

export const createUserValidation = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Invalid email"),
  body("password").isLength({ min: 8 }).withMessage("Password must be 8+ chars"),
  body("age").optional().isInt({ min: 18 }).withMessage("Age must be ≥ 18")
];

export const idValidation = [
  param("id").isUUID().withMessage("Invalid user ID")
];
