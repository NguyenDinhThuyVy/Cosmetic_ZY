import Footer from 'src/components/Footer'

interface Props {
  children?: React.ReactNode
}
export default function MainLayout({ children }: Props) {
  return (
    <div>
      MainLayout
      {children}
      <Footer />
    </div>
  )
}
