export type Patient = {
    id: string;
    name: string;
    lastname: string;
    dbirth: Date;
    email: string;
    alta: Date;
    symptoms: string;
    age: number
}

export type DraftPatient = Omit<Patient, 'id'>;
