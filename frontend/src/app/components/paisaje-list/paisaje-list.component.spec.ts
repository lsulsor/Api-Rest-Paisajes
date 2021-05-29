import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisajeListComponent } from './paisaje-list.component';

describe('PaisajeListComponent', () => {
  let component: PaisajeListComponent;
  let fixture: ComponentFixture<PaisajeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisajeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisajeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
