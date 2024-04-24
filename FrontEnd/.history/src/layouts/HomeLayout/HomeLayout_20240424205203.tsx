import { ConfigProvider, FloatButton } from 'antd'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import NavHeader from 'src/components/NavHeader'
import { UpOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'

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
        colorPrimary: '#f37874',
        colorPrimaryHover: '#f37874c54',
        fontSizeIcon: 14,
        controlHeightLG: 40
      }
    }
  }
  const [showFloatButton, setShowFloatButton] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      setShowFloatButton(scrollTop > window.innerHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
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
            <FloatButton icon={<img src='https://page.widget.zalo.me/static/images/2.0/Logo.svg' alt='' />} />
            <FloatButton
              icon={
                <img src='https://res.cloudinary.com/dpqdfe1al/image/upload/v1706522050/messenger_zyke2c.png' alt='' />
              }
            />
          </FloatButton.Group>
        </ConfigProvider>
        <ConfigProvider theme={myTheme1}>
          {showFloatButton && (
            <FloatButton
              shape='circle'
              type='primary'
              style={{ right: 40 }}
              icon={<UpOutlined />}
              onClick={scrollToTop}
            />
          )}
        </ConfigProvider>
      </div>
    </div>
  )
}
