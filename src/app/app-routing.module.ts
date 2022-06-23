import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinAssetsDetailComponent } from './coin-assets/coin-assets-detail/coin-assets-detail.component';
import { CoinAssetsComponent } from './coin-assets/coin-assets.component';
import { CryptoWalletAddComponent } from './crypto-wallet/crypto-wallet-add/crypto-wallet-add.component';
import { CryptoWalletComponent } from './crypto-wallet/crypto-wallet.component';

const routes: Routes = [
  {path: '', component: CoinAssetsComponent},
  {path: 'cryptoCurrency', component: CoinAssetsComponent},
  {path: 'cryptoDetail', component: CoinAssetsDetailComponent},
  {path: 'cryptoWallet', component: CryptoWalletComponent},
  {path: 'cryptoWalletAdd', component: CryptoWalletAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
