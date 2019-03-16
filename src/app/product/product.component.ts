import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../class/product';

@Component({

  selector: 'app-product',

  templateUrl: './product.component.html',

  styleUrls: ['./product.component.css']

})

export
class ProductComponent
implements OnInit {

  products:Product[]=[];



  constructor(private prodservice:ProductService)
 { }



  ngOnInit() {

    this.products=this.prodservice.getproducts();

  }

  deleteFromService(product:Product){

  this.prodservice.deleteproduct(product);

  }

  addproductToService(id,productname,cost,category)

  {

    //alert(desc);

    this.prodservice.addproduct(id,productname,cost,category);

    //this.clearTextboxes();

  }

  

deleteFromServices(prodid){

  let index=0;

  for(let pro
of 
this.products)

  if(pro.id==prodid){

    this.products.splice(index,1);

  }

  index++;

}
@ViewChild('refproductid') prodtidInput : ElementRef;
@ViewChild('refproductname') prodtnameInput : ElementRef;
@ViewChild('refproductcost') prodtcostInput : ElementRef;
@ViewChild('refproductcategory') prodtcategoryInput : ElementRef;

clearTextboxes(){
  this.prodtidInput.nativeElement.value = '';
  this. prodtnameInput.nativeElement.value = '';
  this.prodtcostInput.nativeElement.value = '';
  this.prodtcategoryInput.nativeElement.value = '';
}

}
