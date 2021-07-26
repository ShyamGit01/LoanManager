import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css'],
})
export class DeleteCustomerComponent implements OnInit {
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
    });
  }

  removeCustomer(){
    this.customerId = this.activatedRoute.snapshot.paramMap.get("id")!;
    this.customerService.deleteCustomer(this.customerId).subscribe(res => {
      this.router.navigate(["/customers"]);
  });
}
}
