const mongoose = require("mongoose");

const adminDetails = new mongoose.Schema({
  employeeId: {
    type: Number,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        return /^[a-zA-Z\-']+$/.test(value); // Allows letters, hyphens, and apostrophes
      },
      message: props => `${props.value} contains special characters. Only letters, hyphens, and apostrophes are allowed.`
    }
  },
  middleName: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        return /^[a-zA-Z\-']+$/.test(value); // Allows letters, hyphens, and apostrophes
      },
      message: props => `${props.value} contains special characters. Only letters, hyphens, and apostrophes are allowed.`
    }
  },
  lastName: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        return /^[a-zA-Z\-']+$/.test(value); // Allows letters, hyphens, and apostrophes
      },
      message: props => `${props.value} contains special characters. Only letters, hyphens, and apostrophes are allowed.`
    }
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        return /\b[A-Za-z0-9._%+-]+@gmail\.com\b/.test(value);
      },
      message: props => `${props.value} is not a valid Gmail address.`
    }
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model("Admin Detail", adminDetails);
