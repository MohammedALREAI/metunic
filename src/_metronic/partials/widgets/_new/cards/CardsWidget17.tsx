/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect, useRef} from 'react'
import {getCSSVariableValue} from '../../../../assets/ts/_utils'
import {useThemeMode} from '../../../layout/theme-mode/ThemeModeProvider'

type Props = {
  className: string
  chartSize?: number
  chartLine?: number
  chartRotate?: number
}

const CardsWidget17: FC<Props> = ({
  className,
  chartSize = 70,
  chartLine = 11,
  chartRotate = 145,
}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const {mode} = useThemeMode()
  useEffect(() => {
    refreshChart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode])

  const refreshChart = () => {
    if (!chartRef.current) {
      return
    }

    setTimeout(() => {
      initChart(chartSize, chartLine, chartRotate)
    }, 10)
  }

  return (
    <div
      className='card card-flush h-md-50 mb-5 mb-xl-10'
      style={{
        maxHeight: '231.02px',
        height: '100%',
      }}
    >
      <div className='card-header pt-5'>
        <div className='card-title d-flex flex-column'>
          <div className='d-flex align-items-center'>
            <span className='fs-4 fw-semibold text-gray-400 me-1 align-self-start'>$</span>
            <span className='fs-2hx fw-bold text-dark me-2 lh-1 ls-n2'>69,700</span>
            <span className='badge badge-light-success fs-base'>
              <span className='svg-icon svg-icon-5 svg-icon-success ms-n1'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect
                    opacity='0.5'
                    x='13'
                    y='6'
                    width='13'
                    height='2'
                    rx='1'
                    transform='rotate(90 13 6)'
                    fill='currentColor'
                  />
                  <path
                    d='M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z'
                    fill='currentColor'
                  />
                </svg>
              </span>
              2.2%
            </span>
          </div>
          <span className='text-gray-400 pt-1 fw-semibold fs-6'>Expected Earnings</span>
        </div>
      </div>
      <div className='card-body pt-2 pb-4 d-flex align-items-center'>
        <div className='d-flex flex-center me-5 pt-2'>
          <div
            id='kt_card_widget_17_chart'
            ref={chartRef}
            style={{minWidth: chartSize + 'px', minHeight: chartSize + 'px'}}
            data-kt-size={chartSize}
            data-kt-line={chartLine}
          ></div>{' '}
        </div>

        <div className='d-flex flex-column content-justify-center w-100'>
          <div className='d-flex fs-6 fw-semibold align-items-center'>
            <div className='bullet w-8px h-6px rounded-2 bg-danger me-3'></div>
            <div className='text-gray-500 flex-grow-1 me-4'>Shoes</div>
            <div className='fw-bolder text-gray-700 text-xxl-end'>$7,660</div>
          </div>

          <div className='d-flex fs-6 fw-semibold align-items-center my-3'>
            <div className='bullet w-8px h-6px rounded-2 bg-primary me-3'></div>
            <div className='text-gray-500 flex-grow-1 me-4'>Gaming</div>
            <div className='fw-bolder text-gray-700 text-xxl-end'>$2,820</div>
          </div>
          <div className='d-flex fs-6 fw-semibold align-items-center'>
            <div className='bullet w-8px h-6px rounded-2 me-3 text-white'></div>
            <div className='text-gray-500 flex-grow-1 me-4'>Others</div>
            <div className='fw-bolder text-gray-700 text-xxl-end'>$45,257</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const initChart = function (
  chartSize: number = 70,
  chartLine: number = 11,
  chartRotate: number = 145
) {
  const el = document.getElementById('kt_card_widget_17_chart')
  if (!el) {
    return
  }
  el.innerHTML = ''

  var options = {
    size: chartSize,
    lineWidth: chartLine,
    rotate: chartRotate,
    //percent:  el.getAttribute('data-kt-percent') ,
  }

  const canvas = document.createElement('canvas')
  const span = document.createElement('span')

  // @ts-ignore
  if (typeof G_vmlCanvasManager !== 'undefined') {
    // @ts-ignore
    G_vmlCanvasManager.initElement(canvas)
  }

  const ctx = canvas.getContext('2d')
  canvas.width = canvas.height = options.size

  el.appendChild(span)
  el.appendChild(canvas)

  // @ts-ignore
  ctx.translate(options.size / 2, options.size / 2) // change center
  // @ts-ignore
  ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI) // rotate -90 deg

  //imd = ctx.getImageData(0, 0, 240, 240);
  const radius = (options.size - options.lineWidth) / 2

  const drawCircle = function (color: string, lineWidth: number, percent: number) {
    percent = Math.min(Math.max(0, percent || 1), 1)
    if (!ctx) {
      return
    }

    ctx.beginPath()
    ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false)
    ctx.strokeStyle = color
    ctx.lineCap = 'round' // butt, round or square
    ctx.lineWidth = lineWidth
    ctx.stroke()
  }

  // Init 2
  drawCircle('#E4E6EF', options.lineWidth, 100 / 100)
  drawCircle(getCSSVariableValue('--bs-primary'), options.lineWidth, 100 / 150)
  drawCircle(getCSSVariableValue('--bs-success'), options.lineWidth, 100 / 250)
}

export {CardsWidget17}
