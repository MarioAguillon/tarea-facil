import { Component, inject, Input } from '@angular/core';
import { Tarea } from './tarea.model'; 
import { TareasService } from '../../services/tareas.service';
import { Tarjeta } from '../tarjeta/tarjeta';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [Tarjeta, DatePipe],
  templateUrl: './tarea.html',
  styleUrl: './tarea.css',
})
export class TareaComponent {
  @Input({ required: true }) tarea!: Tarea;

  private tareasService = inject(TareasService);

  alCompletarTarea() {
    // El botón en el HTML debe llamar a este método
    this.tareasService.eliminarTarea(this.tarea.id);
  }
}