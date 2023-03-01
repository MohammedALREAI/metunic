import {toastr} from 'react-redux-toastr'
import {KTSVG} from '../../../_metronic/helpers'
import {CustomToastrProps} from './types'

export const customToastr = ({
  type,
  iconLink,
  title = 'some title',
  description = 'some  description',
}: CustomToastrProps) => {
  let iconLinkOpt = <KTSVG path='/media/icons/toster/success.svg' className='svg-icon-2' />

  if (!iconLink) {
    switch (type) {
      default:
      case 'success':
        iconLinkOpt = <KTSVG path='/media/icons/toster/success.svg' className='svg-icon-2' />
        break
      case 'warning':
        iconLinkOpt = (
          <KTSVG path='/media/icons/toster/exclamation-solid.svg' className='svg-icon-2' />
        )
        break
      case 'error':
        iconLinkOpt = <KTSVG path='/media/icons/toster/error.svg' className='svg-icon-2' />
        break
    }
  }

  toastr[type](title, description, {
    icon: iconLinkOpt,
    showCloseButton: false,
  })
}
