import {AnyAction} from '@reduxjs/toolkit'
import {FulfilledAction, PendingAction, RejectedAction} from './types'

export function isPendingAction(action: AnyAction): action is PendingAction {
  return action.type.endsWith('/pending')
}
export function isFulfilledAction(action: AnyAction): action is FulfilledAction {
  return action.type.endsWith('/fulfilled')
}
export function isRejectedAction(action: AnyAction): action is RejectedAction {
  return action.type.endsWith('/rejected')
}

export function isPendingActionOf(startAction: string) {
  return function (action: AnyAction): action is PendingAction {
    return action.type.startsWith(startAction) && action.type.endsWith('/pending')
  }
}

export function isRejectedActionOf(startAction: string) {
  return function (action: AnyAction): action is RejectedAction {
    return action.type.startsWith(startAction) && action.type.endsWith('/rejected')
  }
}

export function thunkCatchError<T>(callback: (props: T) => void) {
  return async (props: T, {rejectWithValue}: any) => {
    try {
      return await callback(props)
    } catch (err: any) {

      return rejectWithValue(err?.message || 'opps  error happend')
    }
  }
}
