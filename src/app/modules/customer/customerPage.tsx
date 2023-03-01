import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Campaigns} from '../profile/components/Campaigns'
import CustomerTable from './CustomerTable'

const customerBreadCrumbs: Array<PageLink> = [
  {
    title: 'customer',
    path: '/crafted/pages/customer/overview',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const CustomerPage = () => (
  <Routes>
    <Route
      element={
        <>
          <Outlet />
        </>
      }
    >
      <Route
        path='overview'
        element={
          <>
            <PageTitle breadcrumbs={customerBreadCrumbs}>Get Start</PageTitle>
            {/* <Overview /> */}
            Get Start
          </>
        }
      />
      list details
      <Route
        path='list'
        element={
          <>
            <PageTitle breadcrumbs={customerBreadCrumbs}>Customer List</PageTitle>

            <CustomerTable />
          </>
        }
      />
      <Route
        path='campaigns'
        element={
          <>
            <PageTitle breadcrumbs={customerBreadCrumbs}>Customer Details</PageTitle>
            <Campaigns />
          </>
        }
      />
      <Route index element={<Navigate to='/crafted/pages/customer/overview' />} />
    </Route>
  </Routes>
)

export default CustomerPage
