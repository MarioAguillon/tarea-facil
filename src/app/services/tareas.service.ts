import { Injectable } from '@angular/core';
import { NuevaTareaInfo } from '../components/tarea/tarea.model'; // Asegúrate de que esta ruta sea correcta

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private tareas = [
    {
      id: 't3',
      idUsuario: 'u3',
      titulo: 'Preparar la plantilla del carrito',
      resumen: 'Preparar y describir una plantilla de carrito de compras de la tienda online',
      expira: '2026-03-30',
    },
    // ... puedes dejar las otras tareas que ya tenías aquí
  ];

  // 1. Método para obtener tareas (Se quita el "this" de idUsuario)
  obtenerTareasDeUsuario(idUsuario: string) {
    return this.tareas.filter((tarea) => tarea.idUsuario === idUsuario);
  }

  // 2. Método para agregar (Se agrega idUsuario como parámetro y se quita el "this")
  agregarTarea(infoDeTarea: NuevaTareaInfo, idUsuario: string) {
    this.tareas.unshift({
      id: new Date().getTime().toString(),
      titulo: infoDeTarea.titulo,
      resumen: infoDeTarea.resumen,
      expira: infoDeTarea.fecha,
      idUsuario: idUsuario // <-- Aquí se usa el parámetro directamente
    });
  }

  // 3. Método para eliminar (Se copia igual)
  eliminarTarea(id: string) {
    this.tareas = this.tareas.filter((tarea) => tarea.id !== id);
  }
}