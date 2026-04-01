
import { getDefaultDashboardRoute } from "@/lib/authUtils"
import { NavSection } from "@/types/dashboard.types"
import DashboardNavbarContent from "./DashboardNavbarContent"
import { getUserInfo } from "@/services/auth.service"
import { getNavItemsByRole } from "@/lib/navItems"


const DashboardNavbar = async () => {
   const userInfo = await getUserInfo()
    const navItems : NavSection[] = getNavItemsByRole(userInfo.role)
  
    const dashboardHome = getDefaultDashboardRoute(userInfo.role)
  return (
    <DashboardNavbarContent userInfo={userInfo} navItems={navItems} dashboardHome={dashboardHome}/>
  )
}

export default DashboardNavbar
