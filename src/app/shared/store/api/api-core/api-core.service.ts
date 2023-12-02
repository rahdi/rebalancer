import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AddAssetResponse, Asset, FetchAssetsResponse } from './api-core.types';
import { environment } from '../../../../../environments/environment';

const createPath = (customText: string) =>
  `${environment.firebase.databaseURL}/users/${customText}.json`;

@Injectable({ providedIn: 'root' })
export class ApiCoreService {
  constructor(private http: HttpClient) {}

  addAsset(asset: Asset, userId: string) {
    return this.http.post<AddAssetResponse>(createPath(userId), asset);
  }

  deleteAsset(assetId: string, userId: string) {
    return this.http.delete<null>(createPath(`${userId}/${assetId}`));
  }

  fetchAssets(userId: string) {
    return this.http.get<FetchAssetsResponse>(createPath(userId));
  }
}
