import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../usuario';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  protected usuario: Usuario = new Usuario("", "");
  login(){
    if(this.usuario.nombre != "" && this.usuario.clave != ""){
      
    }
  }
}
