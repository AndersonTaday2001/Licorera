import { UserService } from "./user.service.js";

export const UserController = {
  async create(req, res) {
    try {
      const user = await UserService.createUser(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ err: err.message });
    }
  },
  async getById(req, res) {
    const user = await UserService.getUser(Number(req.params.id));
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  },
};
