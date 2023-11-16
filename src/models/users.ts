import { User } from "../interfaces/User";

export const users: User[] = [];

export const getUserByUsername: (User|any) = (username: string) => {
    return users.find(user => user.username === username);
}

export const addNewUser = (user: User) => {
    users.push(user);    
}

export const removeUser = (userId: string) => {
    const index = users.findIndex(user => user.id === userId);
    users.splice(index, 1);
}

export const updateUserTakeAdmin = (username: string) => {
    const index = users.findIndex(user => user.username === username);
    const newUser = { 
        ...users[index],
        isAdmin: true,
    }
    users.splice(index, 1, newUser);
}

export const updateUserReleaseAdmin = (username: string) => {
    const index = users.findIndex(user => user.username === username);
    const newUser = { 
        ...users[index],
        isAdmin: false,
    }
    users.splice(index, 1, newUser);
}