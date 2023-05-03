import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';


const routes: Routes = [
  {
    path: '',
    component: TemplateDrivenFormsComponent ,
    },
  {
  path: 'form',
  component: TemplateDrivenFormsComponent ,
  },
  {
    path: 'reactiveForm',
    component: ReactiveformsComponent ,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
