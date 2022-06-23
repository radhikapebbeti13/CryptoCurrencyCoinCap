import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CryptoWalletAddComponent } from './crypto-wallet-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CryptoWalletAddComponent', () => {
  let component: CryptoWalletAddComponent;
  let fixture: ComponentFixture<CryptoWalletAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule, MatFormFieldModule, MatInputModule, MatSelectModule, BrowserAnimationsModule],
      declarations: [ CryptoWalletAddComponent ],
      providers: [ {provide: ActivatedRoute, useValue: {
        snapshot: { queryParamMap: { get(): number { return 6; }} }} }],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoWalletAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
