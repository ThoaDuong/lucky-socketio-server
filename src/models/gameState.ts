// Store called numbers per room for game state persistence
const roomCalledNumbers: Map<string, (number | null)[]> = new Map();

/** Get called numbers for a specific room */
export const getCalledNumbers = (room: string): (number | null)[] => {
    return roomCalledNumbers.get(room) || [];
}

/** Update called numbers for a specific room */
export const setCalledNumbers = (room: string, calledNumbers: (number | null)[]) => {
    roomCalledNumbers.set(room, calledNumbers);
}

/** Clear called numbers when game ends or room is empty */
export const clearCalledNumbers = (room: string) => {
    roomCalledNumbers.delete(room);
}
