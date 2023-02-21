import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalmitraComponent } from './balmitra.component';

describe('BalmitraComponent', () => {
  let component: BalmitraComponent;
  let fixture: ComponentFixture<BalmitraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalmitraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalmitraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
