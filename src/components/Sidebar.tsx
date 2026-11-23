import { NavLink, Link} from 'react-router-dom'
import {
     LayoutDashboard, BookOpen, CirclePlay, Users, Send,
    ShieldCheck, Bell, Inbox, ClipboardList, LogOut,
} from 'lucide-react'
import './Sidebar.css'

const links = [
    {to: '/instructor/dashboard', label: 'Dashboard', icon: LayoutDashboard},
    {to: '/instructor/Classes', label: 'Classes', icon: BookOpen},
    {to: '/instructor/sessions', label: 'Sessions', icon: CirclePlay},
    {to: '/instructor/students', label: 'Student Account', icon: Users},
    {to: '/instructor/distribution', label: 'Activity Distribution', icon: Send},
    {to: '/instructor/rules', label: 'Application Rules', icon: ShieldCheck},
    {to: '/instructor/notifications', label: 'Notifications', icon: Bell},
    {to: '/instructor/submissions', label: 'Submissions', icon: Inbox},
    {to: '/instructor/events', label: 'Event Records', icon: ClipboardList},
]

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">CBIT Lab Monitor</div>

      <nav className="sidebar-nav">
        {links.map((link) => {
          const Icon = link.icon
          return (
            <NavLink key={link.to} to={link.to} className="sidebar-link">
              <Icon size={18} />
              <span>{link.label}</span>
            </NavLink>
          )
        })}
      </nav>

      <div className="sidebar-footer">
        <Link to="/instructor/login" className="sidebar-link">
          <LogOut size={18} />
          <span>Sign out</span>
        </Link>
        <p>Signed in: Instructor A</p>
      </div>
    </aside>
  )
}

export default Sidebar