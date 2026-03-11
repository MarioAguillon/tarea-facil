import { Component, Input } from '@angular/core';
import { TareaComponent } from '../tarea/tarea'; 

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [TareaComponent], 
  templateUrl: './main-content.html',
  styleUrl: './main-content.css'
})
export class MainContent {
  // Actualizamos los Inputs para que sean requeridos como en la imagen
  @Input({ required: true }) nombre!: string;
  @Input({ required: true }) idUsuario!: string; 

  tareas = [
    {
      id: 't1',
      idUsuario: 'u1',
      titulo: 'Dominar Angular',
      resumen: 'Aprender todas las características básicas y avanzadas de Angular y cómo aplicarlas.',
      expira: '2026-04-14'
    },
    {
      id: 't2',
      idUsuario: 'u3',
      titulo: 'Crear el primer prototipo',
      resumen: 'Crear el primer prototipo del sitio web de la tienda.',
      expira: '2026-03-16'
    },
    {
      id: 't3',
      idUsuario: 'u3',
      titulo: 'Preparar la plantilla del carrito',
      resumen: 'Preparar y describir una plantilla de carrito de compras de la tienda online.',
      expira: '2026-03-30'
    }
  ];

  // Actualizamos el nombre del get según la imagen
  get tareasUsuarioSeleccionado() {
    return this.tareas.filter((tarea) => tarea.idUsuario === this.idUsuario);
  }
}