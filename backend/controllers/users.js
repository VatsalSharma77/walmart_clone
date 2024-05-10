const bcrypt = require("bcrypt");
const User = require("../models/user");

const get = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({ data: users });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      res.status(400).json({ error: "User already exists" });
    }

    const hash_password = await bcrypt.hash(password, 10);

    const userCreated = await User.create({
      username,
      email,
      phone,
      password: hash_password,
    });
    console.log(req.body);

    res.status(200).json({
      data: userCreated,
      token: await userCreated.generateAuthToken(),
      message: "User created successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Something went wrong" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      res.status(400).json({ message: "Invalid email" });
    }

    const isMatch = await bcrypt.compare(password, userExist.password);

    if (isMatch) {
      res.status(200).json({
        message: "Login successful",
        token: await userExist.generateAuthToken(),
        userId : userExist._id.toString(),
      });
    } else {
      res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { register, get, login };
