import {createAsyncThunk} from '@reduxjs/toolkit'
import API from '../../../Api'
import {thunkCatchError} from '../../utils'
import {CreateUser, UserLogin} from './types'

const VedorUrl = {
  LOGIN: '/vendor/login',
}

export const createUser = createAsyncThunk(
  'user/createUser',
  thunkCatchError(async (data: CreateUser) => API.post('/api/accounts', data))
)

export const loginVendor = createAsyncThunk(
  'vender/login',
  thunkCatchError(async (data: UserLogin) => {
    const response = await API.post(VedorUrl.LOGIN, data)
    //      loclStirage  save  the  user info
    localStorage.setItem('user', JSON.stringify(response.data?.data))
    return response.data?.data || {}
  })
)
