const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  image: String,
  technologies: [String],
  featured: { type: Boolean, default: false },
  demo: String,
  github: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
}, { timestamps: true });
module.exports = mongoose.model('Project', projectSchema);


