import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadUsuariosComponent } from './entidad-usuarios.component';

describe('EntidadUsuariosComponent', () => {
  let component: EntidadUsuariosComponent;
  let fixture: ComponentFixture<EntidadUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntidadUsuariosComponent]
    });
    fixture = TestBed.createComponent(EntidadUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
