import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor() { }
 suma:any
 result:any
  ngOnInit() {
  }

  recuperar(){

    this.result=localStorage.getItem('valor')//Para recuperar un item
    this.suma=2+Number(this.result)   
  }
}
