import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { classes } from "../../data/classes";
import { getSessionId } from "../../services/sessions";
import './InstructorLogin.css'
import './ClassSelection.css'

function ClassSelection() {
    const navigate = useNavigate()
    const instructorId = getSessionId()
    const items = classes.filter((c) => c.instructorId === instructorId)

    useEffect(() => {
        if (!instructorId) {
            navigate('/instructor/login')
        }
    }, [instructorId, navigate])

    function renderContent() {
        if (items.length === 0) {
            return (
                <>
                    <h2>No classes yet</h2>
                    <BookOpen size={28} className="class-empty-icon" />
                    <p className="class-intro">
                    Create your first class to start a session and enroll students.
                    </p>
                    <button
                        type="button"
                        className="login-button class-create"
                        onClick={() => navigate('/instructor/classes')}
                    >
                        Create class
                    </button>
                </>
            )
        }
            return(
            <>
                <h2>Select a class</h2>
                <p className="class-intro">
                    Pick the class whose session you want to manage. You see only your
                    own classes.
                </p>

                {items.map((c) =>(
                    <div key={c.id} className="class-row">
                        <div>
                            <strong>{c.name}</strong>
                            <p>{c.studentCount} students enrolled</p>
                        </div>
                        <button
                            type="button"
                            className="class-open"
                            onClick={() => navigate('/instructor/dashboard')}
                        >
                            Open
                        </button>
                    </div>
                ))}
            </>
        )
    }
    
    return (
        <div className="login-page">
            <aside className="login-brand">
                <div className="login-seal" />
                <h1>CBIT Lab Monitor</h1>
                <p className="login-system">
                    Class Monitoring and Management System for the Computer Laboratory
                </p>
                <p className="login-college">
                    College of Bussiness and Information Technology
                </p>

                <div className="login-grid">
                    <div className="login-grid-bar" />
                    <div className="login-grid-cells">
                        {Array.from({length:12}).map((_, i) => (
                            <div key ={i} className="login-grid-cell" />
                        ))}
                    </div>
                </div>

                <p className="login-note">
                    Works on the laboratory network. No internet needed.
                </p>
            </aside>

            <main className="login-main">
                <div className="login-card">{renderContent()}</div>
            </main>
        </div>
    )
}


export default ClassSelection