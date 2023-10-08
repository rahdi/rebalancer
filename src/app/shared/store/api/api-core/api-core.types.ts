export type Asset = {
  name: string;
  group: string;
  amount: number;
};

export type FetchAssetsResponse = Record<string, Asset>;
