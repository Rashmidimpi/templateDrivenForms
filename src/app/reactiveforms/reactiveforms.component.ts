import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss'],
})
export class ReactiveformsComponent implements OnInit {
  reactiveForm: FormGroup;
  formStatus;

  constructor() {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        this.noSpaceAllowed,
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        this.noSpaceAllowed,
      ]),
      password: new FormControl(null),
      confirmPassword: new FormControl(null),
      gender: new FormControl(null),
      age: new FormControl(null),
      email: new FormControl(
        null,
        [Validators.required, Validators.email],
        this.emailNotAllowed
      ),
      phoneNumber: new FormControl(null),
      address: new FormControl(null),
      postalCode: new FormControl(null),
      tAndc: new FormControl(null),
      // this formArray has 2 formcontrol elements
      skills: new FormArray([new FormControl(null, Validators.required),
        new FormControl(null, Validators.required)]),
    });

    // valueChnages in a formcontrol
    // this.reactiveForm.get('firstName').valueChanges.subscribe((value)=>{
    //   console.log(value);
    // })

    // valueChanges in a formGroup
      this.reactiveForm.valueChanges.subscribe((value)=>{
        console.log(value);
      })

    // this.reactiveForm.statusChanges.subscribe((value) => {
    //   console.log(value);
    //   this.formStatus = value;
    // });

    // setTimeout(()=>{
    //   this.reactiveForm.setValue({
    //     firstName : '',
    //     lastName : '',
    //     password:'',
    //     confirmPassword: '',
    //     gender: '',
    //     age:'',
    //     email : 'abc@yopmail.com',
    //     phoneNumber: '',
    //     address: '',
    //     postalCode: '',
    //     tAndc:'',
    //     skills: []
    //   })
    // },4000)

    // We can use patchValue to set value for the particular formcontrol instead of mentioning all formcontrols

    setTimeout(() => {
      this.reactiveForm.patchValue({
        email: 'abc@yopmail.com',
      });
    }, 4000);
  }

  onSubmit() {
    console.log(this.reactiveForm);
    this.reactiveForm.reset({
      firstName : '',
          lastName : '',
          password:'',
          confirmPassword: '',
          gender: 'male',
          age:'over',
          email : 'abc@yopmail.com',
          phoneNumber: '',
          address: '',
          postalCode: '',
          tAndc:'',
          skills: []
     });
  }

  // to add a new  ele in array
  addSkills() {
    (<FormArray>this.reactiveForm.get('skills')).push(
      new FormControl(null, Validators.required)
    );
  }

  noSpaceAllowed(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { noSpaceAllowed: true };
    }
    return null;
  }

  emailNotAllowed(control: FormControl): Promise<any> | Observable<any> {
    const response = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'rashmi@gmail.com') {
          resolve({ emailNotAllowed: true });
        } else {
          resolve(null);
        }
      }, 5000);
    });
    return response;
  }
}
