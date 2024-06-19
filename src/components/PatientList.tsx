import { usePatientStore } from "../store"
import PatientsDetails from "./PatientsDetails"

export default function PatientList() {

  const { patients } = usePatientStore()
  
  
  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>
          <h2 className="font-medium text-white text-3xl text-center mb-5">
            Administra tus {''}
            <span className="text-pinkTail font-bold ">pacientes y visitas</span>
          </h2>
          {patients.map( patient => (
            <PatientsDetails
              key={patient.id}
              patient={patient}

            />
          ) )}
        </>
       
      ) : (
        <>
          <h2 className="font-medium text-white text-3xl text-center">No hay pacientes</h2>
          <p className="text-lg text-white mt-5 mb-10 text-center">
            Comienza agregando pacientes {''}
            <span className="text-pinkTail font-bold ">y aparecerán es este lugar</span>
          </p>
        </>
      )}
    </div>
  )
}
