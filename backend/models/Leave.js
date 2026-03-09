const mongoose = require("mongoose")

const LeaveSchema = new mongoose.Schema({
  leaveType: String,
  startDate: String,
  endDate: String,
  reason: String,

  status: {
    type: String,
    default: "Pending"
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
})

module.exports = mongoose.model("Leave", LeaveSchema)