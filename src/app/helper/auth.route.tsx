import {useSelector} from 'react-redux'
import {RootState} from './../store/index'

import {Navigate} from 'react-router-dom'

export const RequireVendOrAuth = ({children}: any) => {
  const {user} = useSelector((state: RootState) => state.vender)

  return user?.token ? <Navigate to='/dashboard' /> : children
}
