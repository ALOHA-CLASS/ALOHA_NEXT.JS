import Footer from "@/components/Footer"
import Header from "@/components/Header"

const MainLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
      <>
        <Header />
        {children}
        <Footer />
      </>
  )
}

export default MainLayout