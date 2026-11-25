export type ActivityItem = {
  id: string
  time: string
  text: string
}

export const recentActivity: ActivityItem[] = [
  { id: 'ACT-4', time: '10:46', text: 'PC-04: Workstation disconnected' },
  { id: 'ACT-3', time: '10:01', text: 'PC-03: Student signed in' },
  { id: 'ACT-2', time: '10:01', text: 'PC-01: Student signed in' },
  { id: 'ACT-1', time: '10:00', text: 'Session started' },
]