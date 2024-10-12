import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductitmComponent } from './productitm.component';

describe('ProductitmComponent', () => {
  let component: ProductitmComponent;
  let fixture: ComponentFixture<ProductitmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductitmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductitmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
