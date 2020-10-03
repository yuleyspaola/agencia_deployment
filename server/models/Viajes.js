const Sequelize = require('sequelize');
const db = require('../config/database');

const Viaje = db.define('viajes',{
	titulo : {
		type : Sequelize.STRING 
	},
	precio : {
		type: Sequelize.STRING
	},
	fecha_id: {
		type: Sequelize.DATE
	},
	fecha_vuelta: {
		type: Sequelize.DATE
	},
	imagen: {
		type: Sequelize.STRING
	},
	descripcion: {
		type: Sequelize.STRING
	},
	disponibles: {
		type: Sequelize.STRING
	},
	
})

//<script src="https://kit.fontawesome.com/35db9bd7bd.js" crossorigin="anonymous"></script>

module.exports = Viaje;