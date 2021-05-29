import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisajeFormComponent } from './paisaje-form.component';

describe('PaisajeFormComponent', () => {
  let component: PaisajeFormComponent;
  let fixture: ComponentFixture<PaisajeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisajeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisajeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
