import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SistOperativoDetalleComponent } from './sist-operativo-detalle.component';

describe('SistOperativoDetalleComponent', () => {
  let component: SistOperativoDetalleComponent;
  let fixture: ComponentFixture<SistOperativoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistOperativoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SistOperativoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
