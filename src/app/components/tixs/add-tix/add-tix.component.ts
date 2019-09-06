import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmEqualValidatorDirective } from '../../../confirm-equal-validator.directive';




@Component({
  selector: 'app-add-tix',
  templateUrl: './add-tix.component.html',
  styleUrls: ['./add-tix.component.css']
})
export class AddTixComponent implements OnInit {
ngFormAddTix: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  	  this.ngFormAddTix = this.formBuilder.group({
      productName: ['', Validators.required]
    });

  }
    get fval() {
  return this.ngFormAddTix.controls;
  }


  
  firstStep(): void{
     this.submitted = true;
     if (this.ngFormAddTix.invalid) {
          return;
            }         
  }


}
