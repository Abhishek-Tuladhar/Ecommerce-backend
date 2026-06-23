import User from "../model/userModel.js";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(404).json({ message: "Enter all the fields" });
    }

    const user = User({
      username,
      email,
      password,
    });

    await user.save();
    res.status(201).send({ message: "User created successfully ", user: user });
  } catch (error) {
    console.log(error);
  }
};
