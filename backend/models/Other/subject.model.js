const mongoose = require("mongoose");

const Subject = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        return /^[a-zA-Z\-']+$/.test(value); // Allows letters, hyphens, and apostrophes
      },
      message: props => `${props.value} contains special characters. Only letters, hyphens, and apostrophes are allowed.`
  } },

  code: {
    type: String,
    required: true,
    
  }
}, { timestamps: true });

module.exports = mongoose.model("Subject", Subject);
