var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storieSchema = new Schema ({
  storieSlug: String,
  storieTitle: String,
  storieAuthor: String,
  storieCover: String,
  storieText: String,
  storieAuthor: String,
  storieDate: {type: Date, default: Date.now},
});

var StorieModel = mongoose.model('Storie', storieSchema);

module.exports = StorieModel;
