import WorkstationCard from "../../components/WorkstationCard";
import { Bell, CirclePlay, Monitor } from "lucide-react";
import { workstations } from "../../data/workstations";
import { currentSession } from "../../data/sessions";
import './Dashboard.css'


const rows = ['A', 'B', 'C', 'D'] as const
function Dashboard() {
    const total = workstations.length
    const connected = workstations.filter((w) => w.status === 'connected').length
    const disconnected = total - connected
    const pending = workstations.filter((w) => w.ruleConflict).length

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

            <section className="dash-panel">
                    <div className="dash-desk">
                        <Monitor size={16} />
                        Fron of room. Instructor desk
                    </div>

                    {rows.map((row) =>
                        <div key={row}>
                            <p className="dash-row-label">Row {row}</p>
                            <div className="dash-row">
                                {workstations
                                    .filter((w) => w.row === row)
                                    .map((w) => (
                                        <WorkstationCard key={w.id} workstation={w} />
                                    ))
                                }
                            </div>
                        </div>
                    )}
                </section>
        </div>

    )
}

export default Dashboard