import { pool } from "../database/connection.js";

const getAllUser = async () => {
  try {
    const { rows } = await pool.query("SELECT * FROM users");
    return rows;
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    throw new Error("Error al obtener los usuarios");
  }
};

export const UserModel = {
  getAllUser,
};
