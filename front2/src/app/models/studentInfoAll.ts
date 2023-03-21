export interface IStudentInfoAll {
    image: string;
    studentNum: number;
    firstName: string;
    lastName: string;
    tel1: string;
    tel2: string;
    tel3: string;
    email1: string;
    email2: string;
    email3: string;
    birthDate: string;
    postalAddr: string;
    promotion: string;
}

export class StudentInfoAll implements IStudentInfoAll {
    constructor(
                public image: string,
                public studentNum: number,
                public firstName: string,
                public lastName: string,
                public tel1: string,
                public tel2: string,
                public tel3: string,
                public email1: string,
                public email2: string,
                public email3: string,
                public birthDate: string,
                public postalAddr: string,
                public promotion: string
    ) {}
}