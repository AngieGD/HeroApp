import { Component, OnInit } from '@angular/core';
import { GetHeroesService } from 'src/app/services/get-heroes.service';
import { Heroe } from '../../interface/heroe.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
    ` mat-card {
      margin-top: 20px
    }
    `
  ]
})
export class ListadoComponent implements OnInit {
  public heroes:Heroe[] = [];
  constructor(private serviceHeroe: GetHeroesService) { }
  public listHeroes() {
    this.serviceHeroe.getHeroes().subscribe(dato => {
      console.log(dato)
    })
  }

  ngOnInit(): void {
    this.serviceHeroe.getHeroes() 
      .subscribe(dato =>{
        this.heroes = dato
        console.log(this.heroes)
      });
      
  }

}
