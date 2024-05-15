const mongoose = require("mongoose");

const Material = new mongoose.Schema({
  faculty: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        return /^[a-zA-Z\-']+$/.test(value); // Allows letters, hyphens, and apostrophes
      },
      message: props => `${props.value} contains special characters. Only letters, hyphens, and apostrophes are allowed.`
  }
  },
  subject: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model("Material", Material);
