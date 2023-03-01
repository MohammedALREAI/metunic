export interface CreateUser {}

export interface UserLogin {
  email: string
  password: string
}

export interface IUser {
  id: number
}
export interface IinitialState {
  user: Record<string, any> | null
  status: FetchStatus
  error: string | null
}
