import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})


export class Component1Component implements OnInit {

  Nombre:Text
  correo:Text
  contrasena:Text
  confirmarcontra:Text
  telefono:number
  

  constructor(private router:Router) { }//Navegar
  ngOnInit() {
    localStorage.clear();//Borrar datos en LocalStorge
  }

  almacenar(){
    localStorage.setItem('Nombre', this.Nombre.toString())
    localStorage.setItem('correo', this.correo.toString())
    localStorage.setItem('contraseña', this.contrasena.toString())
    localStorage.setItem('confir', this.confirmarcontra.toString())
    localStorage.setItem('telefono', this.telefono.toString())

  }



  nav(){
    this.router.navigate(['2'])
  }
}
