import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import NavHeader from 'src/components/NavHeader'

interface Props {
  children?: React.ReactNode
}
export default function HomeLayout({ children }: Props) {
  return (
    <div>
      <Header />
      <NavHeader />
      {children}
      <Footer />
    </div>
  )
}
