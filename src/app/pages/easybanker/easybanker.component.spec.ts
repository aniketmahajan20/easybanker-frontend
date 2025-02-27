import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasybankerComponent } from './easybanker.component';

describe('EasybankerComponent', () => {
  let component: EasybankerComponent;
  let fixture: ComponentFixture<EasybankerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EasybankerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasybankerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
