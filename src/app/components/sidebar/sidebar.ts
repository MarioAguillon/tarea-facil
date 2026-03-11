import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Usuarios } from './usuario.model';
// Definimos el molde del usuario

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  // Recibimos el objeto usuario basado en la interface
  @Input({ required: true }) usuario!: Usuarios;
  
  // Recibimos el estado de selección para el CSS
  @Input({ required: true }) estaSeleccionado!: boolean;

  @Output() seleccion = new EventEmitter<string>();

  // Ruta dinámica para las fotos en public/img/avatar/
  get rutaImagen() {
    return 'img/avatar/' + this.usuario.avatar;
  }

  alSeleccionarUsuario() {
    this.seleccion.emit(this.usuario.id);
  }
}