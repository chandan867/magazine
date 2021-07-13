const express = require('express');

const router = express.Router();

const userController=require('../controller/user_controller');

router.post('/article-submit',userController.articleSubmit);



module.exports=router;