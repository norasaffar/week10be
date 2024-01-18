const User = require("./model");

const addUser = async (req, res) => {
    try {
      const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
  
      res.status(201).json({ message: "User created", user: user });
  
    } catch (error) {
      res.status(500).json({ message: error.message, error: error });
    }
};

  const getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll();
  
      res.status(200).json({ message: "All users here", users: users });
  
    } catch (error) {
      res.status(500).json({ message: error.message, error: error });
    }
  };


const login = async (req, res) => {
  try {
    const user = await User.findOne({ where: { username: req.body.username} });
    
    if (req.body.password === user.password) {
      console.log("helllooooooo from login", req.body);
      res.status(201).json({ message: "User logged in", user: user });

     return
    } else {
      res.status(401).json({ message: "passwords do not match" });

      return
    }
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};






  module.exports = {
    addUser: addUser,
    getAllUsers: getAllUsers,
    login: login
}