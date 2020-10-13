import { Component, Output, EventEmitter, Input } from '@angular/core';
import { elementList, categoryList } from '../models';
import { Router } from '@angular/router';
declare var module: {
  id: string;
};

@Component({
  moduleId: module.id,
  selector: 'products-list-part',
  templateUrl: 'products-list-part.component.html',
  styleUrls: ['products-list-part.component.css'],
  inputs: ['rows'],
})
export class ProductsListPartComponent {
  constructor(private router: Router) {}

  @Input() list: elementList[];
  @Input() selectedValue: number;
  @Input() categoryList: categoryList[];

  @Output()
  delete: EventEmitter<number> = new EventEmitter();

  deleteElement(value) {
    this.delete.emit(value);
  }

  showElement(value) {
    this.router.navigate([
      'products',
      value.id,
      value.name,
      value.price,
      value.category,
    ]);
  }

  getCategory(id: number): string {
    return this.categoryList?.find((x) => x.id == id).name;
  }
}
