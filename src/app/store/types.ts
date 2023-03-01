import {AsyncThunk} from '@reduxjs/toolkit'

export enum FetchStatus {
  idle,
  pending,
  completed,
  error,
}

export interface FetchError {
  code?: string
  message?: string
  name?: string
  stack?: string
}

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>
export type PendingAction = ReturnType<GenericAsyncThunk['pending']>
export type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>
export type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>

export interface ToastrOptionsMiddleware {
  success?:
    | {
        disabled?: boolean
        title?: string
        description?: string
      }
    | Function
  error?:
    | {
        disabled?: boolean
        title?: string
        description?: string
      }
    | Function
}
