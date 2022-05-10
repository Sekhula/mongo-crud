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
exports.findAllUsers = (req, res) => {
    const full_name = req.query.full_name;
    var condition = full_name ? { full_name: { $regex: new RegExp(full_name), $options: "i" } } : {};
    User.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

// Find a single user with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Tutorial.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found user with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving user with id=" + id });
      });
};

// Update a user by the id in the request
exports.update = (req, res) => {
    if (!req.body) 
    {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
    }
    const id = req.params.id;
    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
        res.status(404).send({
            message: `Cannot update user with id=${id}. Maybe user was not found!`
        });
        } else res.send({ message: "User was updated successfully." });
    })
    .catch(err => {
        res.status(500).send({
        message: "Error updating user with id=" + id
        });
    });
};

// Delete a users with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  User.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete user with id=${id}. Maybe user was not found!`
        });
      } else {
        res.send({
          message: "User was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete uaer with id=" + id
      });
    });
};
// Delete all users from the database.
exports.deleteAll = (req, res) => {
    User.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Users were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all users."
      });
    });
};

// Find all published users
exports.findAllActive = (req, res) => {
    User.find({ status: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};