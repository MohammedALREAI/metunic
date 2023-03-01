import {useState} from 'react'
import {ListItem} from './listItem'
import {ResentOrderTable} from './tables/resentOrder'

export default function ResentOrder() {
  const [activeTab, setActiveTab] = useState('#tab1')

  return (
    <div className='card card-flush overflow-hidden h-md-100'>
      <div className=' card-header py-5  align-items-center border-0 '>
        <h3 className='fw-bold text-gray-900 m-0'>Recent Orders</h3>

        <button
          className='btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end'
          data-kt-menu-trigger='click'
          data-kt-menu-placement='bottom-end'
          data-kt-menu-overflow='true'
        >
          <span className='svg-icon svg-icon-1'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                opacity='0.3'
                x='2'
                y='2'
                width='20'
                height='20'
                rx='4'
                fill='currentColor'
              ></rect>
              <rect x='11' y='11' width='2.6' height='2.6' rx='1.3' fill='currentColor'></rect>
              <rect x='15' y='11' width='2.6' height='2.6' rx='1.3' fill='currentColor'></rect>
              <rect x='7' y='11' width='2.6' height='2.6' rx='1.3' fill='currentColor'></rect>
            </svg>
          </span>
        </button>
      </div>
      <div className='w-100'>
        <div className='d-flex w-100 px-8 flex-xxl-nowrap justify-content-center justify-content-md-start pt-4 card-body pt-2'>
          <ul className='nav nav-pills nav-pills-custom mb-3 ' role='tablist'>
            <ListItem
              tabHref='#tab1'
              activeTab={activeTab === '#tab1'}
              onClick={() => setActiveTab('#tab1')}
              image={'/media/svg/products-categories/t-shirt.svg'}
              title='T-shirt'
            />
            <ListItem
              tabHref='#tab2'
              activeTab={activeTab === '#tab2'}
              onClick={() => setActiveTab('#tab2')}
              image={'/media/svg/products-categories/gaming.svg'}
              title='Gaming'
            />
            <ListItem
              tabHref='#tab3'
              activeTab={activeTab === '#tab3'}
              onClick={() => setActiveTab('#tab3')}
              image={'/media/svg/products-categories/watch.svg'}
              title='Watch'
            />
            <ListItem
              activeTab={activeTab === '#tab4'}
              onClick={() => setActiveTab('#tab4')}
              image={'/media/svg/products-categories/gloves.svg'}
              title='Gloves'
              tabHref='#tab4'
            />
            <ListItem
              activeTab={activeTab === '#tab5'}
              onClick={() => setActiveTab('#tab5')}
              image={'/media/svg/products-categories/shoes.svg'}
              title='Gloves'
              tabHref='#tab5'
            />
          </ul>
        </div>
        <div
          className='tab-content flex-grow-1' // style={{ paddingLeft: "0.23rem !important" }}
        >
          {/* begin::Tab Pane 1 */}
          <div className={`tab-pane fade ${activeTab === '#tab1' ? 'show active' : ''}`} id='tab1'>
            <ResentOrderTable />
          </div>
          {/* end::Tab Pane 1 */}

          {/* begin::Tab Pane 2 */}
          <div
            className={`tab-pane fade ${activeTab === '#tab2' ? 'show active' : ''}`}
            id='tab2_content'
          >
            {/* begin::Content */}
          </div>
          {/* end::Tab Pane 2 */}

          {/* begin::Tab Pane 3 */}
          <div
            className={`tab-pane fade ${activeTab === '#tab3' ? 'show active' : ''}`}
            id='tab3_content'
          >
            {/* begin::Content */}
            <div className='d-flex justify-content-center mb-10'>
              {/* begin::Item */}
              <div className='px-10'>
                <span className='text-muted fw-bold fs-7'>Sale</span>
                <span className='text-gray-800 fw-bolder fs-3 d-block'>$350</span>
              </div>
              {/* end::Item */}

              {/* begin::Item */}
              <div className='px-10'>
                <span className='text-muted fw-bold fs-7'>Comission</span>
                <span className='text-gray-800 fw-bolder fs-3 d-block'>$1,200</span>
              </div>
              {/* end::Item */}

              {/* begin::Item */}
              <div className='px-10'>
                <span className='text-muted fw-bold fs-7'>Refers</span>
                <span className='text-gray-800 fw-bolder fs-3 d-block'>5,500</span>
              </div>
              {/* end::Item */}
            </div>
            {/* end::Content  */}

            {/* begin::Chart */}
            <div id='tab3_chart' style={{height: '250px'}} />
            {/* end::Chart      */}
          </div>
          {/* end::Tab Pane 3 */}

          {/* begin::Tab Pane 4 */}
          <div
            className={`tab-pane fade ${activeTab === '#tab4' ? 'show active' : ''}`}
            id='tab4_content'
          >
            {/* begin::Content */}
            <div className='d-flex justify-content-center mb-10'>
              {/* begin::Item */}
              <div className='px-10'>
                <span className='text-muted fw-bold fs-7'>Sale</span>
                <span className='text-gray-800 fw-bolder fs-3 d-block'>$450</span>
              </div>
              {/* end::Item */}

              {/* begin::Item */}
              <div className='px-10'>
                <span className='text-muted fw-bold fs-7'>Comission</span>
                <span className='text-gray-800 fw-bolder fs-3 d-block'>$6,500</span>
              </div>
              {/* end::Item */}

              {/* begin::Item */}
              <div className='px-10'>
                <span className='text-muted fw-bold fs-7'>Refers</span>
                <span className='text-gray-800 fw-bolder fs-3 d-block'>500</span>
              </div>
              {/* end::Item */}
            </div>
            {/* end::Content  */}

            {/* begin::Chart */}
            <div id='tab4_chart' style={{height: '250px'}} />
            {/* end::Chart      */}
          </div>
          {/* end::Tab Pane 4 */}
        </div>
      </div>
    </div>
  )
}
