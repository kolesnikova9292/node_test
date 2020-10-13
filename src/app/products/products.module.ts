import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductsRoutingModule } from './products.routing.module';
import { ProductsListPartComponent } from '../products-list-part/products-list-part.component';
import { AddInListComponent } from '../add-in-list/add-in-list.component';
import { SelectCategoryComponent } from '../select-category/select-category.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    ProductsListPartComponent,
    AddInListComponent,
    SelectCategoryComponent,
  ],
  providers: [DataService],
})
export class ProductsModule {}
