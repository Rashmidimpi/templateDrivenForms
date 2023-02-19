import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  defaultJob= 'fullstack_developer';
  firstName!:string;
  email!: string;
  age!: string;
  job!: string;
  interest!: string;

  @ViewChild('myForm') form: NgForm | any;
  // age= [
  //   { id:1, value:'Under 13'},
  //   {id:2, value:'13 or Older'},
  // ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit(){
    console.log(this.form);
    this.firstName = this.form.value.personalDetails.firstName;
    this.email = this.form.value.personalDetails.email;
    this.age = this.form.value.personalDetails.age;
    this.job = this.form.value.job;
    this.interest = this.form.value.interest;

    this.form.reset();
  }
  
  next(){
    this.router.navigate(['reactiveForm']);
  }

  setDefaultValues(){
    // this.form.value.personalDetails.firstName = 'Rashmi';
    // this.form.value.personalDetails.email = 'abc@gmail.com';

    // this.form.setValue(
    //   {
    //     bio: '',
    //     interest: '',
    //     job: '',
    //     personalDetails:{
    //       firstName: 'Rashmi',
    //       email: 'abc@gmail.com',
    //       age: '',
    //       password: ''
    //     }

    //   }
    // )

    this.form.form.patchValue({
      personalDetails:{
              firstName: 'Rashmi',
              email: 'abc@gmail.com'
            }

    })

  }

}
