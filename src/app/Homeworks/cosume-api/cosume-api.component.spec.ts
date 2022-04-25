import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosumeApiComponent } from './cosume-api.component';

describe('CosumeApiComponent', () => {
  let component: CosumeApiComponent;
  let fixture: ComponentFixture<CosumeApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosumeApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CosumeApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
