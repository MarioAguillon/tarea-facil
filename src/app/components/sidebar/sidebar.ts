import { Component, Input, Output, EventEmitter } from '@angular/core'; // <-- Importante: EventEmitter

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  imports: []
})
export class Sidebar {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) nombre!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) estaSeleccionado!: boolean;
  
  @Output() seleccion = new EventEmitter<string>();

 get rutaImagen() {
  // Prueba quitando o poniendo 'img/' según cómo se llame tu carpeta exacta
  // Si están en public/avatar/ usa:
  return 'avatar/' + this.avatar;
  
  // Si están en public/img/avatar/ usa:
  // return 'img/avatar/' + this.avatar;
}

  alHacerClic() {
    this.seleccion.emit(this.id);
  }
}