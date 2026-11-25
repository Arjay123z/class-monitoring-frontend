import { CircleCheck, MonitorOff, TriangleAlert } from "lucide-react";
import type { Workstation } from "../data/workstations";
import './WorkstationCard.css'

type Props = {workstation: Workstation}

function previewClass (app: string | null) {
    if (app === 'code.exe' || app === 'game.exe') return 'preview-dark'
    if(app === 'excel.exe') return 'preview-green'
    return 'preview-light'
}

function WorkstationCard({workstation: w}: Props) {
    const disconnected = w.status === 'disconnected'

    let cardClass = 'ws-card ws-ok'
    if (disconnected) cardClass = 'ws-card ws-disconnected'
    else if (w.ruleConflict) cardClass = 'ws-card ws-conflict'

    return (
        <div className = {cardClass}>
            <div className="ws-head">
                <strong>{w.id}</strong>
                {disconnected ? (
                    <span className="ws-badge ws-badge-off">
                        <MonitorOff size={13} /> Disconnected
                    </span>
                ) : (
                    <span className="ws-badge ws-badge-on">
                        <CircleCheck size={13} /> Connected
                    </span>
                )}
            </div>

            {w.studentName ? (
                <div className="ws-student">
                    <span className="ws-avatar">{w.studentName.slice(-1)}</span>
                    <div>
                        <p>{w.studentName}</p>
                        <small>{w.studentNumber}</small>
                    </div>
                </div>
            ): (
                <p className="ws-nostudent">No student signed in</p>
            )}

            {w.ruleConflict && (
                <span className="ws-conflict-tag">
                    <TriangleAlert size={13} /> Rule conflict
                </span>
            )}

            {disconnected && (
                <div className="ws-placeholder">
                    <MonitorOff size={18} />
                    <span>Disconnected</span>
                </div>
            )}

            {!disconnected && !w.studentName && (
                <div className="ws-placeholder">
                    <MonitorOff size={18} />
                    <span>No student signed in</span>
                </div>
            )}

            {!disconnected && w.studentName && (
                <>
                    <div className={`ws-preview ${previewClass(w.activeApp)}`} />
                    <p className="ws-active">Active: {w.activeApp}</p>
                </>
            )}
        </div>
    )
}

export default WorkstationCard