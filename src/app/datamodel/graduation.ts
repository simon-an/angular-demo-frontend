export class Graduation {
    degree: GraduationDegree;
    spezialisation: string;
    macos: MACOS;

}

export class GraduationDegree {
    cyclus1: ['Bachelor'];
    cyclus2: ['Master', 'Magister', 'Diplom', 'Dr.med'];
    cyclus3: ['Doktor, PhD']
}

export class MACOS {
    Arts: 'M.A.';
    Education: 'M.Ed.';
    Engineering: 'M.Eng.';
    FineArts: 'M.F.A.';
    Laws: 'LL.M.';
    Music: 'M.Mus.';
    Science: 'M.Sc.';
}
