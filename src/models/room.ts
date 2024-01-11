export const listStartedRoom: string[] = [];

export const addStartedRoom = (room: string) => {
    const index = listStartedRoom.findIndex(item => item === room);
    if(index === -1) {
        listStartedRoom.push(room);
    }
}

export const removeStartedRoom = (room: string) => {
    const index = listStartedRoom.findIndex(item => item === room);
    listStartedRoom.splice(index, 1);
}