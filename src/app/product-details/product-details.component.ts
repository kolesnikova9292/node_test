import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { elementList } from '../models';
declare var module: {
  id: string;
};

@Component({
  moduleId: module.id,
  selector: 'product-details',
  templateUrl: 'product-details.component.html',
  styleUrls: ['product-details.component.css'],
})
export class ProductDetailsComponent {
  @Input() list: elementList[];

  currentProduct: elementList;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  goToProductsList() {
    this.router.navigate(['products']); // перенаправляем пользователя на PhraseListComponent
  }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      let id = +params['id'];
      let name = params['name'];
      let price = params['price'];
      let category = params['category'];

      this.currentProduct = {
        id: id,
        name: name,
        price: price,
        category: category,
      };
    });
  }
}
