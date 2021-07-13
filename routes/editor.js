const express = require('express');

const router = express.Router();

const editorController=require('../controller/editor_controller')



router.get('/post/:id',editorController.post);
router.post('/post/:id',editorController.addToChoice);


module.exports=router;