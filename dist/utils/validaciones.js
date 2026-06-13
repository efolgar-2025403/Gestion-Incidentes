"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarPrioridad = validarPrioridad;
exports.validarEstado = validarEstado;
function validarPrioridad(valor) {
    return valor === 'Baja' || valor === 'Media' || valor === 'Alta';
}
function validarEstado(valor) {
    return valor === 'Abierto' || valor === 'En progreso' || valor === 'Resuelto';
}
