import { Status } from "../Enums/status";
import { Blood } from "./blood";

export interface RequestBlood{
    name: string;
    blood: Blood[];
    phoneNumber: string;
    email: string;
    status: Status;
}