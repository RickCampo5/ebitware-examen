import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc-calculator',
  templateUrl: './imc-calculator.component.html',
  styleUrls: ['./imc-calculator.component.css']
})

export class ImcCalculatorComponent implements OnInit {

  constructor() { }
  
  persona: any = {}
  resultados:any = []

  calcularIMC(){
    var estado;
    var calculo = Math.floor(this.persona.peso/Math.pow(this.persona.altura, 2))
    if(this.persona.sexo == "h"){
      if(calculo < 20) {
        this.persona.interpretacionIMC = "Debajo del peso ideal"
        estado = -1;
      }
      if(calculo > 20 && calculo < 25) {
        this.persona.interpretacionIMC = "Peso Ideal"
        estado = 0;
      }
      if(calculo > 25) {
        this.persona.interpretacionIMC = "Sobrepeso"
        estado = 1
      }
    }
    if(this.persona.sexo == "m"){
      if(calculo < 19) {
        estado = -1;
        this.persona.interpretacionIMC = "Debajo del peso ideal"
      }
      if(calculo > 19 && calculo < 24){
        estado = 0;
        this.persona.interpretacionIMC = "Peso Ideal"
      } 
      if(calculo > 24) {
        estado = 1
        this.persona.interpretacionIMC = "Sobrepeso"
      }
    }
    this.persona.imc = calculo
    return estado
  }

  esMayorDeEdad(){
    if(this.persona.edad > 18) {
      this.persona.mayor = "Si es mayor de edad"
      return true
    }
    if(this.persona.edad < 18) {
      this.persona.mayor = "No es mayor de edad"
      return false
    }
  }

  toString(){
    this.generaNSS()
    this.calcularIMC()
    this.esMayorDeEdad()
    this.resultados.push(this.persona)
    this.persona = {}
  }

  generaNSS(){
    var clave = "";
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'

    for(var i=0; i<9; i++){
      clave += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    }
    this.persona.nss = clave
  }

  ngOnInit() {
  }

}
