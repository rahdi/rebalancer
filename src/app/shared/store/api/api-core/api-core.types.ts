export type Asset = {
  name: string;
  group: string;
  amount: number;
  assetId?: string;
};

export type AddAssetResponse = { name: string };

export type AddAssetSuccessPayload = { [name: string]: Asset };

export type EditAssetResponse = Asset;

export type FetchAssetsResponse = Record<string, Asset> | null;

export type FetchAssetsSuccessPayload = FetchAssetsResponse;
