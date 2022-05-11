const db = require(".");

module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        full_name: String,
        school: String,
        usertype: String,
        email: String,
        cell: String,
        password: String,
        status: Boolean
      },
      { timestamps: true }
    );
    schema.method("toJSON", function() 
    {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    
    const Users = mongoose.model("Users", schema);
    return Users;
  };