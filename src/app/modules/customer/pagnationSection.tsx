import React from 'react'

type Props = {
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  setMaxPage: React.Dispatch<React.SetStateAction<number>>
  maxPage: number
  sizeTotal: number
  pageSizes: number
}

export const PaginationSection = ({
  currentPage,
  setCurrentPage,
  maxPage,
  setMaxPage,
  sizeTotal,
  pageSizes,
}: Props) => {
  // on click of previous button
  const handlePrevious = () => {
    if (currentPage > 1 && currentPage <= maxPage) {
      setCurrentPage(currentPage - 1)
    }
  }
  const handleNextPage = () => {
    if (currentPage > 0 && currentPage < maxPage) {
      setCurrentPage(currentPage + 1)
    }
    return
  }
  const handleExactNumber = (number: number) => {
    if (number === currentPage) return
    setCurrentPage(number)
  }

  //  HANDLE SLECT SIZE
  const handleSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    const size = parseInt(value)
    setMaxPage(Math.ceil(pageSizes / size))
    setCurrentPage(1)
  }
  return (
    <div className='d-flex flex-stack flex-wrap pt-10 pb-10'>
      <div className='fs-6 fw-bold text-danger-700'>
        <div className='me-4'>
          <select
            name='status'
            data-control='select2'
            //    ONCHANGE
            onChange={handleSize}
            data-hide-search='true'
            className='form-select form-select-sm form-select-white w-125px form-select form-select-solid'
            defaultValue='10'
          >
            {[10, 20, 30, 40, 50].map((size) => {
              return (
                <option value={size} key={size}>
                  {size}
                </option>
              )
            })}
          </select>
        </div>
      </div>

      <ul className='pagination'>
        <li className='page-item previous'>
          <span className='page-link' onClick={handlePrevious}>
            <i className='previous'></i>
          </span>
        </li>
        {/*  need the just  five of pageto be show form current page */}
        {Array.from({length: maxPage}, (_, i) => i + 1).map((number) => {
          return (
            <li
              className={`page-item ${number === currentPage ? 'active' : ''}`}
              key={number}
              onClick={() => handleExactNumber(number)}
            >
              <span className='page-link'>{number}</span>
            </li>
          )
        })}

        <li className='page-item next'>
          <span className='page-link' onClick={handleNextPage}>
            <i className='next'></i>
          </span>
        </li>
      </ul>
    </div>
  )
}
