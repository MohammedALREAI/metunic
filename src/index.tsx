import { createRoot } from 'react-dom/client'
// Axios
import axios from 'axios'
import { Chart, registerables } from 'chart.js'
import { QueryClient } from 'react-query'
import { Provider } from 'react-redux'

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
// Apps
import { MetronicI18nProvider } from './_metronic/i18n/Metronici18n'
/**
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './_metronic/assets/css/style.rtl.css'
 **/
import ReduxToastr from 'react-redux-toastr'
import { AuthProvider, setupAxios } from './app/modules/auth'
import { AppRoutes } from './app/routing/AppRoutes'
import store, { RootState } from './app/store'
import './_metronic/assets/sass/plugins.scss'
import './_metronic/assets/sass/style.react.scss'
import './_metronic/assets/sass/style.scss'
/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/**
 * Inject Metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
setupAxios(axios)
Chart.register(...registerables)

const queryClient = new QueryClient()
const container = document.getElementById('root')
if (container) {
  createRoot(container).render(
    //     <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <MetronicI18nProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </MetronicI18nProvider>
      <ReduxToastr
        timeOut={4000}
        newestOnTop
        preventDuplicates
        position='top-right'
     //    getState={(state: RootState) => state.toastr}
        transitionIn='fadeIn'
        transitionOut='fadeOut'
        progressBar
        closeOnToastrClick
      />

      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      {/* </QueryClientProvider> */}
    </Provider>
  )
}
