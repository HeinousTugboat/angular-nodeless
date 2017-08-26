import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }
];

/*
 * NOTE: we **have** to use the HashLocationStrategy for this project, since we
 * don't have the ability to rewrite URLs on a local filesystem.
 */
@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
