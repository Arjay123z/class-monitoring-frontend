const KEY = 'instructorId'

export  function saveSessions(id: string) {
    try {
        sessionStorage.setItem(KEY, id)
    } catch {
        // storate blocked: ignore
    }
}

export function getSessionId(): string | null {
    try {
        return sessionStorage.getItem(KEY)
    }catch {
        return null
    }
}

export function clearSession() {
    try {
        sessionStorage.removeItem(KEY)
    }catch {
        // ignore
    }
}