import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interface/heroe.interface';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {
  @Input () item!:Heroe;
  constructor() { }

  ngOnInit(): void {
  }

}
