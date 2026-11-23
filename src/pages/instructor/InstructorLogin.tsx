import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CircleX, Divide } from 'lucide-react'
import { instructors } from '../../data/instructor'
import './InstructorLogin.css'

type LoginError = { title: string; message: string}

function InstructorLogin() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<LoginError | null>(null)

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        if(!username.trim() || !password) {
            setError({
                title: 'Missing Information',
                message: 'Enter your username and password.',
            })
            return
        }

        const match = instructors.find(
            (i) => i.userName === username.trim() && i.password === password,
        )

        if(!match) {
            setError({
                title: 'Sign in failed',
                message: 'Invalid username or password',
            })
            return
        }

        setError(null)
        navigate('/instructor/dashboard')
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
                    College of Business and Information Technology
                </p>

                 <div className="login-grid">
                    <div className="login-grid-bar" />
                    <div className="login-grid-cells">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="login-grid-cell" />
                        ))}
                    </div>
                </div>
                   <p className="login-note">
          Works on the laboratory network. No internet needed.
        </p>
      </aside>

      <main className="login-main">
        <form className="login-card" onSubmit={handleSubmit}>
          <h2>Instructor sign in</h2>

          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <div className="login-error" role="alert">
              <CircleX size={18} />
              <div>
                <strong>{error.title}</strong>
                <p>{error.message}</p>
              </div>
            </div>
          )}

          <button type="submit" className="login-button">
            Sign in
          </button>

          <p className="login-footer">
            New instructor?{' '}
            <Link to="/instructor/register">Create an instructor account</Link>
          </p>
        </form>
      </main>
    </div>
  )
}

export default InstructorLogin