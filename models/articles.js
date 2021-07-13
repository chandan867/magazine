const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const ARTICLE_PATH = path.join('/uploads/articles');

const articleSchema = new mongoose.Schema({
    user: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User' 
        }
    ,
    title: {
        type: String,
    },
    editor_pick: {
        type: Boolean,
        default:false
    },
    path:{
        type:String
    }
}, {
    timestamps: true
});


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '..', ARTICLE_PATH));
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now());
    }
  });

articleSchema.statics.upload = multer({storage:storage}).single('article_file');
articleSchema.statics.avatarPath = ARTICLE_PATH;

  

  

const Article = mongoose.model('Article',articleSchema);

module.exports = Article;