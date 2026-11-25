export type Session = {
    id: string
    name: string
    type: 'Laboratory Activity' | 'Examination'
    status: 'Running' | 'Ended'
    className: string
    startedBy: string
}

export const currentSession: Session = {
    id: 'SES-001',
    name: 'Activity 1',
    type: 'Laboratory Activity',
    status: 'Running',
    className: 'Class A',
    startedBy: 'Instructor A',
}