import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutingModule } from './demo-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { DemoComponent } from './componentes/demo.component';



@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    DemoRoutingModule,
    SharedModule
  ]
})
export class DemoModule { }
