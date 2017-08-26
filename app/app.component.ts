import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'app-component',
    template: `
        <h1>{{title}}</h1>
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name">
        </div>
    `
})
export class AppComponent {
    title = 'Tour of Heroes: Nodeless Edition!';
    hero: Hero = {
        id: 1,
        name: 'Windstorm the Pantsless'
    };
}
