export type RegisterPayload = { email: string; password: string };
export type RegisterResponse = {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
};

export type LoginPayload = RegisterPayload;
export type LoginResponse = RegisterResponse & {
  registered: boolean;
};

export type RefreshTokenPayload = { token: string };
export type RefreshTokenResponse = {
  expires_in: string;
  token_type: string;
  refresh_token: string;
  id_token: string;
  user_id: string;
  project_id: string;
};

export type ErrorResponse = {
  error: {
    code: number;
    message: string;
    errors: Array<Record<string, string>>;
  };
};

export type AuthData = {
  token: string;
  refreshToken: string;
  expirationTime: number;
  userId: string;
};

export type AuthenticationSuccessPayload = {
  authData: AuthData;
  email: string;
  redirect: boolean;
};
