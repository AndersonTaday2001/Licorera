import { UserModel } from "./user.model.js";
import bcrypt from "bcryptjs";

export const UserService = {
  async createUser({ email, password, name }) {
    const hashed = await bcrypt.hash(password, 10);
    return UserModel.create({ email, password: hashed, name });
  },
  async getUser(id) {
    return UserModel.findById(id);
  },
};
