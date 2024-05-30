import { DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons'
import { Card, Space, Statistic, Table, Typography } from 'antd'
import { useState } from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
} from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'
import TableOrder from '../TableOrder'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement)

function ChartWeek() {
  // const [orders, setOrders] = useState(0)
  // const [inventory, setInventory] = useState(0)
  // const [customers, setCustomers] = useState(0)
  // const [revenue, setRevenue] = useState(0)

  // useEffect(() => {
  //   getOrders().then((res) => {
  //     setOrders(res.total)
  //     setRevenue(res.discountedTotal)
  //   })
  //   getInventory().then((res) => {
  //     setInventory(res.total)
  //   })
  //   getCustomers().then((res) => {
  //     setCustomers(res.total)
  //   })
  // }, [])

  return (
    <Space size={20} direction='vertical' className=' pb-4'>
      <Space direction='horizontal' className='flex items-start gap-5'>
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: 'green',
                backgroundColor: 'rgba(0,255,0,0.25)',
                borderRadius: 20,
                fontSize: 24,
                padding: 8
              }}
            />
          }
          title={'Orders'}
          value='20'
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: 'blue',
                backgroundColor: 'rgba(0,0,255,0.25)',
                borderRadius: 20,
                fontSize: 24,
                padding: 8
              }}
            />
          }
          title={'Inventory'}
          value='20'
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: 'purple',
                backgroundColor: 'rgba(0,255,255,0.25)',
                borderRadius: 20,
                fontSize: 24,
                padding: 8
              }}
            />
          }
          title={'Customer'}
          value='20'
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: 'red',
                backgroundColor: 'rgba(255,0,0,0.25)',
                borderRadius: 20,
                fontSize: 24,
                padding: 8
              }}
            />
          }
          title={'Revenue'}
          value='20'
        />
      </Space>

      <div className='w-full'>
        <span className='font text-[14px]'>Đơn hàng mới nhất</span>
        <TableOrder />
      </div>

      <Space>
        <DashboardChartDay />
        <DashboardChart />
      </Space>
    </Space>
  )
}

function DashboardCard({ title, value, icon }: any) {
  return (
    <Card className=''>
      <Space direction='horizontal'>
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  )
}

function DashboardChartDay() {
  const [reveneuData] = useState({
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Weekly Revenue',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }
    ]
  })

  return (
    <Card style={{ width: 500, height: 250 }}>
      <Bar data={reveneuData} />
    </Card>
  )
}

function DashboardChart() {
  const [revenueData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Monthly Revenue',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
        fill: false // Ensure the line chart is not filled
      }
    ]
  })

  return (
    <Card style={{ width: 500, height: 250 }}>
      <Line data={revenueData} />
    </Card>
  )
}

export default ChartWeek
