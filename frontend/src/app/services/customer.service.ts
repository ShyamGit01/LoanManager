import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  getCustomers(){
    var url = environment.BASE_URL+environment.CUSTOMER_BASE_URL.GET_ALL_CUSTOMER;
    return this.httpClient.get(url);
  }

  addCustomer(){

  }

  viewCustomer(id: any){
    var url = environment.BASE_URL+environment.CUSTOMER_BASE_URL.VIEW_CUSTOMER+id;
    return this.httpClient.get(url);
  }

  // deleteCustomer(id, customerObj){

  // }

  // updateCustomer(id){

  // }
}
