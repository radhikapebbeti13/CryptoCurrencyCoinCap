import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssetsData } from '../../dataModel/assets.data';

@Component({
  selector: 'app-coin-assets-detail',
  templateUrl: './coin-assets-detail.component.html',
  styleUrls: ['./coin-assets-detail.component.scss']
})
export class CoinAssetsDetailComponent implements OnInit {
  assetData: AssetsData = new AssetsData();
  constructor(private activatedRoute: ActivatedRoute) {
   }
  

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.assetData.toAssetData(params);
    })
  }

}
