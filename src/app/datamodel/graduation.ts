export class Graduation {
    degree: GraduationDegree;
    spezialisation: string;
    macos: MACOS;

}

export class GraduationDegree {
    public static MASTER: string = "Master";
    public static BACHELOR: string = "Bachelor";
    public static MAGISTER: string = "Magister";
    public static DIPLOM: string = "Diplom";
    public static DR_MED: string = "Dr.med";
    public static DOKTOR: string = "Doktor";
    public static PHD: string = "PhD";
    //
    public static cyclus = {
        c0: { bachelor: GraduationDegree.BACHELOR },
        c1: { master: GraduationDegree.MASTER, magister: GraduationDegree.MAGISTER, diplom: GraduationDegree.DIPLOM, dr: GraduationDegree.DR_MED },
        c2: { dr: GraduationDegree.DOKTOR, phd: GraduationDegree.PHD }
    };
}

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
    public static ENGINEERING= 'Engineering';
    public static FINEARTS= 'Fine Arts';
    public static LAWS= 'Laws';
    public static MUSIC= 'Music';
    public static SCIENCE= 'Science';
}
