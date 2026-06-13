import { Incidente, Prioridad } from '../types/incidente.js';
import { incidentes, generarId } from '../data/almacenamiento.js';
import { validarPrioridad } from '../utils/validaciones.js';
import promptSync from 'prompt-sync';

const prompt = promptSync();

export function crearIncidente(): void {
  console.log('\nCREAR NUEVO INCIDENTE\n');

  const titulo = prompt('Titulo: ');
  
  if (!titulo.trim()) {
    console.log('El titulo no puede estar vacio.\n');
    return;
  }
  
  const descripcion = prompt('Descripcion: ');
  const reportadoPor = prompt('Reportado por: ');
  
  let prioridad: Prioridad;
  while (true) {
    const prioridadInput = prompt('Prioridad (Baja/Media/Alta): ');
    if (validarPrioridad(prioridadInput)) {
      prioridad = prioridadInput;
      break;
    }
    console.log('Prioridad invalida. Intente nuevamente.');
  }

  const nuevoIncidente: Incidente = {
    id: generarId(),
    titulo,
    descripcion,
    reportadoPor,
    prioridad,
    estado: 'Abierto',
    fechaCreacion: new Date()
  };

  incidentes.push(nuevoIncidente);
  console.log(`\nIncidente #${nuevoIncidente.id} creado exitosamente.\n`);
}