import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDinamycComponent } from './table-dinamyc.component';

describe('TableDinamycComponent', () => {
  let component: TableDinamycComponent;
  let fixture: ComponentFixture<TableDinamycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDinamycComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDinamycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
