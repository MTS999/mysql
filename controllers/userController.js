const User = require('../models/userModel');

const userController = {
  registerUser: (req, res) => {
    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const user = { fullname, email, password };

    User.addUser(user, (err, result) => {
      if (err) {
        console.error('Error adding user: ' + err.message);
        return res.status(500).json({ error: 'Failed to add user' });
      }
      console.log('User added with ID: ' + result.insertId);
      res.status(201).json({ message: 'User added successfully' });
    });
  },

  registerAdmin: (req, res) => {
    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const admin = { fullname, email, password };

    User.addAdmin(admin, (err, result) => {
      if (err) {
        console.error('Error adding admin: ' + err.message);
        return res.status(500).json({ error: 'Failed to add admin' });
      }
      console.log('Admin added with ID: ' + result.insertId);
      res.status(201).json({ message: 'Admin added successfully' });
    });
  },

  login: (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check in Admin table
    User.findAdmin(email, password, (err, adminResults) => {
      if (err) {
        console.error('Error querying admin table: ' + err.message);
        return res.status(500).json({ error: 'Internal server error' });
      }

      if (adminResults.length > 0) {
        return res.status(200).json({ userType: 'admin', message: 'Admin login successful' });
      }

      // Check in Customer table
      User.findCustomer(email, password, (err, customerResults) => {
        if (err) {
          console.error('Error querying customer table: ' + err.message);
          return res.status(500).json({ error: 'Internal server error' });
        }

        if (customerResults.length > 0) {
          return res.status(200).json({ userType: 'customer', message: 'Customer login successful' });
        }

        return res.status(401).json({ error: 'Invalid email or password' });
      });
    });
  },

  showUserList: (req, res) => {
    User.getAllUsers((err, users) => {
      if (err) {
        console.error('Error retrieving users: ' + err.message);
        return res.status(500).json({ error: 'Failed to retrieve users' });
      }
      res.render('userList', { users });
    //   res.send({ users });
    });
  },

  renderRegisterUser: (req, res) => {
    res.render('registerUser');
  },

  renderRegisterAdmin: (req, res) => {
    res.render('registerAdmin');
  },

  renderLogin: (req, res) => {
    res.render('login');
  }
};

module.exports = userController;
