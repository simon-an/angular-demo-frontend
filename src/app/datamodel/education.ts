import { Graduation } from 'app/datamodel/graduation';
import { Period } from 'app/datamodel/period';

export class Education {

    location: Location;
    organisation: {
        name: string;
        website: string;
    }
    duration: Period;
    graduation: Graduation;
}
