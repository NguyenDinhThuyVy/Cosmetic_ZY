import { ConfigProvider, FloatButton } from 'antd'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import NavHeader from 'src/components/NavHeader'
import { UpOutlined } from '@ant-design/icons'
interface Props {
  children?: React.ReactNode
}

export default function HomeLayout({ children }: Props) {
  const myTheme = {
    components: {
      FloatButton: {
        fontSizeIcon: 24,
        controlHeightLG: 60
      }
    }
  }
  const myTheme1 = {
    components: {
      FloatButton: {
        colorPrimary: '#ffc1bf',
        fontSizeIcon: 14,
        controlHeightLG: 40
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
            trigger='click'
            style={{
              left: 40
            }}
            icon={
              <img src='https://res.cloudinary.com/dpqdfe1al/image/upload/v1707192725/ICON_-03_lpozdn.png' alt='' />
            }
          >
            {/* <FloatButton /> */}
            <FloatButton icon={<img src='https://page.widget.zalo.me/static/images/2.0/Logo.svg' alt='' />} />
            <FloatButton
              icon={
                <img src='https://res.cloudinary.com/dpqdfe1al/image/upload/v1706522050/messenger_zyke2c.png' alt='' />
              }
            />
          </FloatButton.Group>
        </ConfigProvider>
        <ConfigProvider theme={myTheme1}>
          {' '}
          <FloatButton shape='circle' type='primary' style={{ right: 40 }} icon={<UpOutlined />} />
        </ConfigProvider>
      </div>
    </div>
  )
}
