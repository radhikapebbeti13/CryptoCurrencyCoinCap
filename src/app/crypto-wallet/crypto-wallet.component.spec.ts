import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { WalletService } from '../services/wallet.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CryptoWalletComponent } from './crypto-wallet.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('CryptoWalletComponent', () => {
  let component: CryptoWalletComponent;
  let fixture: ComponentFixture<CryptoWalletComponent>;
  let walletService: WalletService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule],
      declarations: [ CryptoWalletComponent ],
      providers: [WalletService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoWalletComponent);
    component = fixture.componentInstance;
    walletService = TestBed.inject(WalletService);
    component.totalAmount = "0.0";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
