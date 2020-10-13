import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInListComponent } from './add-in-list.component';

describe('AddInListComponent', () => {
  let component: AddInListComponent;
  let fixture: ComponentFixture<AddInListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
