/**
 * Created by jtrumpower on 7/10/17.
 */
import {Component} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: '../../html/home.component.html',
  styleUrls: ['../../css/home.component.css']
})
export class HomeComponent /*implements OnInit*/ {

  /*heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }*/
}
