export type NotificationItem = {
    id: string
    kind: 'rule-conflict'
    title: string
    detail: string
    status: 'pending' | 'reviewed'
}

export const notifications: NotificationItem[] = [
  {
    id: 'NTF-001',
    kind: 'rule-conflict',
    title: 'Application Rule Conflict Detected',
    detail: 'PC-03, Student C, game.exe, 10:42',
    status: 'pending',
  },
]