import {useState} from 'react'
import {KTSVG} from '../../../_metronic/helpers'
import {Toogle} from '../../componet/Toastr/toogle'
import {PaginationSection} from './pagnationSection'

type Props = {}
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
  email: string
  name: string
  country: string
  isVaridid: boolean
  status: boolean
}

export const RowItem = (props: RowItemProps) => {
  const {id, email, name, country, isVaridid, status} = props
  return (
    <tr>
      <td>
        <div className='form-check form-check-sm form-check-custom form-check-solid'>
          <input className='form-check-input widget-9-check' type='checkbox' value='1' />
        </div>
      </td>
      <td>
        <a href={`/product/${id}`} className='text-dark fw-bold text-hover-primary fs-6'>
          {name}
        </a>
      </td>
      <td>
        <span className='text-muted fw-semibold text-muted d-block fs-7'>{email}</span>
      </td>
      <td className='text-center'>
        <span className='text-muted me-2 fs-7 fw-semibold'>{country}</span>
      </td>
      <td className='text-center'>
        <span className=''>
          <Toogle />
        </span>
      </td>
      <td className=''>
        <Toogle />
      </td>
      <td className=''>
        <div className='me-4'>
          <select
            name='status'
            data-control='select2'
            data-hide-search='true'
            className='form-select form-select-sm form-select-white w-125px form-select form-select-solid'
            defaultValue='Active'
          >
            <option value='Active'>Active</option>
            <option value='edit'>edit</option>
            <option value='remove'>remove</option>
          </select>
        </div>
      </td>
    </tr>
  )
}

const CustomerTable = (props: Props) => {
  const [page, setpage] = useState<number>(1)
  const [sizePage, setSizePage] = useState<number>(10)

  return (
    <div className={`card `}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to add a user'
        >
          <div className='d-flex g-2'>
            <div className=''>
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
            {/*  BUTTON  ADD */}
            <div className='d-flex flex-wrap my-2 g-2 px-1'>
              <button className='btn btn-primary '>
                <KTSVG
                  path='/media/icons/duotune/general/gen021.svg'
                  className='svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y'
                />
                Export
              </button>
              {/*  add button */}
              <button className='btn btn-primary'>add new</button>
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
                <th className='w-25px'>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='1'
                      data-kt-check='true'
                      data-kt-check-target='.widget-9-check'
                    />
                  </div>
                </th>
                <th className='min-w-150px'>Customer Name</th>
                <th className='min-w-140px '>Email</th>
                <th className='min-w-120px px-2 '>Country</th>
                <th className='min-w-100px '>VERIFIED</th>
                <th className='min-w-100px '>STATUS</th>
                <th className='min-w-100px '>Actions</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {Array.from({length: 5}).map((_, index) => (
                <RowItem
                  key={index}
                  id={'ssss'}
                  email={'mhmad.aa@gmail.com'}
                  name={'mohammed a;reai'}
                  country={'Gaza'}
                  isVaridid={true}
                  status={true}
                />
              ))}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* pagnation */}
          sizePage, setSizePage
          <PaginationSection
            setMaxPage={setSizePage}
            maxPage={sizePage}
            currentPage={page}
            setCurrentPage={setpage}
            sizeTotal={10}
            pageSizes={30}
          />
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export default CustomerTable
