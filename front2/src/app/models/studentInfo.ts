export interface IStudentInfo {
    isSelected: boolean;
    id: number;
    b64ImageSrc: string;
    numEtudiant: number;
    allName: string;
    tel: string;
    email: string;
    birthDate: string;
    addrPostal: string;
    isEdit: boolean;
}

export class StudentInfo implements IStudentInfo {
    constructor(public isSelected: boolean,
                public id: number,
                public b64ImageSrc: string,
                public numEtudiant: number,
                public allName: string,
                public tel: string,
                public email: string,
                public birthDate: string,
                public addrPostal: string,
                public isEdit: boolean,
    ) {}
}
export const StudentInfoColumns = [
    {
        key: 'isSelected',
        type: 'isSelected',
        label: '',
    },
    {
        key: 'b64ImageSrc',
        type: 'image',
        label: 'Identité',
    },
    {
        key: 'numEtudiant',
        type: 'number',
        label: 'Numéro Etudiant',
    },
    {
        key: 'allName',
        type: 'text',
        label: 'Noms et Prénoms',
        required: true,
    },
    {
        key: 'email',
        type: 'email',
        label: 'Email',
        required: true,
        pattern: '.+@.+',
    },
    {
        key: 'birthDate',
        type: 'date',
        label: 'Date de naissance',
    },
    {
        key: 'tel',
        type: 'text',
        label: 'Téléphone',
    },
    {
        key: 'addrPostal',
        type: 'text',
        label: 'Adresse Postale',
    },
    {
        key: 'isEdit',
        type: 'isEdit',
        label: '',
    },
];
