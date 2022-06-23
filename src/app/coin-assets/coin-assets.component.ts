import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, Routes } from '@angular/router';
import { AssetsData } from '../dataModel/assets.data';
import { AssetsService } from '../services/assets.service';
import { CoinAssetsDetailComponent } from './coin-assets-detail/coin-assets-detail.component';

@Component({
  selector: 'app-coin-assets',
  templateUrl: './coin-assets.component.html',
  styleUrls: ['./coin-assets.component.scss']
})
export class CoinAssetsComponent implements OnInit, AfterViewInit  {

  dataSource = new MatTableDataSource<AssetsData>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  public displayedColumns: string[] = ['rank', 'symbol', 'name', 'priceUsd', 'supply', 'changePercent24Hr'];

  constructor(private router:Router,
     private assetsService: AssetsService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.assetsService.getAssets().subscribe( result => {
      this.dataSource.data = result.data;
    });
  }

  searchAsset(searchValue: string) {
    searchValue = searchValue.trim();
    this.assetsService.getAssets(searchValue).subscribe( result => {
      this.dataSource.data = result.data;
    });
  }

  viewDetail(assetData: any) {
    this.router.navigate(['cryptoDetail', assetData], {skipLocationChange: true});
  }
}
