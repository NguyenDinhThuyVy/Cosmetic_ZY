import { FloatButton } from 'antd'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import NavHeader from 'src/components/NavHeader'
import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons'
interface Props {
  children?: React.ReactNode
}
export default function HomeLayout({ children }: Props) {
  return (
    <div className='relative'>
      <NavHeader />
      <Header />
      {children}
      <Footer />
      <div className='absolute bottom-0 left-0 z-10'>
        {' '}
        <FloatButton.Group
          trigger='hover'
          type='primary'
          style={{ left: 40 }}
          icon={
            <img
              src='https://res.cloudinary.com/dpqdfe1al/image/upload/v1707192725/ICON_-03_lpozdn.png'
              alt='Customer Service Icon'
            />
          }
        >
          <FloatButton />
          <FloatButton icon={<CommentOutlined />} />
        </FloatButton.Group>
      </div>
    </div>
  )
}
