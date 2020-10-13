import { Component } from '@angular/core';
import { elementList, categoryList } from '../models';
import { DataService } from '../services/data.service';
declare var module: {
  id: string;
};

@Component({
  moduleId: module.id,
  selector: 'products',
  templateUrl: 'products.component.html',
  styleUrls: ['../app.component.css', 'products.component.css'],
})
export class ProductsComponent {
  public list: elementList[];

  public categoryList: categoryList[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(
      (result) => {
        this.list = result;
      },
      (error) => console.log(error.statusText)
    );
    this.dataService.getCategories().subscribe(
      (result) => {
        this.categoryList = result;
      },
      (error) => console.log(error.statusText)
    );
  }

  selectedValue: string = '0';

  deleteHandler(value) {
    this.list = this.list.filter((item) => item.id !== value);
  }

  addHandler(value) {
    this.list.push({
      id: value.id,
      name: value.name,
      price: value.price,
      category: value.category,
    });
  }

  changeSelectHandler(value) {
    this.selectedValue = value;
  }
}
