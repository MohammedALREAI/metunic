/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

type Props = {
  className?: string
}

type buttonTypeProduct = 'in Stock' | 'out of stock'
const buttonType = (status: buttonTypeProduct) => {
  switch (status) {
    case 'in Stock':
      return 'badge py-3 px-4 fs-7 badge-light-primary'
    case 'out of stock':
      return 'badge py-3 px-4 fs-7 badge-light-danger'
    default:
      return 'badge py-3 px-4 fs-7 badge-light-primary'
  }
}

interface RowItemProps {
  id: string
  date: string
  name: string
  price: string
  quantity: string
  status: buttonTypeProduct
}
export const RowItem = (props: RowItemProps) => {
  const {id, date, name, price, quantity, status} = props
  return (
    <tr>
      <td>
        <a href={`/product/${id}`} className='text-dark fw-bold text-hover-primary fs-6'>
          {name}
        </a>
      </td>
      <td>
        <span className='text-muted fw-semibold text-muted d-block fs-7'>#{id}</span>
      </td>
      <td className='text-center'>
        <span className='text-muted me-2 fs-7 fw-semibold'>{date}</span>
      </td>
      <td className='text-center'>
        <span className='text-muted me-2 fs-7 fw-semibold'>${price}</span>
      </td>
      <td className=''>
        <button className={`btn btn-sm ${buttonType(status)}`}>{status}</button>
      </td>
      <td className='text-center'>
        <span className='text-muted me-2 fs-7 fw-semibold'>{quantity}</span>
      </td>
    </tr>
  )
}
const TablesLastAddProduct: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className} sha`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Latest added products</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Total 2,356 Items in the Stock</span>
        </h3>
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to add a user'
        >
          <div className='d-flex g-1 item-center'>
            <div className='d-flex flex-wrap my-2 px-1'>
              <span className='text-muted mt-1 fw-semibold fs-7'>Cateogry</span>
              <div className='me-4 px-2'>
                <select
                  name='status'
                  data-control='select2'
                  data-hide-search='true'
                  className='form-select form-select-sm  border-0'
                  defaultValue='Active'
                >
                  <option value='Active'>All</option>
                  <option value='Approved'>In Progress</option>
                  <option value='Declined'>To Do</option>
                  <option value='In Progress'>Completed</option>
                </select>
              </div>
            </div>
            <div className='d-flex flex-wrap my-2 px-2'>
              <span className='text-muted mt-2 fw-semibold fs-7'>Status</span>
              <div className='me-4 px-2'>
                <select
                  name='status'
                  data-control='select2'
                  data-hide-search='true'
                  className='form-select form-select-sm text-gray-800 border-0'
                  defaultValue='Active'
                >
                  <option value='show all'>Show All</option>
                  <option value='pending '>In Stock </option>
                  <option value='Refunded'>Out of Stock</option>
                </select>
              </div>
            </div>
          </div>
          <div className=''>
            <button className='btn btn-light btn-sm'>View Stock</button>
          </div>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3 pb-5'>
        {/* begin::Table container */}
        <div
          className='table-responsive overflow-auto  '
          // style={{
          //   maxHeight: '400px',
          // }}
        >
          {/* begin::Table */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                <th className='min-w-100px'>Item</th>
                <th className='min-w-140px '>Product ID</th>
                <th className='min-w-120px px-2 '>Date Added</th>
                <th className='min-w-100px '>Price</th>
                <th className='min-w-100px '>Status</th>
                <th className='min-w-100px text-center'>Qty</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody className='mb-4'>
              {Array.from({length: 20}).map((_, index) => (
                <RowItem
                  key={index}
                  id={'#XGY-356'}
                  date='02 Apr, 2023'
                  name='Macbook Air M1'
                  price='100'
                  quantity='100'
                  status='out of stock'
                />
              ))}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {TablesLastAddProduct}
