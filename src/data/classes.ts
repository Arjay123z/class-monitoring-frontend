export type ClassItem = {
    id: string
    name: string
    studentCount: number
    instructorId: string
}

export const classes: ClassItem [] = [
    {id: 'CLS-001', name: 'Class A' ,studentCount: 7, instructorId: 'INS-001'},
    {id: 'CLS-002', name: 'Class B' ,studentCount: 2, instructorId: 'INS-001'},
]