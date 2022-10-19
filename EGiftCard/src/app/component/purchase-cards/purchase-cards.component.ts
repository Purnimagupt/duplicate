import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserGiftDetails } from 'src/app/models/user-gift-details';
import { PurchaseServiceService } from 'src/app/service/purchase-service.service';

@Component({
  selector: 'app-purchase-cards',
  templateUrl: './purchase-cards.component.html',
  styleUrls: ['./purchase-cards.component.css']
})
export class PurchaseCardsComponent implements OnInit {
 userDetails:UserGiftDetails[];

 PurchaseForm: FormGroup=new FormGroup({});
 
 isUpdate:boolean=false;
  constructor(private fb: FormBuilder,private PurchaseService:PurchaseServiceService,private router:Router) { 
    
this.userDetails=new Array();
 
}
    
  

  

  ngOnInit(): void {
   this.PurchaseForm=this.fb.group({
    //userGiftId:new FormControl(''),
    giftCardAmount:new FormControl(''),
    recepientName:new FormControl(''),
    recepientEmail:new FormControl(''),
    recepientMobile:new FormControl(''),
    message:new FormControl('')

   })

  }



  

  saveUserPurchase(){
    //this.userDetails.giftCardAmount=this.PurchaseForm.value.giftCardAmount;
    // this.userDetails.recepientName=this.PurchaseForm.value.recepientName;
    // this.userDetails.recepientEmail=this.PurchaseForm.value.recepientEmail;
    // this.userDetails.receipientMobile=this.PurchaseForm.value.receipientMobile;
  
    

    this.PurchaseService.savePurchaseDetails(this.PurchaseForm.value).subscribe(data=>{
      alert(JSON.stringify(data));
      console.log("Details added")
  },
  err=>{
    console.log(err);
  })
// alert(this.PurchaseForm.value.giftCardAmount+"Amount");
  //this.router.navigate(['/brands/purchase-cards/payment',300])
  this.router.navigate(['/brands/purchase-cards/payment',this.PurchaseForm.value.giftCardAmount]);
  
  }
}