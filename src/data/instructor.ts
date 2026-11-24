export type Instructor = {
    id: string
    fullName: string
    username: string
    password: string
}

export const instructors: Instructor[] = [
    {
        id: 'INS-001',
        fullName:   'Instructor A',
        username:   'instructor.a',
        password:   'password123',
    },
]

export function addInstructor(
    fullName: string,
    username: string,
    password: string, 
): Instructor{
    const newInstructor: Instructor = {
        id: `INS-${String(instructors.length + 1).padStart(3, '0')}`,
        fullName,
        username,
        password,
    }
    instructors.push(newInstructor)
    return newInstructor
}
