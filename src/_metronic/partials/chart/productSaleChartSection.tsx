/* eslint-disable jsx-a11y/anchor-is-valid */
import ApexCharts, {ApexOptions} from 'apexcharts'
import React, {useEffect, useRef} from 'react'
import {getCSS, getCSSVariableValue} from '../../assets/ts/_utils'
import {KTSVG} from '../../helpers'
import {useThemeMode} from '../layout/theme-mode/ThemeModeProvider'

type Props = {
  className: string
}

const ProductSaleChartSection: React.FC<Props> = ({className}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const {mode} = useThemeMode()

  useEffect(() => {
    const chart = refreshChart()

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
  }, [chartRef, mode])

  const refreshChart = () => {
    if (!chartRef.current) {
      return
    }

    const height = parseInt(getCSS(chartRef.current, 'height'))

    const chart = new ApexCharts(chartRef.current, getChartOptions(height))
    if (chart) {
      chart.render()
    }

    return chart
  }

  return (
    <div className={`card ${className} h-md-100`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        {/* begin::Title */}
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Product Sales</span>

          <span className='text-muted fw-semibold fs-7'>Users from all channels</span>
        </h3>
        {/* end::Title */}

        {/* begin::Toolbar */}
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button>

          {/* end::Menu */}
        </div>
        {/* end::Toolbar */}
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className='card-body d-flex justify-content-between flex-column pb-1 px-0'>
        <div className='px-9 mb-5'>
          <div className='d-flex align-items-center mb-2'>
            <span className='fs-4 fw-semibold text-gray-400 align-self-start me-1'>$</span>

            <span className='fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2'>3,706</span>

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
                    x='11'
                    y='18'
                    width='13'
                    height='2'
                    rx='1'
                    transform='rotate(-90 11 18)'
                    fill='currentColor'
                  />
                  <path
                    d='M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z'
                    fill='currentColor'
                  />
                </svg>
              </span>
              4.5%
            </span>
          </div>

          <span className='fs-6 fw-semibold text-gray-400'>Total Discounted Sales This Month</span>
        </div>
        <div ref={chartRef} id='sale-chart' style={{height: '350px'}} />
      </div>

      {/* end::Body */}
    </div>
  )
}

export {ProductSaleChartSection}

function getChartOptions(height: number): ApexOptions {
  const labelColor = getCSSVariableValue('--bs-gray-500')
  const borderColor = getCSSVariableValue('--bs-gray-200')
  const baseColor = getCSSVariableValue('--bs-info')
  const lightColor = getCSSVariableValue('--bs-info-light')

  const options: ApexOptions = {
    series: [
      {
        name: 'Sales',
        data: [18, 18, 20, 20, 18, 18, 22, 22, 20, 20, 18, 18, 20, 20, 18, 18, 20, 20, 22],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'area',
      height: height,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 80, 100],
      },
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: 3,
      colors: [baseColor],
    },
    xaxis: {
      categories: [
        '',
        'Apr 02',
        'Apr 03',
        'Apr 04',
        'Apr 05',
        'Apr 06',
        'Apr 07',
        'Apr 08',
        'Apr 09',
        'Apr 10',
        'Apr 11',
        'Apr 12',
        'Apr 13',
        'Apr 14',
        'Apr 15',
        'Apr 16',
        'Apr 17',
        'Apr 18',
        '',
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tickAmount: 6,
      labels: {
        rotate: 0,
        rotateAlways: true,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
      crosshairs: {
        position: 'front',
        stroke: {
          color: baseColor,
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      tickAmount: 4,
      max: 24,
      min: 10,
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
        formatter: function (val) {
          return '$' + val + 'K'
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val) {
          return '$' + val + 'K'
        },
      },
    },
    colors: [lightColor],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    markers: {
      //  strokeColor: [baseLightColor],
      strokeWidth: 3,
    },
  }
  return options
}
