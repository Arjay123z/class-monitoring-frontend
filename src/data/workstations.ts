export type WorkstationStatus = 'connected' | 'disconnected'

export type Workstation = {
    id: string
    row: 'A' | 'B' | 'C' | 'D'
    status: WorkstationStatus
    studentName: string | null
    studentNumber: string | null
    activeApp: string | null
    ruleConflict: boolean
}

export const workstations: Workstation[] = [
    {id:'PC-01', row: 'A', status: 'connected', studentName: 'Student A', studentNumber: 'SAMPLE-0001', activeApp: 'code.exe', ruleConflict: false},
    {id:'PC-02', row: 'A', status: 'connected', studentName: 'Student B', studentNumber: 'SAMPLE-0002', activeApp: 'winword.exe', ruleConflict: false},
    {id:'PC-03', row: 'A', status: 'connected', studentName: 'Student C', studentNumber: 'SAMPLE-0003', activeApp: 'game.exe', ruleConflict: true},
    {id:'PC-04', row: 'B', status: 'disconnected', studentName: 'Student D', studentNumber: 'SAMPLE-0004', activeApp: 'null', ruleConflict: false},
    {id:'PC-05', row: 'B', status: 'connected', studentName: 'Student E', studentNumber: 'SAMPLE-0005', activeApp: 'chrome.exe', ruleConflict: false},
    {id:'PC-06', row: 'B', status: 'connected', studentName: null, studentNumber: null, activeApp: 'null', ruleConflict: false},
    {id:'PC-07', row: 'C', status: 'connected', studentName: 'Student G', studentNumber: 'SAMPLE-0007', activeApp: 'excel.exe', ruleConflict: false},
    {id:'PC-08', row: 'C', status: 'connected', studentName: 'Student H', studentNumber: 'SAMPLE-0008', activeApp: 'code.exe', ruleConflict: false},
    {id:'PC-09', row: 'C', status: 'connected', studentName: 'Student I', studentNumber: 'SAMPLE-0009', activeApp: 'winword.exe', ruleConflict: false},
    {id:'PC-10', row: 'D', status: 'connected', studentName: null, studentNumber: null, activeApp: 'null', ruleConflict: false},
    {id:'PC-11', row: 'D', status: 'connected', studentName: 'Student K', studentNumber: 'SAMPLE-0011', activeApp: 'chrome.exe', ruleConflict: false},
    {id:'PC-12', row: 'D', status: 'connected', studentName: 'Student L', studentNumber: 'SAMPLE-0012', activeApp: 'code.exe', ruleConflict: false},
]