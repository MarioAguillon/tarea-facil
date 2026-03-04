import { Component, Input } from '@angular/core'; // <-- Revisa que diga 'Input'

@Component({
  selector: 'app-main-content',
  standalone: true,
  templateUrl: './main-content.html',
  styleUrl: './main-content.css',
  imports: [] 
})
export class MainContent {
  // Sin esta línea, el HTML fallará al intentar leer {{ nombre }}
  @Input({ required: true }) nombre!: string; 
}