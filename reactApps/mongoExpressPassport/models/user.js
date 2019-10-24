const passportLocalMongoose = require("passport-local-mongoose");

var user = new Schemma({
  firsName: {
    type: string,
    require: true
  },
  lastName: {
    type: string,
    require: true
  },
  email: {
    type: string,
    require: true
  },
  role: {
    type: string,
    require: true
  }
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", User);