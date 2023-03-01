/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {PageTitle} from '../../../_metronic/layout/core'
import {ProductSaleChartSection} from '../../../_metronic/partials/chart/productSaleChartSection'
import {SalesSection} from '../../../_metronic/partials/chart/SaleChartSection'
import {Chart2Section} from '../../../_metronic/partials/chart/section2'
import {
  CardsWidget17,
  CardsWidget20,
  CardsWidgetChart,
  ListsWidget3,
  TablesWidget9,
} from '../../../_metronic/partials/widgets'
import {TablesLastAddProduct} from '../../../_metronic/partials/widgets/tables/LastAddProduct'
import ResentOrder from './resntOrder'

const DashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row g-2 g-xl-10 mb-5 mb-xl-10'>
      {/* begin::Col */}
      <div className='col-md-6 col-lg-3 mb-md-5 mb-xl-10 mb-md-5 mb-xl-10 p-0 pe-3'>
        <CardsWidget17 className='h-md-50 mb-5 mb-xl-5' />
        <CardsWidget20
          className='card card-flush h-md-50  mb-xl-5'
          description='Active Projects'
          color='#F1416C'
          img={toAbsoluteUrl('/media/patterns/vector-1.png')}
        />
      </div>
      {/* end::Col */}
      {/* begin::Col */}
      <div className='col-md-6 col-lg-3 mb-md-5 mb-xl-10 p-0'>
        <Chart2Section className='h-md-30 mb-5 mb-xl-10' />
        <SalesSection className='h-md-30 mb-5 mb-xl-10' />
      </div>
      {/* end::Col */}
      {/* begin::Col */}
      <div
        className='col-md-12 col-lg-6 mb-md-5 mb-xl-10 p-0 ps-3 '
        style={{
          padding: '0px',
        }}
      >
        <CardsWidgetChart
          className='h-100 mb-5 mb-xl-10'
          description='Active Projects'
          color='#F1416C'
          img={toAbsoluteUrl('/media/patterns/vector-1.png')}
        />
        {/* <CardsWidget7
          className='h-md-50 mb-5 mb-xl-10'
          description='New Customers This Month'
          icon={false}
          stats={357}
          labelColor='dark'
          textColor='gray-300'
        /> */}
      </div>
      {/* end::Col */}
      {/* begin::Col */}

      {/* end::Col */}
    </div>
    <div className='row g-2 g-xl-10 mb-5 mb-xl-10 '>
      <div className='col-xl-6 mb-xl-10 bg-white p-0'>
        <ResentOrder />
      </div>
      <div className='col-xl-6 mb-5 mb-xl-10 p-0 ps-3'>
        <ProductSaleChartSection className='h-md-50 mb-5 mb-xl-10 bg-white' />
      </div>{' '}
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gx-5 gx-xl-10'>
      <TablesWidget9 />
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div
      className='row gy-5 gx-xl-8 mt-4 mb-5 mb-xl-10 '
      style={{
        height: '602.5px',
      }}
    >
      {/* need to 2 col first one is chart js and second one is table is 4 col and secand is 8 col */}
      <div className='col-lg-4  h-100'>
        <ListsWidget3 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-lg-8 overflow-auto h-100'>
        <TablesLastAddProduct />
      </div>
    </div>
    {/* end::Row */}
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  console.log('🚀 ~ file: DashboardWrapper.tsx:118 ~ intl:', intl)

  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
