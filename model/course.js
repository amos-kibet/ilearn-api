const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: { type: String },
  deptCourseId: { type: String },
  description: { type: String },
  subjectCode: {
    code: { type: String },
    school: { type: String },
  },
  // rmpUrl: { type: String },
  registrationNumber: { type: Number },
  code: { type: String },
  instructors: [],
  type: { type: String },
  status: { type: String },
  meetings: [],
  recitations: [],
  waitlistTotal: { type: Number },
  instructionMode: { type: String },
  campus: { type: String },
  minUnits: { type: Number },
  maxUnits: { type: Number },
  grading: { type: String },
  location: { type: String },
  notes: { type: String },
  prerequisites: { type: String },
  subject: { type: String },
  school: { type: String },
  ID: { type: String },
});
const Course = mongoose.model("course", courseSchema);

module.exports = Course;
