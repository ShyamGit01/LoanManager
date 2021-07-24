import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {

  customerId: string = '';
  customerDetails: any;
  customerData: any;
  constructor(private activatedRoute: ActivatedRoute,
    private customerService: CustomerService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.customerId = data.id;
    });

    this.customerService.viewCustomer(this.customerId).subscribe(data => {
      this.customerDetails = data;
      this.customerData = this.customerDetails.results;
      console.log(this.customerDetails);
    });


  }

}
