const { mongoose } = require("mongoose");
const { Schema } = mongoose;
const {
  jobTitle,
  jobSpecialty,
  programmingLanguage,
  topics,
  relationshipInterest,
} = require("./data/techDetails");

const userSchema = new Schema({
  personalDetails: {
    name: { type: String, required: true },
    bio: String,
    birthday: Date,
    email: {
      type: String,
      required: true,
      match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/],
      unique: true,
    },
    gender: { type: String, enum: ["Female", "Male", "Transgender"] },
    profilePicture: {
      pictureURL: {
        type: String,
        match: /\.(jpg|jpeg|png|webp)$/i,
      },
      required: true,
    },
  },
  credentials: {
    userName: String,
    password: {
      type: String,
      required: true,
      minlength: 7,
      match: [/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/],
    },
    confirmPassword: {
      type: String,
      required: true,
      minlength: 7,
      match: [/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/],
    },
  },
  techDetails: {
    jobDetails: {
      role: { type: String, enum: [jobTitle] },
      specialty: { type: [String], enum: [jobSpecialty] },
    },
    skills: {
      topics: { type: [String], enum: topics },
      programmingLanguage: { type: [String], enum: programmingLanguage },
    },
    experience: {
      company: { type: Number, default: 0 },
      self: { type: Number, default: 1 },
      position: { type: [String], default: "Software Engineer" },
    },
  },
  socialMedia: {
    accountLink: {
      github: String,
      linkedin: String,
      portfolio: String,
      stackOverflow: String,
      Twitter: String,
    },
  },
  relationshipInterest: {
    type: { type: [String], enum: relationshipInterest },
  },
  termsConditions: {
    type: Boolean,
    agreed: Boolean,
    default: False,
  },
});

module.exports = { userSchema };
