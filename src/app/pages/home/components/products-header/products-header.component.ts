import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header-component.html'
})
export class ProductsHeaderComponent implements OnInit {

  @Output() columnCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();


  protected sortOrder: string = ''
  protected itemsShowsCount: number = 2


  @Output() columnsCountChanged = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onSortChanged( sortOrder: string): void{
    this.sortOrder = sortOrder
    this.sortChange.emit(sortOrder);
  }

  onItemsCountChanged( itemCount: number ): void{
    this.itemsShowsCount = itemCount;
    this.itemsCountChange.emit( itemCount );
  }

  onViewChanged( colsNum: number): void {
    this.columnsCountChanged.emit(colsNum);
  }

}
