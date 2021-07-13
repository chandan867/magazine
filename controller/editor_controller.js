const Article=require('../models/articles');
const EditorChoice=require('../models/editorsChoice');


module.exports.post=function(req,res){
    return res.render('editors_form',{id:req.params.id});
    
 }

module.exports.addToChoice=async function(req,res){
   
    let article=await Article.findById(req.params.id);
    article.editor_pick=true;
   await article.save();
  // console.log(req.body);

    EditorChoice.create({article_id:req.params.id,
    desc:req.body.desc
    });
    return res.redirect('/');
 }