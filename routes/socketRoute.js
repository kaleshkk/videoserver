const express   		= require('express.io');
const route 			= express.route();
const appController		= require('../controllers/appController');


route.get('/index', appController.index);
route.get('/chat', appController.chat);


module.exports = route;