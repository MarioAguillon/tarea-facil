import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from './tarea.model';


@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [],
  templateUrl: './tarea.html',
  styleUrl: './tarea.css'
})
export class TareaComponent {
  // 2. Agregamos el Input requerido para recibir el objeto tarea completo
  @Input({ required: true }) tarea!: Tarea;
  @Output() terminada = new EventEmitter<string>();

  // En tarea.ts
alCompletarTarea() {
  // Esta línea es la que "activa" el (terminada) del padre
  this.terminada.emit(this.tarea.id); 
}
}