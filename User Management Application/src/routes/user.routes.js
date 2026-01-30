import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import * as service from "../services/user.service.js";

export const createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const { data, error } = await service.createUser({
    ...req.body,
    password: hashedPassword
  });

  if (error)
    return res.status(400).json({ error: error.message });

  res.status(201).json(data);
};

export const getUsers = async (req, res) => {
  const { data } = await service.getAllUsers();
  res.json(data);
};

export const getUser = async (req, res) => {
  const { data, error } = await service.getUserById(req.params.id);
  if (error) return res.status(404).json({ error: "User not found" });
  res.json(data);
};

export const updateUser = async (req, res) => {
  const { data, error } = await service.updateUser(req.params.id, req.body);
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

export const deleteUser = async (req, res) => {
  const { error } = await service.deleteUser(req.params.id);
  if (error) return res.status(404).json({ error: "User not found" });
  res.status(204).send();
};
