import { incidentes } from '../data/almacenamiento.js';

export function listarIncidentes(): void {
  console.log('\nLISTA DE INCIDENTES\n');
  
  if (incidentes.length === 0) {
    console.log('No hay incidentes registrados.\n');
    return;
  }

  incidentes.forEach(incidente => {
    const fechaFormateada = incidente.fechaCreacion.toLocaleDateString('es-ES');
    console.log(
      `${incidente.id} | ${incidente.titulo} | ${incidente.prioridad} | ${incidente.estado} | ${incidente.reportadoPor} | ${fechaFormateada}`
    );
  });
  console.log('');
}