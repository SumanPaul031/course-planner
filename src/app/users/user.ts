import { Profile } from "./profile";
import { Role } from "../roles/role";

export class User{
    $key: string;
    username: string;
    password:string;
    confirmPassword: string;
    email: string;
    profile: Profile;
    role: Role;
}