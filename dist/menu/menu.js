"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.iniciarMenu = iniciarMenu;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const crear_js_1 = require("../funciones/crear.js");
const listar_js_1 = require("../funciones/listar.js");
const actualizar_js_1 = require("../funciones/actualizar.js");
const prompt = (0, prompt_sync_1.default)();
function mostrarMenu() {
    console.log('\nSISTEMA DE GESTION DE INCIDENTES\n');
    console.log('1. Crear nuevo incidente');
    console.log('2. Listar todos los incidentes');
    console.log('3. Actualizar estado de incidente');
    console.log('4. Salir');
}
function iniciarMenu() {
    console.log('\nIniciando Sistema de Gestion de Incidentes...');
    let opcion;
    while (true) {
        mostrarMenu();
        opcion = prompt('\nSeleccione una opcion (1-4): ');
        switch (opcion) {
            case '1':
                (0, crear_js_1.crearIncidente)();
                break;
            case '2':
                (0, listar_js_1.listarIncidentes)();
                break;
            case '3':
                (0, actualizar_js_1.actualizarEstado)();
                break;
            case '4':
                console.log('\nHasta luego.\n');
                return;
            default:
                console.log('\nOpcion invalida. Intente nuevamente.\n');
        }
    }
}
