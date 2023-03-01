/* eslint-disable jsx-a11y/anchor-is-valid */
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}
type Status = 'delivered' | 'pending' | 'canceled' | 'confirmed'
const bageforShapping = (status: Status) => {
  switch (status) {
    case 'delivered':
      return 'badge-light-success'
    case 'pending':
      return 'badge-light-warning'
    case 'canceled':
      return 'badge-light-danger'
    case 'confirmed':
      return 'badge-light-primary'
    default:
      return 'badge-light-info'
  }
}

interface ItemListCardProps {
  image: string
  title: string
  to: string
  status: Status
}
const ItemListCard = ({image, title, to, status}: ItemListCardProps) => {
  return (
    <div className='d-flex flex-column  mb-8 border border-dashed border-gray-300 rounded px-7 py-3 mb-6'>
      <div className='d-flex flex-stack mb-3'>
        <div className='me-3'>
          <img
            className='w-50px ms-n1 me-1'
            src={image || toAbsoluteUrl('/media/stock/ecommerce/210.gif')}
            alt={title}
          />
        </div>
        <div className='flex-grow-1'>
          <a href='#' className='text-gray-800 text-hover-primary fw-bold fs-6'>
            {title}
          </a>
        </div>
        <div className='text-end'>menu</div>
        {/* end::Checkbox */}
        {/* begin::Description */}
      </div>
      <div className='d-flex flex-stack'>
        <span className='text-gray-400 fw-bold'>
          To:
          <span className='text-gray-800 text-hover-primary fw-bold'>{to}</span>
        </span>

        <span className={`badge ${bageforShapping('delivered')}`}>Delivered</span>
      </div>
    </div>
  )
}

const ListsWidget3: React.FC<Props> = ({className}) => {
  return (
    <div
      className={`card  card-flush h-100  ${className}`}
      style={{
        height: '600px',
      }}
    >
      {/* begin::Header */}
      <div className='card-header pt-7'>
        <h3 className='card-title fw-bold text-dark'>Best selling products</h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button>
          <Dropdown1 />
          {/* end::Menu */}
        </div>
      </div>
      <div
        className='mb-4 p-0 h-100 '
        //   style={{height: '300px'}}
      >
        <div className=' card-body-custom h-90'>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <ItemListCard
                key={index}
                image={toAbsoluteUrl('/media/stock/ecommerce/210.gif')}
                title='Elephant 1802'
                to='Jason Bourne'
                status='delivered'
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export {ListsWidget3}
