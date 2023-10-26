export interface UserData {
    id: number;
    userName: string;
    email: string;
    passwordSalt: string;
    passwordHash: string;
}