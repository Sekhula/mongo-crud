const db = require("../models");
const Tutorial = db.tutorials;

// Create and Save a new user
exports.create = (req, res) => {
   // Validate request
  if (!req.body.title) 
  {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a user
  const user = new User({
    full_name: req.body.full_name,
    age: req.body.age,
    status: req.body.status ? req.body.status : false
  });
  // Save user in the database
  user
    .save(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all users from the database.
exports.findAll = (req, res) => {
  
};

// Find a single user with an id
exports.findOne = (req, res) => {
  
};

// Update a user by the id in the request
exports.update = (req, res) => {
  
};

// Delete a users with the specified id in the request
exports.delete = (req, res) => {
  
};
// Delete all users from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published users
exports.findAllActive = (req, res) => {
  
};