export class AssetsData {
    public id: string = "";
    public rank: string = "";
    public symbol: string = "";
    public name: string = "";
    public supply: string = "";
    public maxSupply: string = "";
    public  marketCapUsd: string = "";
    public volumeUsd24Hr: string = "";
    public priceUsd: string = "";
    public changePercent24Hr: string = "";
    public vwap24Hr: string = "";
    public explorer: string = "";

    constructor() {}

    toAssetData(data: any) {
        this.id = data.id;
        this.rank = data.rank;
        this.symbol = data.symbol;
        this.name = data.name;
        this.supply = data.supply;
        this.maxSupply = data.maxSupply;
        this.marketCapUsd = data.marketCapUsd;
        this.volumeUsd24Hr = data.volumeUsd24Hr;
        this.priceUsd = data.priceUsd;
        this.changePercent24Hr = data.changePercent24Hr;
        this.vwap24Hr = data.vwap24Hr;
        this.explorer = data.explorer;
    }
}

export interface AssetsResponseDto {
    data: AssetsData[];
    timeStamp: number;
}