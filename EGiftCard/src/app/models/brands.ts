export class Brands {
     brandName:string;
     brandDescription:string;
     imageUrl:string;




constructor(brandName:string,brandDescription:string,imageUrl:string){
    this.brandName=brandName;
    this.brandDescription=brandDescription;
    this.imageUrl=imageUrl;
    
}

toString():string{
    return this.brandName+'brandName'+
    this.brandDescription+'brandDescription'+
    this.imageUrl+'imageUrl'
}
}