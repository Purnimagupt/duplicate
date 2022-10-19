import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/app/service/payment.service';
import { DateValidator } from 'src/app/shared/date.validator';
import { PurchaseCardsComponent } from '../purchase-cards/purchase-cards.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentObj:PaymentComponent[];
  PaymentForm: FormGroup=new FormGroup({});
  purchase!: PurchaseCardsComponent;

  giftCardAmount:any;

  get fullName(){
    return this.PaymentForm.get('fullName');
  }

  get nameOnCard(){
    return this.PaymentForm.get('nameOnCard');
  }

  get paymentMethod(){
    return this.PaymentForm.get('paymentMethod');
  }

  get cardNumber(){
    return this.PaymentForm.get('cardNumber');
  }

  get cvv(){
    return this.PaymentForm.get('cvv');
  }
  get cardExpiry(){
    return this.PaymentForm.get('cardExp');
  }


  constructor(private formB:FormBuilder,private paymentService:PaymentService,private route:ActivatedRoute) {
    this.paymentObj=new Array();
    this.giftCardAmount=this.route.snapshot.paramMap.get('giftCardAmount')
    alert(this.giftCardAmount);
   }

   public regexp = "^\\d{14,16}$";
   public regexp2 = "^\\d{3}$";

  ngOnInit(): void {
  //   this.PaymentForm=this.formB.group({
  //     //paymentId:new FormControl(''),
  //     fullName:new FormControl(''),
  //     nameOnCard:new FormControl(''),
  //     paymentAmount:new FormControl(''),
  //     cardNumber:new FormControl(''),
  //     cvv:new FormControl(''),
  //     paymentDate:new FormControl(''),
  //     cardExpiry:new FormControl(''),
  //     paymentMethod:new FormControl('')
  // })
  
  this.PaymentForm=this.formB.group({
    fullName:['', [Validators.required]],
    nameOnCard:['',[Validators.required ]],
    // paymentMethod:[''/*,[Validators.required ]*/],
    cardNumber:['',[Validators.required , Validators.pattern(this.regexp)]],
    cvv:['',[Validators.required,Validators.pattern(this.regexp2)]],
    // cardExp:['',[Validators.required ],DateValidator.dateValidator]
    cardExpiry:['',Validators.compose([Validators.required])],
    paymentAmount: [this.giftCardAmount,[Validators.required]]


    
  });
}

  savePaymentDetails(){
    this.paymentService.addPaymentDetails(this.PaymentForm.value).subscribe((data: any)=>{
      alert(JSON.stringify(data));
      console.log("Details added")
  },
      (  err: any)=>{
    console.log(err);
  })
  }
}

