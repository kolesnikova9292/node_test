import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full',
      },
      {
        path: 'products',
        component: ProductsComponent, // содержит <router-outlet>
        children: [
          {
            path: ':id/:name/:price/:category',
            component: ProductDetailsComponent,
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
