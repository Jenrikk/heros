import { HeroesService } from './../../servicios/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";




@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
 
})
export class BuscarComponent implements OnInit {

  resultados:any[] = [];
  termino:string = "";

  constructor( private _activatedRoute:ActivatedRoute,
               private _heroesService:HeroesService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params =>{
      this.termino = params['termino'];
      this.resultados = this._heroesService.buscarHeroes(params['termino']);
    })

    
  }

}
