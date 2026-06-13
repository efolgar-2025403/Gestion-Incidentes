"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearIncidente = crearIncidente;
const almacenamiento_js_1 = require("../data/almacenamiento.js");
const validaciones_js_1 = require("../utils/validaciones.js");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function crearIncidente() {
    console.log('\nCREAR NUEVO INCIDENTE\n');
    const titulo = prompt('Titulo: ');
    if (!titulo.trim()) {
        console.log('El titulo no puede estar vacio.\n');
        return;
    }
    const descripcion = prompt('Descripcion: ');
    const reportadoPor = prompt('Reportado por: ');
    let prioridad;
    while (true) {
        const prioridadInput = prompt('Prioridad (Baja/Media/Alta): ');
        if ((0, validaciones_js_1.validarPrioridad)(prioridadInput)) {
            prioridad = prioridadInput;
            break;
        }
        console.log('Prioridad invalida. Intente nuevamente.');
    }
    const nuevoIncidente = {
        id: (0, almacenamiento_js_1.generarId)(),
        titulo,
        descripcion,
        reportadoPor,
        prioridad,
        estado: 'Abierto',
        fechaCreacion: new Date()
    };
    almacenamiento_js_1.incidentes.push(nuevoIncidente);
    console.log(`\nIncidente #${nuevoIncidente.id} creado exitosamente.\n`);
}
