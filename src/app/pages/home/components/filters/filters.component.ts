import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styles: [
  ]
})
export class FiltersComponent implements OnInit {
  protected categories: string[] | undefined;
  protected categoriesSubscription: Subscription | undefined;


  @Output() showCategory = new EventEmitter<string>();
  constructor(private storeService: StoreService ) { }

  ngOnInit(): void {
    //this.getCategories()
    this.categories = ['Relojes','Anteojos','Perfumes']
  }

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }

  getCategories(){
    this.categoriesSubscription = this.storeService.getAllCategories()
    .subscribe( categories => {
      this.categories = ['Relojes']
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.categoriesSubscription){
      this.categoriesSubscription.unsubscribe();
    }
  }

}
