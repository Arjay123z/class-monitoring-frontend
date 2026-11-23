import { Outlet } from "react-router-dom";
import Sidebar from './Sidebar'
import './InstructorLayout.css'

function InstructorLayout() {
    return (
        <div className = "layout">
            <Sidebar />
            <main className="layout-main">
                <Outlet />
            </main>
        </div>
    )
}

export default InstructorLayout