import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewItemButtonComponent } from './add-new-item-button.component';

describe('AddNewItemButtonComponent', () => {
  let component: AddNewItemButtonComponent;
  let fixture: ComponentFixture<AddNewItemButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewItemButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewItemButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
