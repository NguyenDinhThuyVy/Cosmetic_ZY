import { DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons'
import { Card, Space, Statistic, Table, Typography } from 'antd'
import { useEffect, useState } from 'react'

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

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
    <Space size={20} direction='vertical'>
      <Space direction='horizontal'>
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
      <Space>
        <RecentOrders />
        <DashboardChart />
      </Space>
    </Space>
  )
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction='horizontal'>
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  )
}
function RecentOrders() {
  // const [dataSource, setDataSource] = useState([])
  // const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   setLoading(true)
  //   getOrders().then((res) => {
  //     setDataSource(res.products.splice(0, 3))
  //     setLoading(false)
  //   })
  // }, [])

  return (
    <>
      <Typography.Text>Đơn hàng gần đây</Typography.Text>
      <Table
        columns={[
          {
            title: 'Title',
            dataIndex: 'title'
          },
          {
            title: 'Quantity',
            dataIndex: 'quantity'
          },
          {
            title: 'Price',
            dataIndex: 'discountedPrice'
          }
        ]}
        // loading={loading}
        // dataSource={dataSource}
        pagination={false}
      ></Table>
    </>
  )
}

function DashboardChart() {
  const [reveneuData] = useState({
    labels: ['Ngày 1', 'Ngày 2', 'Ngày 3', 'Ngày 4', 'Ngày 5', 'Ngày 6', 'Ngày 7'],
    datasets: [
      {
        label: 'My First Dataset',
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
    <Card style={{ width: 600, height: 250 }}>
      <Bar data={reveneuData} />
    </Card>
  )
}
export default ChartWeek
