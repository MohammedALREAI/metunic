/* eslint-disable jsx-a11y/anchor-is-valid */
import ApexCharts, {ApexOptions} from 'apexcharts'
import {FC, useEffect, useRef} from 'react'
import {getCSS, getCSSVariableValue} from '../../assets/ts/_utils'
import {KTSVG} from '../../helpers'
import {useThemeMode} from '../layout/theme-mode/ThemeModeProvider'

type Props = {
  className: string
  data?: Array<number>
}

export const Chart2Section: FC<Props> = ({className, data}) => {
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
    <div
      className={`card card-flush ${className}`}
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
              <KTSVG
                path='/media/icons/duotune/arrows/arr066.svg'
                className='svg-icon-5 svg-icon-success ms-n1'
              />{' '}
              2.2%
            </span>
          </div>
          <span className='text-gray-400 pt-1 fw-semibold fs-6'>Daily Sales</span>
        </div>
      </div>
      <div className='card-body d-flex align-items-end px-0 pb-0'>
        {/* begin::Chart */}
        <div
          ref={chartRef}
          className='w-100'
          id='kt_charts_widget_1_chart'
          style={{
            height: '80px',
            minHeight: '80px',
          }}
        />
        {/* end::Chart */}
      </div>
    </div>
  )
}

function getChartOptions(height: number): ApexOptions {
  const labelColor = getCSSVariableValue('--bs-gray-500')
  const borderColor = getCSSVariableValue('--bs-gray-200')
  const baseColor = getCSSVariableValue('--bs-primary')
  const secondaryColor = getCSSVariableValue('--bs-gray-300')

  return {
    series: [
      {
        name: 'Sales',
        data: [30, 60, 53, 45, 60, 75, 53],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'bar',
      height: height,
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 6,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 9,
      colors: ['transparent'],
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
        //    tickPlacement: 'between',
      },
      labels: {
        show: false,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
      crosshairs: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    fill: {
      type: 'solid',
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
      x: {
        formatter: function (val) {
          return 'Feb: ' + val
        },
      },
      y: {
        formatter: function (val) {
          return val + '%'
        },
      },
    },
    colors: [baseColor, secondaryColor],
    grid: {
      padding: {
        left: 10,
        right: 10,
      },
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  }
}
