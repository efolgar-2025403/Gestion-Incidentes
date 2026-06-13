import { Incidente } from '../types/incidente.js';

export let incidentes: Incidente[] = [];
export let siguienteId: number = 1;

export function generarId(): number {
  return siguienteId++;
}