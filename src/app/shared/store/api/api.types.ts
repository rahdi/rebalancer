export type LoginResponse = {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered: boolean;
};

export type ErrorResponse = {
  code: number;
  message: string;
  errors: Array<Record<string, string>>;
};
