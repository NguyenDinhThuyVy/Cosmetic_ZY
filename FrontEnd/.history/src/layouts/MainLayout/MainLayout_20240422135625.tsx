import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import 'src/Styles/Body.scss'
interface Props {
  children?: React.ReactNode
}
export default function MainLayout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
