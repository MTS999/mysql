const db = require('../config/database');

const User = {
  addUser: (user, callback) => {
    const query = 'INSERT INTO Customer (fullname, email, password) VALUES (?, ?, ?)';
    db.query(query, [user.fullname, user.email, user.password], callback);
  },

  addAdmin: (admin, callback) => {
    const query = 'INSERT INTO Admin (fullname, email, password) VALUES (?, ?, ?)';
    db.query(query, [admin.fullname, admin.email, admin.password], callback);
  },

  findAdmin: (email, password, callback) => {
    const query = 'SELECT * FROM Admin WHERE email = ? AND password = ?';
    db.query(query, [email, password], callback);
  },

  findCustomer: (email, password, callback) => {
    const query = 'SELECT * FROM Customer WHERE email = ? AND password = ?';
    db.query(query, [email, password], callback);
  },

  getAllUsers: (callback) => {
    const query = 'SELECT id, fullname, email FROM Customer';
    db.query(query, callback);
  }
};



module.exports = User;
