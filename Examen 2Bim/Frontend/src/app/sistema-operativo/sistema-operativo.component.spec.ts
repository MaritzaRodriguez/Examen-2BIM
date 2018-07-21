import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaOperativoComponent } from './sistema-operativo.component';

describe('SistemaOperativoComponent', () => {
  let component: SistemaOperativoComponent;
  let fixture: ComponentFixture<SistemaOperativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemaOperativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemaOperativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
