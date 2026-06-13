"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarIncidentes = listarIncidentes;
const almacenamiento_js_1 = require("../data/almacenamiento.js");
function listarIncidentes() {
    console.log('\nLISTA DE INCIDENTES\n');
    if (almacenamiento_js_1.incidentes.length === 0) {
        console.log('No hay incidentes registrados.\n');
        return;
    }
    almacenamiento_js_1.incidentes.forEach(incidente => {
        const fechaFormateada = incidente.fechaCreacion.toLocaleDateString('es-ES');
        console.log(`${incidente.id} | ${incidente.titulo} | ${incidente.prioridad} | ${incidente.estado} | ${incidente.reportadoPor} | ${fechaFormateada}`);
    });
    console.log('');
}
