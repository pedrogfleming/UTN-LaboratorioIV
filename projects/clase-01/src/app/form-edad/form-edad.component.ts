import { Component, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form-edad',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-edad.component.html',
  styleUrl: './form-edad.component.css'
})
export class FormEdadComponent {
  edadUno!: number;
  edadDos!: number;
  promedioEdades!: number;
  sumaEdades! : number;
  calcularPromedioEdades() {
    this.sumaEdades = this.edadUno + this.edadDos
    this.promedioEdades = this.sumaEdades / 2;
  }
  limpiarInputs(){
    this.edadUno = 0;
    this.edadDos = 0;
    this.sumaEdades = 0;
    this.promedioEdades = 0;
  }
}

