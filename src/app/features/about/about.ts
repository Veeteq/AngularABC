import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {

}
