import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss'],
})
export class FichaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  generarReceta(){

    this.router.navigate(['receta']);
  }

}
