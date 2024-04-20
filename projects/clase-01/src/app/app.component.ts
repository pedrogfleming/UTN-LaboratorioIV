import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormEdadComponent } from './form-edad/form-edad.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormEdadComponent, BienvenidoComponent, LoginComponent, ErrorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clase-01';
}
