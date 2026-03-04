import { Component } from '@angular/core';

@Component({
  selector: 'app-header', // El nombre que usarás en app.html
  standalone: true,       // Para que funcione sin NgModules
  imports: [],            // Por ahora no necesitas importar otros componentes aquí
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  // El profesor no tiene lógica aquí por ahora, solo la definición
}