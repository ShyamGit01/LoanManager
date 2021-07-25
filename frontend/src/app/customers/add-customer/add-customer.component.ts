import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  AddCustomerForm = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    phoneNumber: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    dob: new FormControl("", [Validators.required]),
      R_address: new FormControl("", [Validators.required]),
      R_city: new FormControl("", [Validators.required]),
      R_state: new FormControl("", [Validators.required]),
      R_pin: new FormControl("", [Validators.required]),
      P_address: new FormControl("", [Validators.required]),
      P_city: new FormControl("", [Validators.required]),
      P_state: new FormControl("", [Validators.required]),
      P_pin: new FormControl("", [Validators.required]),
  });
  
  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  AddCustomer(){
    if(this.AddCustomerForm.valid){
      this.customerService.addCustomer(this.AddCustomerForm.value).subscribe(res => {
        this.AddCustomerForm.reset();
        this.router.navigate(["customers"]);
      })
    }
  }

}
