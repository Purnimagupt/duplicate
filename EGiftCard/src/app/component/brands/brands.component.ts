import { Component, OnInit } from '@angular/core';
import { Brands } from 'src/app/models/brands';
import { BrandsService } from 'src/app/service/brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  brands:Brands[];

  constructor(private brandService:BrandsService) {
    this.brands=new Array();
   }

  ngOnInit(): void {
    this.brandService.getAlBrands()
    .subscribe(
      data=>{
        alert(JSON.stringify(data))
this.brands=data},
      err=>{console.log(err)}
    );

  
  }

}
