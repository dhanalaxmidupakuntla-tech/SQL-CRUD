import { supabase } from "../config/supabase.js";

export const createUser = async (user) => {
  return await supabase.from("users").insert(user).select().single();
};

export const getAllUsers = async () => {
  return await supabase.from("users").select("*");
};

export const getUserById = async (id) => {
  return await supabase.from("users").select("*").eq("id", id).single();
};

export const updateUser = async (id, data) => {
  return await supabase.from("users").update(data).eq("id", id).select().single();
};

export const deleteUser = async (id) => {
  return await supabase.from("users").delete().eq("id", id);
};
