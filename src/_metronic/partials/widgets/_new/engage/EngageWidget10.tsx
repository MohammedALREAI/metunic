/* eslint-disable jsx-a11y/anchor-is-valid */
import ResentOrder from '../../../../../app/pages/dashboard/resntOrder'

type Props = {
  className: string
}

const EngageWidget10 = ({className}: Props) => (
  <div className={`row  g-5 g-xl-10 mb-5 mb-xl-10 `}>
    <div className='col-xl-6 mb-xl-10 '>
      <ResentOrder />
    </div>
    <div className='col-xl-6 mb-xl-10 '>
      <ResentOrder />
    </div>
  </div>
)
export {EngageWidget10}
