export class WalletCryptoData {
    public cryptoID: string = "";
    public cryptoName: string = "";
    public quantity: string = "";
    public amount: string = "";
    public supply: string = "";
    public totAmt: string = "";

    constructor(cryptoID: string, cryptoName: string, quantity: string, amount: string, supply: string) {
            this.cryptoID = cryptoID;
            this.cryptoName = cryptoName;
            this.quantity = quantity;
            this.amount = amount;
            this.supply = supply;
            this.totAmt = (Number.parseFloat(this.amount) * Number.parseFloat(this.quantity)).toString();
        }
}

export class WalletData {
    public userID: string = "";
    public totalAmount: string = "";
    public cryptoWallet: WalletCryptoData[] = [];

    constructor() {}
}