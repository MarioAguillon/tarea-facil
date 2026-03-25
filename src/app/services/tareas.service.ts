import { Injectable } from '@angular/core';
import { NuevaTareaInfo } from '../components/tarea/tarea.model';

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
  ];

  // --- 1. Creamos el constructor ---
  constructor() {
    const tareas = localStorage.getItem('tareas');
    if (tareas) {
      this.tareas = JSON.parse(tareas);
    }
  }

  obtenerTareasDeUsuario(idUsuario: string) {
    return this.tareas.filter((tarea) => tarea.idUsuario === idUsuario);
  }

  agregarTarea(infoDeTarea: NuevaTareaInfo, idUsuario: string) {
    this.tareas.unshift({
      id: new Date().getTime().toString(),
      titulo: infoDeTarea.titulo,
      resumen: infoDeTarea.resumen,
      expira: infoDeTarea.fecha,
      idUsuario: idUsuario
    });
    // --- 2. Llamamos al nuevo método ---
    this.guardarTareas();
  }

  eliminarTarea(id: string) {
    this.tareas = this.tareas.filter((tarea) => tarea.id !== id);
    // --- 3. Llamamos al nuevo método ---
    this.guardarTareas();
  }

  // --- 4. Creamos un nuevo método ---
  private guardarTareas() {
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }
}