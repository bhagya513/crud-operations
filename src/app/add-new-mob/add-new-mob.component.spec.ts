import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewMobComponent } from './add-new-mob.component';

describe('AddNewMobComponent', () => {
  let component: AddNewMobComponent;
  let fixture: ComponentFixture<AddNewMobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewMobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewMobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
