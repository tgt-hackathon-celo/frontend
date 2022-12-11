import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasAcoesComponent } from './minhas-acoes.component';

describe('MinhasAcoesComponent', () => {
  let component: MinhasAcoesComponent;
  let fixture: ComponentFixture<MinhasAcoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinhasAcoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhasAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
