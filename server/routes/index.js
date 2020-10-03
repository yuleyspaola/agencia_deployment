const express = require('express');
const router = express.Router();
const Viaje = require('../models/Viajes');
const nosotrosController = require('../controller/nosotrosController');
const homeController = require('../controller/homeController');
const viajesController = require('../controller/viajesController');
const testimonialesController = require('../controller/testimonialesController');

////YuleysPaola.1129500734

module.exports = function() {

	router.get('/', homeController.consultasHomepage);


	router.get('/nosotros',nosotrosController.infoNosotros );
	router.get('/viajes', viajesController.mostrarViajes);
 
	router.get('/viajes/:id', viajesController.mostrarViaje);
	router.get('/testimoniales', testimonialesController.mostrarTestimonios);
	router.post('/testimoniales',testimonialesController.agregarTestimonial );
	

	return router;
 
}