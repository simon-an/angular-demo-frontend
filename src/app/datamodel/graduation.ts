export class Graduation {
    degree: GraduationDegree;
    spezialisation: string;
    macos: MACOS;

}
// tslint:disable-next-line:max-classes-per-file
export class GraduationDegree {
    public static MASTER = 'Master';
    public static BACHELOR = 'Bachelor';
    public static MAGISTER = 'Magister';
    public static DIPLOM = 'Diplom';
    public static DR_MED = 'Dr.med';
    public static DOKTOR = 'Doktor';
    public static PHD = 'PhD';
    //
    public static cyclus = {
        c0: { bachelor: GraduationDegree.BACHELOR },
        // tslint:disable-next-line:max-line-length
        c1: { master: GraduationDegree.MASTER, magister: GraduationDegree.MAGISTER, diplom: GraduationDegree.DIPLOM, dr: GraduationDegree.DR_MED },
        c2: { dr: GraduationDegree.DOKTOR, phd: GraduationDegree.PHD }
    };
}

// tslint:disable-next-line:max-classes-per-file
export class MACOS {
    // public static ARTS: 'M.A.';
    // public static EDUCATION: 'M.Ed.';
    // public static ENGINEERING: 'M.Eng.';
    // public static FINEARTS: 'M.F.A.';
    // public static LAWS: 'LL.M.';
    // public static MUSIC: 'M.Mus.';
    // public static SCIENCE: 'M.Sc.';

    public static ARTS = 'Arts';
    public static EDUCATION = 'Education';
    public static ENGINEERING = 'Engineering';
    public static FINEARTS = 'Fine Arts';
    public static LAWS = 'Laws';
    public static MUSIC = 'Music';
    public static SCIENCE = 'Science';
}
