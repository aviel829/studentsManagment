/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { HeroService } from "../../services/hero.service";
import { Hero } from "../../models/hero";
import { Router } from '@angular/router';

@Component({
    selector: 'my-heroes',
    templateUrl: './app/components/heroes/heroes.component.html'
})

export class HeroesComponent implements OnInit {

    heroes: Hero[];
    selectedHero: Hero;
    error: any;

    constructor(
        private router: Router,
        private heroService: HeroService) { }
    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit() {
        this.getHeroes();
    }
    onSelect(hero: Hero) { this.selectedHero = hero; }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedHero._id]);
    }

    addHero() {
        this.selectedHero = null;
        this.router.navigate(['/detail', 'new']);
    }

    deleteHero(hero: Hero, event: any) {
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(res => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            })
            .catch(error => this.error = error);
    }
}

@Pipe({ name: 'sudentsfilter', pure: false })
export class SudentsFilterPipe {
    transform(data: Hero[], search: any): Array<any> {
        if (!data) {
            return [];
        }
        let newData = data.filter((item) => {
            return ((item.firstname + "," + item.lastname + "," + item.year + "," + item.department).toLowerCase().indexOf(search) !== -1) || ((item.firstname + "," + item.lastname + "," + item.year + "," + item.department).indexOf(search) !== -1);
        });
        if(newData.length === 0) {
            return data;
        }
        return newData;
    }
}