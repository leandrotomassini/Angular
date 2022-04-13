export interface AuthResponse {
  "ok": true,
  "uid"?: string,
  "name"?: string,
  "email"?: string,
  "token"?: string;
  "msg"?: string
}

export interface Usuario {
  "uid": string,
  "name": string,
  "email": string
}
