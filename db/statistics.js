const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statsSchema = new Schema(
  {
    views: {
      type: Number,
    },
    stat: {
      type: String,
    },
  }
);

const Stats = mongoose.model("Stats", statsSchema);
module.exports = Stats;
