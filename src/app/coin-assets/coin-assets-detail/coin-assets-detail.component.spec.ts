import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { CoinAssetsDetailComponent } from './coin-assets-detail.component';

describe('CoinAssetsDetailComponent', () => {
  let component: CoinAssetsDetailComponent;
  let fixture: ComponentFixture<CoinAssetsDetailComponent>;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinAssetsDetailComponent ],
      providers: [ {provide: ActivatedRoute, useValue: {params: of({ }) }}],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinAssetsDetailComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.get(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the data from the service', () => {
    component.ngOnInit();
    expect(component.assetData.id).not.toEqual("");
  });
});
