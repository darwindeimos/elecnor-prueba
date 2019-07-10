import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { TodosRoutingModule } from './todos-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodosComponent,
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    AngularMaterialModule,
    FormsModule
  ]
})
export class TodosModule { }
