export interface AuthResponse {
  idToken:	string;
  email: string;
  refreshToken:	string;
  expiresIn: string;
  localId: string;
  registered: boolean;
}

export interface UserDataResponse {
  localId: string;
  email:	string;
  emailVerified:	boolean;
  displayName: string;
  providerUserInfo: {string: string}[];
  photoUrl: string;
  passwordHash:	string;
  passwordUpdatedAt: Float64Array;
  validSince:	string;
  disabled:	boolean;
  lastLoginAt:	string;
  createdAt:	string;
  customAuth:	boolean;
}

export interface UserInfo {
  login: string;
  pass: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  userInfo?: UserInfo;
}
