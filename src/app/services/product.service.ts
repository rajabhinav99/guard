import { Injectable } from '@angular/core';
import { Product } from '../class/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 products:Product[] =
  [
    { id: 1, name: 'laptop', cost: 1000,

    category: 'eletronics' },
    
    { id: 2, name: 'phone', cost: 2000,
    
    category: 'eletronics' },
    
    { id: 3, name: 'fan', cost: 3000,
    
    category: 'eletronics' }
    
    ];
    
    getproducts()
    
    {
    
    return this.products;
    
    }
  
    
    addproduct(id:number,productname:string,
    
    cost:number,category:string) { 
    
    let newproduct =
    
    { 
    
    id: this.products.length+1,
    
    name: productname, cost:cost, 
    
    category: category 
    
    };
    
    
    return this.products.push(newproduct);
    
    }
    
    
    deleteproduct(product: Product) {
    
    //alert(event.name);
    
    let indexPosition = this.products.indexOf
    
    (product);
    
    //if(product.id=== indexPosition)
    
    // {
    
    return this.products.splice(indexPosition, 1);
    
    
    
    
    //}
    
    
    //this.products = this.products.filter(e => e.id !== parseInt(product.id));
    
    }
   
    constructor() { }
    
    }
    
    
    
