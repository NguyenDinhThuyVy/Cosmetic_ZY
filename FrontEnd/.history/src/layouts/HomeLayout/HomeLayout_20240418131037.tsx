import { ConfigProvider, FloatButton } from 'antd'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import NavHeader from 'src/components/NavHeader'
import { CommentOutlined } from '@ant-design/icons'
interface Props {
  children?: React.ReactNode
}

export default function HomeLayout({ children }: Props) {
  // const myTheme = {
  //   components: {
  //     FloatButton: {
  //       colorPrimary: '#eee9e660',
  //       colorPrimaryHover: '#eee9e660',
  //       fontSize: '24px',
  //       width: '80px'
  //     }
  //   }
  // }
  return (
    <div className='relative'>
      <NavHeader />
      <Header />
      {children}
      <Footer />
      <div className='absolute bottom-0 left-0 z-10 '>
        <ConfigProvider>
          <FloatButton.Group
            trigger='hover'
            style={{
              left: 40,
              width: 100, // Adjust left position as needed
              fontSize: 80,
              height: 70
            }}
            icon={
              <img
                src='https://res.cloudinary.com/dpqdfe1al/image/upload/v1707192725/ICON_-03_lpozdn.png'
                alt=''
                style={{
                  width: 80,
                  height: 40 // Adjust left position as needed
                }}
              />
            }
          >
            <FloatButton />
            <FloatButton icon={<CommentOutlined />} />
          </FloatButton.Group>
        </ConfigProvider>
      </div>
    </div>
  )
}
