import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forms';
  defaultJob= 'fullstack_developer';
  firstName:string | undefined;
  
  @ViewChild('myForm') form: NgForm | undefined;

  onSubmit(){
    console.log(this.form);
  }
}
