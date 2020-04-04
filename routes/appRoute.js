const express   		= require('express');
const route 			= express.Router();
const appController		= require('../controllers/appController');

route.get('', appController.index);
route.get('/app/index', appController.index);
route.get('/app/chat', appController.chat);
route.get('/app/file', appController.file);


module.exports = route;