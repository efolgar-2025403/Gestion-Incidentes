import { Prioridad, EstadoIncidente } from '../types/incidente.js';

export function validarPrioridad(valor: string): valor is Prioridad {
  return valor === 'Baja' || valor === 'Media' || valor === 'Alta';
}

export function validarEstado(valor: string): valor is EstadoIncidente {
  return valor === 'Abierto' || valor === 'En progreso' || valor === 'Resuelto';
}