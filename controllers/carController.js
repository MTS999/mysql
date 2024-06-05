
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
  }
};

module.exports = carController;
