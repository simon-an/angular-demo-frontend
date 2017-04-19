import { Graduation } from 'app/datamodel/graduation';
import { Period } from 'app/datamodel/period';
import { Course } from './course';

export class Education {

    location: Location;
    school: {
        name: string;
        website: string;
    }
    courses: Course[];
    duration: Period;
    graduation: Graduation;

    constructor() {
        this.courses = new Array<Course>();
    }
}
