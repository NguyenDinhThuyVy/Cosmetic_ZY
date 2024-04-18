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
    <div>
      <NavHeader />
      <Header />
      {children}
      <Footer />
      <FloatButton.Group trigger='hover' type='primary' style={{ right: 94 }} icon={<CustomerServiceOutlined />}>
        <FloatButton />
        <FloatButton icon={<CommentOutlined />} />
      </FloatButton.Group>
    </div>
  )
}
