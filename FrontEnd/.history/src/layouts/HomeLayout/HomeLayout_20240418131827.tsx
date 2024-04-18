import { ConfigProvider, FloatButton } from 'antd'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import NavHeader from 'src/components/NavHeader'
import { CommentOutlined } from '@ant-design/icons'
interface Props {
  children?: React.ReactNode
}

export default function HomeLayout({ children }: Props) {
  const myTheme = {
    components: {
      FloatButton: {
        colorPrimary: '#a353245f',
        colorPrimaryHover: '#a353245f',
        fontSizeIcon: 24,
        width: 180,
        height: 100
      }
    }
  }
  return (
    <div className='relative'>
      <NavHeader />
      <Header />
      {children}
      <Footer />
      <div className='absolute bottom-0 left-0 z-10 '>
        <ConfigProvider theme={myTheme}>
          <FloatButton.Group
            trigger='hover'
            style={{
              left: 40
            }}
            icon={
              <img src='https://res.cloudinary.com/dpqdfe1al/image/upload/v1707192725/ICON_-03_lpozdn.png' alt='' />
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
