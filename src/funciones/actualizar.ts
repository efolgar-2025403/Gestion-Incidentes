import { incidentes } from '../data/almacenamiento.js';
import { validarEstado } from '../utils/validaciones.js';
import { listarIncidentes } from './listar.js';
import promptSync from 'prompt-sync';

const prompt = promptSync();

export function actualizarEstado(): void {
  console.log('\nACTUALIZAR ESTADO DE INCIDENTE\n');
  
  if (incidentes.length === 0) {
    console.log('No hay incidentes para actualizar.\n');
    return;
  }

  listarIncidentes();
  
  const idInput = prompt('ID del incidente a actualizar: ');
  const id = parseInt(idInput);
  
  if (isNaN(id)) {
    console.log('\nID invalido. Debe ser un numero.\n');
    return;
  }
  
  const incidente = incidentes.find(inc => inc.id === id);
  
  if (!incidente) {
    console.log(`\nIncidente con ID ${id} no encontrado.\n`);
    return;
  }

  console.log(`\nIncidente: ${incidente.titulo}`);
  console.log(`Estado actual: ${incidente.estado}\n`);
  
  let nuevoEstado: any;
  while (true) {
    const estadoInput = prompt('Nuevo estado (Abierto/En progreso/Resuelto): ');
    if (validarEstado(estadoInput)) {
      nuevoEstado = estadoInput;
      break;
    }
    console.log('Estado invalido. Intente nuevamente.');
  }

  incidente.estado = nuevoEstado;
  console.log(`\nEstado del incidente #${id} actualizado a "${nuevoEstado}".\n`);
}