import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexStarComponent } from './index-star.component';

describe('IndexStarComponent', () => {
  let component: IndexStarComponent;
  let fixture: ComponentFixture<IndexStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexStarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
