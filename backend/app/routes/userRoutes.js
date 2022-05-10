module.exports = app => {
    const user = require("../comtrollers/users.controller");
    var router = require("express").Router();
    // Create a new User
    router.post("/", user.create);
    // Retrieve all users
    router.get("/", user.findAllUsers);
    // Retrieve all active users
    router.get("/status", user.findActiveUsers);
    // Retrieve a single user with id
    router.get("/:id", user.findOne);
    // Update a user with id
    router.put("/:id", user.update);
    // Delete a user with id
    router.delete("/:id", user.delete);
    // Create a new Tutorial
    router.delete("/", user.deleteAll);
    
    app.use('/api/users', router);
  };