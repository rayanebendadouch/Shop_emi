import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListproductComponent } from './listproduct/listproduct.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListproductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-one';
}
