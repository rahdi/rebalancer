export type Asset = {
  name: string;
  group: string;
  amount: number;
};

export type AddAssetResponse = { name: string };

export type AddAssetSuccessPayload = { [name: string]: Asset };

export type FetchAssetsResponse = Record<string, Asset>;

export type FetchAssetsSuccessPayload = FetchAssetsResponse;
