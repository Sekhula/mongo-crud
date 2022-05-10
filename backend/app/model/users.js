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

function getNextSequence(name) {
  var ret = db.users.findAndModify(
         {
           query: { _id: name },
           update: { $inc: { seq: 1 } },
           new: true
         }
  );
  return ret.seq;
}

module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        // _id: Number,
        full_name: String,
        age: String,
        username: String,
        cell: String,
        password: String,
        status: Boolean
      },
      { timestamps: true }
    );

    // var seq_increment = 1000;

    // db.uniqueIdentifierCounter.findAndModify({
    //     query: { _id: "UNIQUE COUNT DOCUMENT IDENTIFIER" },
    //     update: {
    //         $inc: {COUNT: seq_increment },
    //     }
    // })

    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      console.log('my object here! ',object);
      return object;
    });

    const Users = mongoose.model("Users", schema);
    
    return Users;
  };