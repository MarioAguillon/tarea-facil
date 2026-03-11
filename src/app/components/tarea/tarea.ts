import { Component, Input } from '@angular/core';
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
}