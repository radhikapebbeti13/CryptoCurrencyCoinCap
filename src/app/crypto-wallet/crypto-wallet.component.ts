import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { WalletCryptoData, WalletData } from '../dataModel/wallet.data';
import { WalletService } from '../services/wallet.service';

@Component({
  selector: 'app-crypto-wallet',
  templateUrl: './crypto-wallet.component.html',
  styleUrls: ['./crypto-wallet.component.scss']
})
export class CryptoWalletComponent implements OnInit, AfterViewInit  {

  dataSource = new MatTableDataSource<WalletCryptoData>([]);
  public totalAmount:string = "";

  @ViewChild(MatPaginator) paginator: MatPaginator;
  public displayedColumns: string[] = ['cryptoName', 'quantity', 'amount','action'];

  constructor(private walletService: WalletService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.walletService.isLocalStorageSupported) {
      this.totalAmount = this.walletService.get("WALLET").totalAmount;
      this.dataSource.data = this.walletService.get("WALLET").cryptoWallet;
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onAddWallet() {
    this.router.navigate(['cryptoWalletAdd'], {skipLocationChange: true});
  }

  deleteCrypto(item: WalletCryptoData, rowNumber: number) {
    let storedItem:WalletData = this.walletService.get("WALLET");
    storedItem.totalAmount = (Number.parseFloat(storedItem.totalAmount) - (Number.parseFloat(item.totAmt))).toString();
    storedItem.cryptoWallet.splice(rowNumber, 1);
    this.walletService.set("WALLET", storedItem);
    this.totalAmount = this.walletService.get("WALLET").totalAmount;
    this.dataSource.data = this.walletService.get("WALLET").cryptoWallet;
  }
}
