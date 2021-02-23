import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyrentusersComponent } from './buyrentusers.component';

describe('BuyrentusersComponent', () => {
  let component: BuyrentusersComponent;
  let fixture: ComponentFixture<BuyrentusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyrentusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyrentusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
