const mongoose = require('mongoose');


const editorSchema = new mongoose.Schema({
    article_id: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Article' 
        },
        desc:{
            type:String,
            required:true
        }
}, {
    timestamps: true
});

const EditorChoice = mongoose.model('EditorChoice',editorSchema);

module.exports = EditorChoice;