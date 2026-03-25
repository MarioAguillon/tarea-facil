import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'app-nueva-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nueva-tarea.html',
  styleUrl: './nueva-tarea.css',
})
export class NuevaTarea { 
  @Input({ required: true }) idUsuario!: string;
  @Output() cerrar = new EventEmitter<void>();

  tituloIngresado = '';
  resumenIngresado = '';
  fechaIngresado = '';

  private tareasService = inject(TareasService);

  alCancelar() {
    this.cerrar.emit();
  }

  alEnviar() {
    this.tareasService.agregarTarea({
      titulo: this.tituloIngresado,
      resumen: this.resumenIngresado,
      fecha: this.fechaIngresado
    }, this.idUsuario);

    this.cerrar.emit(); // Esto cierra el formulario automáticamente
  } 
}