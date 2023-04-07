import userDb from "../models/userModel.js";

export const getAllUser = async (req, res) => {
  try {
    const user = await userDb.findAll();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const userById = await userDb.findOne({ where: { id: req.params.id } });
    res.status(200).json(userById);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveUser = async (req, res) => {
  const user = new userDb(req.body);
  try {
    await userDb.create(req.body);
    res.status(200).json({ msg: "user berhasil ditambahkan" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    await userDb.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json({ msg: "sukses update" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await userDb.destroy({ where: { id: req.params.id } });
    res.status(200).json({ msg: "sukses delete" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
