const express   		= require('express');
const route 			= express.Router();
const appController		= require('../controllers/appController');


route.get('/index', appController.index);
route.get('/chat', appController.chat);
route.get('/file', appController.file);


module.exports = route;