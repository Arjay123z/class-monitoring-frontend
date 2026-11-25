import WorkstationCard from "../../components/WorkstationCard";
import { Bell, CirclePlay, Monitor, TriangleAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { notifications } from "../../data/notification";
import { recentActivity } from "../../data/activity";
import { workstations } from "../../data/workstations";
import { currentSession } from "../../data/sessions";
import './Dashboard.css'


const rows = ['A', 'B', 'C', 'D'] as const
function Dashboard() {
    const total = workstations.length
    const connected = workstations.filter((w) => w.status === 'connected').length
    const disconnected = total - connected
    const navigate = useNavigate()
    const pendingItems = notifications.filter((n) => n.status ==='pending')
    const pending = pendingItems.length

    return (
        <div className="dash">
            <div className="dash-topbar">
                <div className="dash-topbar-left">
                    <strong>{currentSession.name}</strong>
                    <span className="dash-chip">
                        <CirclePlay size={14} />
                        {currentSession.type}
                    </span>
                    <span className="dash-topbar-text">
                        {currentSession.className}. {currentSession.status}. Started by{' '}
                        {currentSession.startedBy}
                    </span>
                </div>

                <div className="dash-topbar-right">
                    <span className="dash-ship">
                        <Monitor size={14} />
                        Monitoring active
                    </span>
                    <button type="button" className="dash-bell" aria-label="Notifications">
                        <Bell size={18} />
                        {pending > 0 && <span className="dash-bell-badge">{pending}</span>}
                    </button>
                </div>
            </div>
            <h1 className="dash-title">Dashboard</h1>
            <p className="dash-subtitle">{currentSession.className}. Your lab at a glance</p>

            <div className="dash-stats">
                <div className="dash-card dash-session-card">
                    <p className="dash-label">Session</p>
                    <h2>{currentSession.name}</h2>
                    <p className="dash-small">
                        Type: {currentSession.type}. Status: {currentSession.status}
                    </p>
                </div>

                <div className="dash-card">
                    <p className="dash-laber">
                        <span className="dot dot-green" /> Connected
                    </p>
                    <p className="dash-number">
                        {connected} <span>of {total}</span>
                    </p>
                    <p className="dash-small">workstations</p>
                </div>

                <div className="dash-card">
                    <p className="dash-labl">
                        <span className="dot dot-gray" /> Disconnected
                    </p>
                    <p className="dash-number">
                        {disconnected} <span>of {total}</span>
                    </p>
                    <p className="dash-small">workstations</p>
                </div>

                <div className="dash-card">
                    <p className="dash-label">
                        <span className="dot dot-orange" /> Pending notifications
                    </p>
                    <p className="dash-number">{pending}</p>
                    <p className="dash-small">needs review</p>
                </div>
            </div>

            <div className="dash-body">
                <section className="dash-panel">
                    <div className="dash-desk">
                        <Monitor size={16} />
                        Front of room. Instructor desk
                    </div>

                    {rows.map((row) => (
                        <div key={row}>
                            <p className="dash-row-label">Row {row}</p>
                            <div className="dash-row">
                                {workstations
                                    .filter((w) => w.row === row)
                                    .map((w) => (
                                        <WorkstationCard key={w.id} workstation={w} />
                                    ))}
                            </div>
                        </div>
                    ))}
                </section>

                <aside className="dash-side">
                    <section className="dash-card">
                        <h3>Needs attention ({pending})</h3>

                        {pendingItems.length === 0 ? (
                            <p className="dash-small">Nothing needs your attention.</p>
                        ) : (
                            pendingItems.map((n) => (
                                <div key={n.id} className="dash-alert">
                                    <p className="dash-alert-title">
                                        <TriangleAlert size={16} /> {n.title}
                                    </p>
                                    <p className="dash-alert-detail">{n.detail}</p>
                                    <button
                                        type="button"
                                        className="dash-review"
                                        onClick={() => navigate('/instructor/notifications')}
                                    >
                                        Review
                                    </button>
                                </div>
                            ))
                        )}

                        <p className="dash-small dash-note">
                            A detected conflict is not proof of misconduct.
                        </p>
                    </section>

                    <section className="dash-card">
                        <h3>Recent activity</h3>

                        {recentActivity.length === 0 ? (
                            <p className="dash-small">No activity yet.</p>
                        ) : (
                            <ul className="dash-activity">
                                {recentActivity.map((a) => (
                                    <li key={a.id}>
                                        <span>{a.time}</span>
                                        <p>{a.text}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </section>
                </aside>
            </div>
        </div>
    )
}

export default Dashboard