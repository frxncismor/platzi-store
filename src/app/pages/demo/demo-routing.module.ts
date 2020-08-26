import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { DemoComponent } from './componentes/demo.component';


const routes: Routes = [
  { path: '', component: DemoComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DemoRoutingModule {

}
