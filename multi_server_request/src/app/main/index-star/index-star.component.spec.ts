import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa HttpClientTestingModule
import { IndexStarComponent } from './index-star.component';
import { SStarService } from 'src/app/service/api_star/sstar.service'; // Importa el servicio SStarService

describe('IndexStarComponent', () => {
  let component: IndexStarComponent;
  let fixture: ComponentFixture<IndexStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexStarComponent ],
      imports: [HttpClientTestingModule], // Agrega HttpClientTestingModule a las imports
      providers: [SStarService] // Agrega SStarService a los providers
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
