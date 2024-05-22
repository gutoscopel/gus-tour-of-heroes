import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent implements OnInit {
  hero: Hero = { id: 1, name: 'Gus Flash' };

  constructor() {}
  ngOnInit(): void {}
}
