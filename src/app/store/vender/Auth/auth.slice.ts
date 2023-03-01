import {createSlice} from '@reduxjs/toolkit'
import {RootState} from './../../index'
import {FetchStatus} from './../../types'
import {loginVendor} from './thunk'
import {IinitialState, IUser} from './types'

const initialState: IinitialState = {
  user: JSON.parse(localStorage.getItem('user') || '{}'),
  status: FetchStatus.idle,
  error: null,
}

const userResponseToUserState = (user: IUser) => {
  if (!user?.id) return null
  return {
    ...user,
  }
}

const VendorSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginVendor.fulfilled, (state, action) => {
      state.status = FetchStatus.completed
      state.user = userResponseToUserState(action.payload)
    })

    builder.addCase(loginVendor.rejected, (state, action) => {
      state.status = FetchStatus.error
      state.error = action.payload as string
    })

    builder.addCase(loginVendor.pending, (state, _) => {
      state.status = FetchStatus.pending
    })
  },
})

export default VendorSlice.reducer

export const selectVender = (state: RootState) => state.vender
export const isUserLoggedIn = (state: RootState) => Boolean(state?.vender?.user)
