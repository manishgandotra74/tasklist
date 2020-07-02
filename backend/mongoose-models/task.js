const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  repeated_task: { type: Boolean, required: true },
  status: { type: Boolean, required: true },
  
});

module.exports = mongoose.model('Task', postSchema);
