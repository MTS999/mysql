
const db = require('../config/database');

const Cars = {
  getAllCars: (callback) => {
    const query = 'SELECT id, name, model, year, price, rentPerDay,status FROM Cars';
    console.log(query);
    db.query(query, callback);
  },

  deleteCarById: (carId, callback) => {
    const query = 'DELETE FROM Cars WHERE id = ?';
    db.query(query, [carId], callback);
  },
  addCar: (carData, callback) => {
    const query = 'INSERT INTO Cars (name, model, year, price, rentPerDay,status) VALUES (?, ?, ?, ?, ?,?)';
    db.query(query, [carData.name, carData.model, carData.year, carData.price, carData.rentPerDay,carData.status], callback);
  },


  searchCarsByName: (name, callback) => {
    const query = 'SELECT id, name, model, year, price, rentPerDay ,status FROM Cars WHERE name LIKE ?';
    db.query(query, [`%${name}%`], callback);
  }
  
};

module.exports = Cars;
