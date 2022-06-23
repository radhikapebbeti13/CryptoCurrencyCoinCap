import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { AssetsResponseDto } from "../dataModel/assets.data";


@Injectable({
    providedIn: 'root'
})

export class AssetsService {
    apiURL = 'https://api.coincap.io/v2/assets';

    constructor(private httpClient: HttpClient ) {}

    getAssets(searchParms?: string): Observable<AssetsResponseDto> {
        const parms = { params: {"search": searchParms ? searchParms : ""}};
        return this.httpClient.get<AssetsResponseDto>(this.apiURL,parms);
    }
}