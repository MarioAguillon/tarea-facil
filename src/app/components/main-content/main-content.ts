import { Component, Input } from '@angular/core';
import { TareaComponent } from '../tarea/tarea'; 
import { NuevaTarea } from '../nueva-tarea/nueva-tarea';
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [TareaComponent, NuevaTarea],
  templateUrl: './main-content.html',
  styleUrl: './main-content.css'
})
export class MainContentComponent {
  @Input({ required: true }) idUsuario!: string;
  @Input({ required: true }) nombre!: string;
  estaAgregandoTareaNueva = false;

  constructor(private tareasService: TareasService) {}

  get tareasUsuarioSeleccionado() {
    return this.tareasService.obtenerTareasDeUsuario(this.idUsuario);
  }

  alIniciarNuevaTarea() {
    this.estaAgregandoTareaNueva = true;
  }

  alCerrarTareaNueva() {
    this.estaAgregandoTareaNueva = false;
  }
}