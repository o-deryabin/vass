const { Schema, model } = require("mongoose");

const schema = new Schema({
  firstname: { type: String, require: true },
  tel: { type: String, require: true },
});

module.exports = model("User", schema);
