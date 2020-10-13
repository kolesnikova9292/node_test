import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListPartComponent } from './products-list-part.component';

describe('ProductsListPartComponent', () => {
  let component: ProductsListPartComponent;
  let fixture: ComponentFixture<ProductsListPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsListPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
