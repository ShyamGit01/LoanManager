import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {


  UpdateCustomerForm = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    phoneNumber: new FormControl("", [Validators.required]),
    password: new FormControl(""),
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


  customerId: string = '';
  customerDetails: any;
  customerData: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.customerId = data.id;
    });

    this.customerService.viewCustomer(this.customerId).subscribe((data) => {
      this.customerDetails = data;
      this.customerData = this.customerDetails.results;
      console.log(this.customerDetails);
      this.UpdateCustomerForm.get("firstName")?.setValue(this.customerData.firstName);
      this.UpdateCustomerForm.get("lastName")?.setValue(this.customerData.lastName);
      this.UpdateCustomerForm.get("email")?.setValue(this.customerData.email);
      this.UpdateCustomerForm.get("phoneNumber")?.setValue(this.customerData.phoneNumber);
      this.UpdateCustomerForm.get("dob")?.setValue(this.customerData.dob);
      this.UpdateCustomerForm.get("R_address")?.setValue(this.customerData.R_address);
      this.UpdateCustomerForm.get("R_city")?.setValue(this.customerData.R_city);
      this.UpdateCustomerForm.get("R_state")?.setValue(this.customerData.R_state);
      this.UpdateCustomerForm.get("R_pin")?.setValue(this.customerData.R_pin);
      this.UpdateCustomerForm.get("P_address")?.setValue(this.customerData.P_address);
      this.UpdateCustomerForm.get("P_address")?.setValue(this.customerData.P_address);
      this.UpdateCustomerForm.get("P_city")?.setValue(this.customerData.P_city);
      this.UpdateCustomerForm.get("P_state")?.setValue(this.customerData.P_state);
      this.UpdateCustomerForm.get("P_pin")?.setValue(this.customerData.P_pin);
    });
  }

  updateCustomer(){
    console.log("Update WOrks");
    this.customerId = this.activatedRoute.snapshot.paramMap.get("id")!;
    if(this.UpdateCustomerForm){
      this.customerService.updateCustomer(this.customerId, this.UpdateCustomerForm.value).subscribe(res => {
        this.UpdateCustomerForm.reset();
        this.router.navigate(["customers"]);
      })
    }
  }
}