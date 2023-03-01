import {KTSVG} from '../../../_metronic/helpers'

type Props = {
  image: string
  title: string
  activeTab: boolean
  onClick: () => void
  tabHref: string
}

export const ListItem = ({image, title, activeTab, onClick, tabHref}: Props) => {
  return (
    <li className='nav-item mb-3 me-3 me-lg-6' role='presentation'>
      <a
        className={`nav-link d-flex  justify-content-between flex-column flex-center overflow-hidden  w-80px h-85px py-4  py-4 px-4 ${
          activeTab ? 'active  ' : ''
        }`}
        onClick={onClick}
        data-bs-toggle='pill'
        href={tabHref}
        aria-selected='true'
        role='tab'
      >
        <div className='nav-icon px-4 py-4 w-40px'>
          <KTSVG path={image} className='svg-icon-2x' />
        </div>
        <span className='nav-text text-gray-700 fw-bold fs-6 lh-1'>{title}</span>

        <span className='bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary'></span>
      </a>
    </li>
  )
}
