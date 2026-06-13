"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actualizarEstado = actualizarEstado;
const almacenamiento_js_1 = require("../data/almacenamiento.js");
const validaciones_js_1 = require("../utils/validaciones.js");
const listar_js_1 = require("./listar.js");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function actualizarEstado() {
    console.log('\nACTUALIZAR ESTADO DE INCIDENTE\n');
    if (almacenamiento_js_1.incidentes.length === 0) {
        console.log('No hay incidentes para actualizar.\n');
        return;
    }
    (0, listar_js_1.listarIncidentes)();
    const idInput = prompt('ID del incidente a actualizar: ');
    const id = parseInt(idInput);
    if (isNaN(id)) {
        console.log('\nID invalido. Debe ser un numero.\n');
        return;
    }
    const incidente = almacenamiento_js_1.incidentes.find(inc => inc.id === id);
    if (!incidente) {
        console.log(`\nIncidente con ID ${id} no encontrado.\n`);
        return;
    }
    console.log(`\nIncidente: ${incidente.titulo}`);
    console.log(`Estado actual: ${incidente.estado}\n`);
    let nuevoEstado;
    while (true) {
        const estadoInput = prompt('Nuevo estado (Abierto/En progreso/Resuelto): ');
        if ((0, validaciones_js_1.validarEstado)(estadoInput)) {
            nuevoEstado = estadoInput;
            break;
        }
        console.log('Estado invalido. Intente nuevamente.');
    }
    incidente.estado = nuevoEstado;
    console.log(`\nEstado del incidente #${id} actualizado a "${nuevoEstado}".\n`);
}
