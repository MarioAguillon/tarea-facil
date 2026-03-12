import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nueva-tarea',
  standalone: true, // <--- AGREGA ESTA LÍNEA
  imports: [FormsModule],
  templateUrl: './nueva-tarea.html',
  styleUrl: './nueva-tarea.css',
})
export class NuevaTarea { // Se llama NuevaTarea
  @Output() cancelar = new EventEmitter<void>();

  tituloIngresado = '';
  resumenIngresado = '';
  fechaIngresado = '';

  alCancelar(){
    this.cancelar.emit();
  }




}