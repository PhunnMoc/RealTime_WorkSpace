import Sidebar from "./_components/Sidebar";
import { Navbar } from "./_components/navbar";
import { OrgSidebar } from "./_components/org-sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="h-full  ">
      <Sidebar />
      <div className=" pl-[60px] h-full ">
        <div className="flex gap-x-3 h-full ">
            <OrgSidebar/>
          <div className="  w-full">
            <Navbar/>
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
