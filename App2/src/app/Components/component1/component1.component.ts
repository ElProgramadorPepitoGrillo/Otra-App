import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})


export class Component1Component implements OnInit {
  num:number;
  sueldos=[234,456,237,990,45];
  

  constructor() { }
  

  ngOnInit() {
    this.num=0;
  }

}
