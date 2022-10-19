import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { UserGiftDetails } from '../models/user-gift-details';

@Injectable({
  providedIn: 'root'
})
export class PurchaseServiceService {

  constructor(private http:HttpClient) { }

  savePurchaseDetails(userDetail:UserGiftDetails):Observable<UserGiftDetails>{
  
    return this.http.post<UserGiftDetails>(" http://localhost:8080/EGiftCardApp/api/usergiftdetails",userDetail)
   
  }
}
