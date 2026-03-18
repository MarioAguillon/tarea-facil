import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NuevaTareaInfo } from '../tarea/tarea.model'; //


@Component({
  selector: 'app-nueva-tarea',
  standalone: true, // <--- AGREGA ESTA LÍNEA
  imports: [FormsModule],
  templateUrl: './nueva-tarea.html',
  styleUrl: './nueva-tarea.css',
})
export class NuevaTarea { 
  @Output() cancelar = new EventEmitter<void>();
  @Output() agregar = new EventEmitter<NuevaTareaInfo>();

  tituloIngresado = '';
  resumenIngresado = '';
  fechaIngresado = '';

  alCancelar() {
    this.cancelar.emit();
  }

  // ESTE MÉTODO DEBE IR AQUÍ ADENTRO
  alEnviar() {
    this.agregar.emit({
      titulo: this.tituloIngresado,
      resumen: this.resumenIngresado,
      fecha: this.fechaIngresado
    });
  } 
} // <--- ESTA LLAVE CIERRA LA CLASE Y DEBE SER LA ÚLTIMA
