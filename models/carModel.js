
const db = require('../config/database');

const Cars = {
  getAllCars: (callback) => {
    const query = 'SELECT id, name, model, year, price, rentPerDay FROM Cars';
    // console.log(query);
    db.query(query, callback);
  },

  deleteCarById: (carId, callback) => {
    const query = 'DELETE FROM Cars WHERE id = ?';
    db.query(query, [carId], callback);
  }
};

module.exports = Cars;
