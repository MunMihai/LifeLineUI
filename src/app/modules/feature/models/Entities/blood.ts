import { BloodType } from "../Enums/blood-type";
import { RhFactor } from "../Enums/rh-factor";

export interface Blood {
    bloodType: BloodType;
    rhFactor: RhFactor;
    quantity: number;
}
