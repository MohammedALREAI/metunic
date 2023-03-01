import ApexCharts, {ApexOptions} from 'apexcharts'
import {useEffect, useRef} from 'react'
import {getCSS, getCSSVariableValue} from '../../assets/ts/_utils'
import {useThemeMode} from '../layout/theme-mode/ThemeModeProvider'

interface ApexChartProps {}
interface ApexChartState {
  series: {
    name: string
    data: number[]
  }[]
  options: ApexOptions
}

const AreaChartLine = (props: ApexChartProps) => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const {mode} = useThemeMode()

  const refreshMode = () => {
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

  useEffect(() => {
    const chart = refreshMode()

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
  }, [chartRef, mode])

  return (
    <div className='card-body pb-2'>
      {/* begin::Chart */}
      <div ref={chartRef} style={{height: '240px'}} className='' />
    </div>
  )
}

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

export default AreaChartLine
