import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina1Component } from './pagina1/pagina1.component';

const routes: Routes = [
	{ path: 'pagina1', component: Pagina1Component},
	{ path: 'pagina2', component: Pagina2Component},
	{ path: '', redirectTo: '/pagina1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
