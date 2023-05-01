import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';

const routes: Routes = [
  {
    path: '',
    component: ReactiveFormComponent ,
    },
  {
  path: 'form',
  component: ReactiveFormComponent ,
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
