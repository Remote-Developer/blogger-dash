import Sidebar from "@/components/dashboard/Sidebar"


const metadata = {
    title: 'Dashboard Layout',
    description: 'description layout'
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
         <div className="grid grid-cols-12 gap-x-6">
         <div className="col-span-2 bg-slate-900 h-screen">
                <Sidebar/>
            </div>
            <div className="col-span-10">
                {children}
            </div>
         </div>
        </div>
    )
}