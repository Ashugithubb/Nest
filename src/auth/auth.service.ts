import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    signin() {
        return {msg: "Hello i am sign in service"}
    }

    signup() {
        return {msg: "Hello i am signed up service"}
    }
}
