/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'

type Props = {
  className?: string
}

const buttonType = (status: string) => {
  switch (status) {
    case 'pending':
      return 'btn-light-warning text-warning'
    case 'completed':
      return 'btn-light-success text-success'
    case 'in progress':
      return 'btn-light-primary text-primary'
    case 'rejected':
      return 'btn-light-danger text-danger'
    default:
      return 'btn-light-info text-info'
  }
}

interface RowItemProps {
  id: string
  date: string
  name: string
  price: string
  cutsomer: string
  total: string
  status: 'pending' | 'completed' | 'in progress' | 'rejected'
}
export const RowItem = (props: RowItemProps) => {
  const {id, date, name, price, total, status, cutsomer} = props
  return (
    <tr>
      <td>
        <a href={`/product/${id}`} className='text-dark fw-bold text-hover-primary fs-6'>
          #{name}
        </a>
      </td>
      <td>
        <span className='text-muted fw-semibold text-muted d-block fs-7'>{date}</span>
      </td>
      <td className='text-center'>
        <span className='text-muted me-2 fs-7 fw-semibold'>{cutsomer}</span>
      </td>
      <td className='text-center'>
        <span className='text-muted me-2 fs-7 fw-semibold'>${price}</span>
      </td>
      <td className=''>
        <span className='text-dark fw-bold text-hover-primary fs-6'>${total}</span>
      </td>
      <td className=''>
        <button className={`btn btn-sm ${buttonType(status)}`}>{status}</button>
      </td>
    </tr>
  )
}
const TablesWidget9: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Product Orders</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Avg. 57 orders per day</span>
        </h3>
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to add a user'
        >
          <div className='d-flex g-2'>
            <div className='d-flex flex-wrap my-2 px-2'>
              <span className='text-muted mt-1 fw-semibold fs-7'>Cateogry</span>
              <div className='me-4 px-2'>
                <select
                  name='status'
                  data-control='select2'
                  data-hide-search='true'
                  className='form-select form-select-sm  border-0'
                  defaultValue='Active'
                >
                  <option value='Active'>show All</option>
                  <option value='Approved'>In Progress</option>
                  <option value='Declined'>To Do</option>
                  <option value='In Progress'>Completed</option>
                </select>
              </div>
            </div>
            <div className='d-flex flex-wrap my-2 px-2'>
              <span className='text-muted mt-1 fw-semibold fs-7'>Status</span>
              <div className='me-4 px-2'>
                <select
                  name='status'
                  data-control='select2'
                  data-hide-search='true'
                  className='form-select form-select-sm text-gray-800 border-0'
                  defaultValue='Active'
                >
                  <option value='all'>Show All</option>
                  <option value='pending '>Pending </option>
                  <option value='Refunded'>Refunded</option>
                  <option value='In Progress'>In Progress</option>
                  <option value='Completed'>Completed</option>
                </select>
              </div>
            </div>
          </div>
          <div className='  '>
            <div className='w-148px position-relative'>
              <KTSVG
                path='/media/icons/duotune/general/gen021.svg'
                className='svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y'
              />

              <input
                style={{
                  textIndent: '2rem',
                }}
                type='text'
                className='form-control'
                name='search'
                placeholder='Search ...'
              />
            </div>
          </div>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                <th className='min-w-150px'>Order ID</th>
                <th className='min-w-140px '>Created</th>
                <th className='min-w-120px px-2 '>Customer</th>
                <th className='min-w-100px '>Total</th>
                <th className='min-w-100px '>Profit</th>
                <th className='min-w-100px '>Status</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {Array.from({length: 5}).map((_, index) => (
                <RowItem
                  key={index}
                  id={index.toString()}
                  date='cutsomer'
                  name='XGY-346'
                  price='100'
                  total='100'
                  status='pending'
                  cutsomer='John Doe'
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

export {TablesWidget9}
