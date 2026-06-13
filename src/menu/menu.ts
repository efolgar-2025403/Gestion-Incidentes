import promptSync from 'prompt-sync';
import { crearIncidente } from '../funciones/crear.js';
import { listarIncidentes } from '../funciones/listar.js';
import { actualizarEstado } from '../funciones/actualizar.js';

const prompt = promptSync();

function mostrarMenu(): void {
  console.log('\nSISTEMA DE GESTION DE INCIDENTES\n');
  console.log('1. Crear nuevo incidente');
  console.log('2. Listar todos los incidentes');
  console.log('3. Actualizar estado de incidente');
  console.log('4. Salir');
}

export function iniciarMenu(): void {
  console.log('\nIniciando Sistema de Gestion de Incidentes...');
  
  let opcion: string;
  
  while (true) {
    mostrarMenu();
    opcion = prompt('\nSeleccione una opcion (1-4): ');
    
    switch (opcion) {
      case '1':
        crearIncidente();
        break;
      case '2':
        listarIncidentes();
        break;
      case '3':
        actualizarEstado();
        break;
      case '4':
        console.log('\nHasta luego.\n');
        return;
      default:
        console.log('\nOpcion invalida. Intente nuevamente.\n');
    }
  }
}