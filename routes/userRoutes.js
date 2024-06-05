const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const carController =require("../controllers/carController")
// Route to render the home page
router.get('/', (req, res) => {
  res.render('index');
});

// Route to render the user registration form
router.get('/registerUser', userController.renderRegisterUser);

// Route to render the admin registration form
router.get('/registerAdmin', userController.renderRegisterAdmin);

// Route to render the login form
router.get('/login', userController.renderLogin);

// Route to register a new user
router.post('/api/users', userController.registerUser);

// Route to register a new admin
router.post('/api/admin', userController.registerAdmin);

// Route to login
router.post('/api/login', userController.login);

// Route to display the user list
router.get('/userList', userController.showUserList);


router.get('/carList', carController.carsDetail); // Add this route


router.delete('/api/cars/:id', carController.deleteCar);

module.exports = router;
