import {AsyncThunkAction, configureStore} from '@reduxjs/toolkit'
import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux'
import {reducer as toastrReducer, toastr} from 'react-redux-toastr'
import {customToastr} from '../componet/Toastr'
import {ToastrOptionsMiddleware} from './types'
import VendorReducer from './vender/Auth/auth.slice'

// Redux store
const store = configureStore({
  reducer: {
    toastr: toastrReducer,
    vender: VendorReducer,
  },
})

// Inferred types
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

// Custom redux hooks
export const useDispatch = () => useReduxDispatch<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

//Middleware to apply toastr messages
export function withToastr(
  action: AsyncThunkAction<any, any, any>,
  {success = {disabled: false, description: ''}, error = {disabled: false}}: ToastrOptionsMiddleware
) {
  return function (dispatch: AppDispatch) {
    return new Promise<any>((resolve, reject) =>
      dispatch(action)
        .unwrap()
        .then((response) => {
          typeof success !== 'function' &&
            !success.disabled &&
            customToastr({
              type: 'success',
              title: success.title || 'Success',
              description: success.description,
            })
          typeof success === 'function' && success(response)
          resolve(response)
        })
        .catch((err) => {
          typeof error !== 'function' &&
            !error.disabled &&
            customToastr({
              type: 'error',
              title: error.title || 'Error Message',
              description:
                error.description ||
                (err.data && (err.data.data?.message ?? err.data.errMsg)) ||
                'An error occured, please try again in few minutes',
            })
          typeof error === 'function' && error(err)
          reject(err)
        })
    )
  }
}

export const toaster = toastr

export default store
