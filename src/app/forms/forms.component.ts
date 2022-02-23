import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  formdata;
  emailid: any;
  

  constructor() { }

  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl("angular@gmail.com"),
      
      // passwd: new FormControl("abcd1234")
      passwd: new FormControl("", this.passwordvalidation)
   });

   
  }

  // onClickSubmit(data) {
  //   this.emailid = data.emailid;
  // }

  onClickSubmit(data) {
    alert("Entered Email id : " + data.emailid);
 }

  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
       return {"passwd" : true};
    }
 }

 user = {
  firstName: 'John',
  password:  'test'
};

contact = {
  firstName1: 'John',
}
onSubmitTemplateBased(user) {
  console.log(user);
}


form = new FormGroup({
  "firstName": new FormControl("", Validators.required),
  "password": new FormControl("", [Validators.required,Validators.minLength(10)]),
});

onSubmit() {
console.log("reactive form submitted");
console.log(this.form);
}

reset() {
  this.form.reset();
}
}
