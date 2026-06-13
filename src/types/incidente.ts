export type Prioridad = 'Baja' | 'Media' | 'Alta';

export type EstadoIncidente = 'Abierto' | 'En progreso' | 'Resuelto';

export interface Incidente {
  readonly id: number;
  titulo: string;
  descripcion: string;
  reportadoPor: string;
  prioridad: Prioridad;
  estado: EstadoIncidente;
  fechaCreacion: Date;
}