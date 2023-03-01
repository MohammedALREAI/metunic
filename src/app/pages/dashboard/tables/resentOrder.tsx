import {toAbsoluteUrl} from '../../../../_metronic/helpers'

type Props = {
  title: string
  itemID: string
  image: string
  price: string
  QTY: string
  total: number
}

const RowItem = ({title, itemID, image, price, QTY, total}: Props) => {
  return (
    <tr className='mb-5  border-bottom'>
      <td className=''>
        <div className='symbol symbol-50px d-flex gap-4'>
          <img src={image || toAbsoluteUrl('/media/patterns/vector-1.png')} alt='' />
          <div className='d-flex flex-column'>
            <a
              href={`order?id=${itemID}`}
              className='text-dark fw-bolder text-hover-primary mb-1 fs-6'
            >
              {title}
            </a>
            <span className='text-muted fw-bold d-block fs-7'>Item: #${itemID}</span>
          </div>
        </div>
      </td>

      <td>
        <span className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>x{QTY}</span>
      </td>
      <td className=''>
        <span className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>${price}</span>{' '}
      </td>
      <td className=''>
        <span className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>${total}</span>{' '}
      </td>
    </tr>
  )
}

export const ResentOrderTable = () => {
  return (
    <div className='card-body py-3'>
      <div className='tab-content'>
        {/* begin::Tap pane */}
        <div className='tab-pane fade show active' id='kt_table_widget_4_tab_1'>
          {/* begin::Table container */}
          <div className='table-responsive'>
            {/* begin::Table */}
            <table className='table align-middle gs-0 gy-3'>
              {/* begin::Table head */}
              <thead>
                <tr className='fs-7 fw-bold text-gray-500 border-bottom-0'>
                  <th className='p-1 '>ITEM</th>
                  <th className='p-1'>QTY</th>
                  <th className='p-1'>PRICE</th>
                  <th className='p-1'>PRICE</th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody className='mt-4'>
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <RowItem
                      key={index}
                      title='Elephant 1802'
                      itemID='123456'
                      image={toAbsoluteUrl('/media/stock/ecommerce/210.gif')}
                      price='72.00'
                      QTY='1'
                      total={126.0}
                    />
                  ))}
              </tbody>
              {/* end::Table body */}
            </table>
          </div>
          {/* end::Table */}
        </div>
        {/* end::Body */}
      </div>
      {/* end::Card */}
    </div>
  )
}
