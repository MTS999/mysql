
const Cars = require('../models/carModel');

const carController = {
  carsDetail: (req, res) => {
    Cars.getAllCars((err, carsData) => {
      if (err) {
        console.error('Error retrieving cars detail: ' + err.message);
        return res.status(500).json({ error: 'Failed to retrieve cars' });
      }
      console.log(carsData);
      res.render('carList', { carsData });

    });
  },

  deleteCar: (req, res) => {
    const carId = req.params.id;

    Cars.deleteCarById(carId, (err, result) => {
      if (err) {
        console.error('Error deleting car: ' + err.message);
        return res.status(500).json({ error: 'Failed to delete car' });
      }
      res.status(200).json({ message: 'Car deleted successfully' });
    });
  },
  addCar: (req, res) => {
    const carData = req.body;

    Cars.addCar(carData, (err, result) => {
      if (err) {
        console.error('Error adding car: ' + err.message);
        return res.status(500).json({ error: 'Failed to add car' });
      }
      res.status(201).json({ message: 'Car added successfully' });
    });
  }

  , searchCars: (req, res) => {
    const name = req.query.name;

    Cars.searchCarsByName(name, (err, carsData) => {
      if (err) {
        console.error('Error searching cars: ' + err.message);
        return res.status(500).json({ error: 'Failed to search cars' });
      }
      res.status(200).json(carsData);
    });
  }
};

module.exports = carController;
