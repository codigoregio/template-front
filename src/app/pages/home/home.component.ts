import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';

const ROWS_HEIGHT: {[id:number]:number} = {
  1:400,
  3:335,
  4:350
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  protected cols = 3
  protected category: string| undefined;
  protected rowHeight = ROWS_HEIGHT[this.cols]
  protected products: Array<Product> | undefined;
  protected productsStripe: Array<any> | undefined;
  protected sort: string = 'asc';
  protected count: number = 2;
  protected productSubscription: Subscription | undefined
  protected productsStripeSubscription: Subscription | undefined

  constructor( private carService: CartService, private storeService: StoreService ) { }

  ngOnInit(): void {
    this.getProducts();
    //this.getAllProductsByStripe();
  }

  getProducts(): void{
    this.productSubscription = this.storeService.getAllProducts(this.count, this.sort, this.category)
    .subscribe( _products => {
      console.log('products', _products)
      this.products = _products;
    })
  }

  getAllProductsByStripe(): void {
    this.productsStripeSubscription = this.storeService.getAllProdcutsStripe()
    .subscribe( _productsStripe => {
      this.productsStripe = _productsStripe;
      console.log('products stripe', _productsStripe)
    })
  }

  protected onColumnsCountChanged(colsNumber: any){
    this.cols = colsNumber;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  protected onShowCategoryChanged(newCategory: string) {
    this.category = newCategory;
    this.getProducts();
  }

  protected onAddToCart( product: Product){
    this.carService.addToCart({
      product: product.images[0],
      name: product.name,
      price: product.price_amount,
      quantity: 1,
      id: product.id,
    });
  }

  onItemsCountChange(count: number){
    this.count = count
    this.getProducts()
  }

  onSortChange(sort: string){
    this.sort = sort;
    this.getProducts();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.productSubscription){
      this.productSubscription.unsubscribe();
    }
  }
}
