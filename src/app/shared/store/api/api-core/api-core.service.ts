import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AddAssetResponse, Asset, FetchAssetsResponse } from './api-core.types';
import { environment } from '../../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiCoreService {
  constructor(private http: HttpClient) {}

  addAsset(asset: Asset, userId: string) {
    return this.http.post<AddAssetResponse>(
      `${environment.firebase.databaseURL}/users/${userId}.json`,
      asset
    );
  }

  fetchAssets(userId: string) {
    return this.http.get<FetchAssetsResponse>(
      `${environment.firebase.databaseURL}/users/${userId}.json`
    );
  }
}
