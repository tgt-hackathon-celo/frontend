import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenSendConfirmationComponent } from './token-send-confirmation.component';

describe('TokenSendConfirmationComponent', () => {
  let component: TokenSendConfirmationComponent;
  let fixture: ComponentFixture<TokenSendConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenSendConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TokenSendConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
