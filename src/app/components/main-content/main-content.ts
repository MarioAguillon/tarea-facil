import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-content', // Mantenemos TU selector
  standalone: true,
  imports: [],
  templateUrl: './main-content.html',
  styleUrl: './main-content.css'
})
export class MainContent {
  // El nombre que viene desde el app.html
  @Input() nombre?: string;
}