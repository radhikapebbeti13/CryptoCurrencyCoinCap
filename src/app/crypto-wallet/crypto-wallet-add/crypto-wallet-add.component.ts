import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AssetsData } from 'src/app/dataModel/assets.data';
import { WalletCryptoData, WalletData } from 'src/app/dataModel/wallet.data';
import { AssetsService } from 'src/app/services/assets.service';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-crypto-wallet-add',
  templateUrl: './crypto-wallet-add.component.html',
  styleUrls: ['./crypto-wallet-add.component.scss']
})
export class CryptoWalletAddComponent implements OnInit {

  assetsData: AssetsData[] = [];
  inputCryptoId: string = "";
  amt: number = 0.00;
  inputQuantity: number = 1;
  addWallet: FormGroup;
  selectedAsset: AssetsData = new AssetsData();

  constructor(private assetsService: AssetsService,
    private _formBuilder: FormBuilder,
    private walletService: WalletService,
    private router: Router) {
      this.addWallet = this._formBuilder.group({
        cryptoName: [this.inputCryptoId],
        quantity: [this.inputQuantity],
      })
     }

  ngOnInit(): void {
    this.assetsService.getAssets().subscribe( result => {
      this.assetsData = result.data;
    });
  }

  onSubmitClicked(form) {
    let storageWallet: WalletData;
    if (form.valid) {
      //Check if enough quantity is available
      this.inputQuantity = this.addWallet.controls["quantity"] ? this.addWallet.controls["quantity"].value : "";
      if (Number.parseFloat(this.selectedAsset.supply) < this.inputQuantity) {
        this.addWallet.controls['quantity'].setErrors({'excess': true});
      }
      else {
        //Add to Wallet Service
        if (this.walletService.isLocalStorageSupported)
        {
          storageWallet = this.walletService.get("WALLET");
          if (storageWallet === null)
          {
            storageWallet = new WalletData();
          }
          
          storageWallet.cryptoWallet.push(new WalletCryptoData(this.selectedAsset.id, this.selectedAsset.name, 
              this.inputQuantity.toString(), this.amt.toString(), this.selectedAsset.supply));
          //Calculate Total Amount
          storageWallet.totalAmount = this.calculateTotalAmount(storageWallet.cryptoWallet); 
          this.walletService.set("WALLET", storageWallet);
        }
        //Go Back to Wallet View
        this.router.navigate(['cryptoWallet'], {skipLocationChange: true});
      }
    }
  }

  calculateTotalAmount(cryptoWallet: WalletCryptoData[]): string {
    let amt = 0.00;
    cryptoWallet.forEach(element => {
        amt += Number.parseFloat(element.amount) * Number.parseFloat(element.quantity);
    });

    return amt.toString();
}

  onCryptoNameChanged(cryptoId) {
    this.inputCryptoId = this.addWallet.controls["cryptoName"] ? this.addWallet.controls["cryptoName"].value.trim() : "";
    if (this.inputCryptoId !== "")
    {
      this.selectedAsset = this.assetsData.find(x => x.id === this.inputCryptoId);
      this.amt = Number.parseFloat(this.selectedAsset.priceUsd);
    }
  }

  onCancel() {
    //Go Back to Wallet View
    this.router.navigate(['cryptoWallet'], {skipLocationChange: true});
  }

}
function ValidationErrors(ValidationErrors: any, arg1: boolean) {
  throw new Error('Function not implemented.');
}

