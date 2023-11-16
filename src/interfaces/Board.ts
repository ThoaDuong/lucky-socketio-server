export interface Board {
    id: number,
    color: string,
    title: string,
    numbers: (number | null)[][],
    username: string | null
}