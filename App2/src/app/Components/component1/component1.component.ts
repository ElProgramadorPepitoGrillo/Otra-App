import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})


export class Component1Component implements OnInit {
  num:number;
  suma:number
  result:any
  sueldos=[234,456,237,990,45,78];//Matriz con NgFor
  

  constructor(private router:Router) { }//Navegar
  ngOnInit() {
    this.num=1;//Muestra al iniciar 1 en num
    localStorage.clear();//Borrar datos en LocalStorge
  }

  almacenar(){
    localStorage.setItem('valor', this.num.toString())
    localStorage.setItem('CLAVE ','Almacenado')
  }


  recuperar(){

    this.result=localStorage.getItem('valor')//Para recuperar un item de valor en localstorge
    this.suma=2+Number(this.result)   
  }

  nav(){
    this.router.navigate(['2'])
  }
}
