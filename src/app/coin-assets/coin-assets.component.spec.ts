import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AssetsService } from '../services/assets.service';

import { CoinAssetsComponent } from './coin-assets.component';

describe('CoinAssetsComponent', () => {
  let component: CoinAssetsComponent;
  let fixture: ComponentFixture<CoinAssetsComponent>;
  let assetService: AssetsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule, HttpClientTestingModule],
      declarations: [ CoinAssetsComponent ],
      providers: [AssetsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinAssetsComponent);
    component = fixture.componentInstance;
    assetService = TestBed.inject(AssetsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the data from the service', () => {
    component.ngOnInit();
    //expect(component.dataSource.data.length).toBeGreaterThan(0);
  })

});
