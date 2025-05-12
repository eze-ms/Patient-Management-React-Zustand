import { toast } from 'react-toastify';
import { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";
import { calculateAge } from '../utils';
import { usePatientStore } from "../store";

type PatientDetailsProps = {
    patient: Patient;
};

export default function PatientsDetails({ patient }: PatientDetailsProps) {

    const age = calculateAge(new Date(patient.dbirth));

    const { deletePatient, getPatientById } = usePatientStore()

    const handleClick = () => {
        deletePatient(patient.id)
        toast('Paciente eliminado', {
            type: 'error',
            position: "bottom-left"
        })
    }

    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailItem label="ID" data={patient.id} />
            <PatientDetailItem label="Nombre" data={patient.name} />
            <PatientDetailItem label="Apellidos" data={patient.lastname} />
            <PatientDetailItem label="Edad" data={age.toString()} />
            <PatientDetailItem label="Email" data={patient.email} />
            <PatientDetailItem label="Síntomas" data={patient.symptoms} />

            <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-purple-700 hover:bg-purple-800 text-white font-bold uppercase rounded-lg"
                    onClick={() => getPatientById(patient.id)}
                >
                  Editar
                </button>
                <button
                    type="button"
                    className="py-2 px-10 bg-pinkTail hover:bg-pink-700 text-white font-bold uppercase rounded-lg"
                    onClick={handleClick}
                >
                  Eliminar
                </button>
            </div>
        </div>
    );
}
