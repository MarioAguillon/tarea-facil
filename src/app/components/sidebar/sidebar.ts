import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  // Datos recibidos desde el componente padre (App)
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) nombre!: string;
  @Input({ required: true }) id!: string;
  @Input({ required: true }) estaSeleccionado!: boolean;

  // Emisor para avisar al padre qué usuario se eligió
  @Output() seleccion = new EventEmitter<string>();

  // Genera la ruta de la imagen
  get rutaImagen() {
    return 'img/avatar/' + this.avatar;
  }

  // Función que se dispara al interactuar con el usuario
  alSeleccionarUsuario() {
    this.seleccion.emit(this.id);
  }
}