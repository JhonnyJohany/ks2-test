import { UserModel } from "../model/userModel.js";

const getAllUserController = async (req, res) => {
  try {
    const userData = await UserModel.getAllUser();
    if (userData.length === 0) {
      return res.status(204).json([]);
    }
    res.status(200).json(userData);
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};

export const AllUser = {
  getAllUserController,
};
