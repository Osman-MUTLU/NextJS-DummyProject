
interface DashboardLayoutProps {
    children: React.ReactNode
    }


const DashboardLayout = ({children}:DashboardLayoutProps) => {
  return (
    <>
        <nav>
            Dashboard Layout!
        </nav>
        {children}
    </>
    
  )
}

export default DashboardLayout