// module.exports = mongoose => {
//     const Users = mongoose.model(
//       "Users",
//       mongoose.Schema(
//         {
//           full_name: String,
//           age: String,
//           status: Boolean
//         },
//         { timestamps: true }
//       )
//     );
//     return Users;
//   };

module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        full_name: String,
        age: String,
        status: Boolean
      },
      { timestamps: true }
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });

    const Users = mongoose.model("Users", schema);
    return Users;
  };