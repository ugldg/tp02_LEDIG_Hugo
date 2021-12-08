import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saisie-component',
  templateUrl: './saisie-component.component.html',
  styleUrls: ['./saisie-component.component.css']
})
export class SaisieComponentComponent implements OnInit {
  name : string = "NAME";
  valide : boolean = false;

  constructor() {
    // let name : string = "TestBinding";
   }

  ngOnInit(): void {
  }

  onClick() : void {
    console.log(this.name);
  }
}
