export interface UserItem {
    id: string;
    firstName: string;
    lastName: string;
}

class User implements UserItem {
    id: string;
    firstName: string;
    lastName: string;
    constructor(userId: string, userFirstName: string, userLastName: string) {
        this.id = userId;
        this.firstName = userFirstName;
        this.lastName = userLastName;
    }
    getUser(): UserItem {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
        };
    }
}
