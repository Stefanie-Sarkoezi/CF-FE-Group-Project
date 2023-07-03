import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceOffersComponent } from './price-offers.component';

describe('PriceOffersComponent', () => {
  let component: PriceOffersComponent;
  let fixture: ComponentFixture<PriceOffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceOffersComponent]
    });
    fixture = TestBed.createComponent(PriceOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
