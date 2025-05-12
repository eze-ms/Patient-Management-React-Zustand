import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Error from './Error';
import type { DraftPatient } from '../types';
import { usePatientStore } from '../store';
import { calculateAge } from '../utils'


export default function PatientForm() {

    const { addPatient, activeId, patients, updatePatient } = usePatientStore()

    const { register, handleSubmit, setValue, formState: {errors}, reset } = useForm<DraftPatient>();
    //setValue permite setear un valor por default al formulario
    
    useEffect (() => {
        if(activeId) {
            const activePatient = patients.filter(patient => patient.id === activeId)[0]
            setValue('name', activePatient.name)
            setValue('lastname', activePatient.lastname)
            setValue('dbirth', activePatient.dbirth)
            setValue('email', activePatient.email)
            setValue('alta', activePatient.alta)
            setValue('symptoms', activePatient.symptoms)     
        }
    }, [activeId, setValue, patients])

    const registerPatient = (data: DraftPatient) => {
        const birthDate = new Date(data.dbirth);
        const age = calculateAge(birthDate);

        if(activeId) {
            updatePatient({ ...data, age });
            toast.success('Paciente actualizado correctamente', {
                position: "bottom-left"
            });
        } else {
            addPatient({ ...data, age });
            toast.success('Paciente registrado correctamente', {
                position: "bottom-left"
            });
        }

        reset()
    }


    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-medium text-white text-3xl text-center mb-5">
                Añade pacientes y {''}
                <span className='text-pinkTail font-bold'>adminístralos</span>
            </h2>

            <form
                className="shadow-md rounded-lg py-10 px-5 mb-10 border-2 border-borderForm my-10"
                onSubmit={handleSubmit(registerPatient)}
            >
                <div className="mb-5 space-y-2">
                    <label htmlFor="name" className="text-sm uppercase font-bold text-white">
                        Nombre 
                    </label>
                    <input
                        id="name"
                        className="block w-full px-3 py-3 rounded-md border-2 border-white shadow-sm focus:outline-none focus:border-pinkTail focus:ring-pinkTail hover:border-pinkTail placeholder-gray-400 placeholder-opacity-75 tracking-wide"
                        type="text"
                        placeholder="Nombre"
                        {...register('name', {
                            required: '¡El nombre es obligatorio!',
                        })}
                    />
                    {errors.name && (
                        <Error>{errors.name?.message}</Error>
                    )}  
                </div>

                <div className="mb-5 space-y-2">
                    <label htmlFor="lastname" className="text-sm uppercase font-bold text-white">
                        Apellidos 
                    </label>
                    <input
                        id="lastname"
                        className="block w-full px-3 py-3 rounded-md border-2 border-white shadow-sm focus:outline-none focus:border-pinkTail focus:ring-pinkTail hover:border-pinkTail placeholder-gray-400 placeholder-opacity-75 tracking-wide"
                        type="text"
                        placeholder="Apellidos"
                        {...register('lastname', {
                            required: '¡El apellido es obligatorio!',
                        })}
                    />
                    {errors.lastname && (
                        <Error>{errors.lastname?.message}</Error>
                    )}  
                </div>

                <div className="mb-5 space-y-2">
                    <label htmlFor="dbirth" className="text-sm uppercase font-bold text-white">
                        Fecha de nacimiento 
                    </label>
                    <input
                        id="dbirth"
                        className="block w-full px-3 py-3 rounded-md border-2 border-white shadow-sm focus:outline-none focus:border-pinkTail focus:ring-pinkTail hover:border-pinkTail placeholder-gray-400 placeholder-opacity-75 tracking-wide"
                        type="date"
                        {...register('dbirth', {
                            required: '¡La fecha de nacimiento es obligatoria!',
                        })}
                    />
                    {errors.dbirth && (
                        <Error>{errors.dbirth?.message}</Error>
                    )}
                </div>

                <div className="mb-5 space-y-2">
                    <label htmlFor="email" className="text-sm uppercase font-bold text-white">
                        Email 
                    </label>
                    <input
                        id="email"
                        className="block w-full px-3 py-3 rounded-md border-2 border-white shadow-sm focus:outline-none focus:border-pinkTail focus:ring-pinkTail hover:border-pinkTail placeholder-gray-400 placeholder-opacity-75 tracking-wide"
                        type="email"
                        placeholder="Email"
                        {...register("email", {
                            required: "¡El email es obligatorio!",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Email No Válido'
                            }
                        })} 
                    />
                    {errors.email && (
                        <Error>{errors.email?.message}</Error>
                    )}
                </div>

                <div className="mb-5 space-y-2">
                    <label htmlFor="alta" className="text-sm uppercase font-bold text-white">
                        Alta 
                    </label>
                    <input
                        id="alta"
                        className="block w-full px-3 py-3 rounded-md border-2 border-white shadow-sm focus:outline-none focus:border-pinkTail focus:ring-pinkTail hover:border-pinkTail placeholder-gray-400 placeholder-opacity-75 tracking-wide"
                        type="date"
                        {...register('alta', {
                            required: '¡La fecha de alta es obligatoria!',
                        })}
                    />
                    {errors.alta && (
                        <Error>{errors.alta?.message}</Error>
                    )}           
                </div>

                <div className="mb-5 space-y-2">
                    <label htmlFor="symptoms" className="text-sm uppercase font-bold text-white">
                        Síntomas 
                    </label>
                    <textarea
                        id="symptoms"
                        className="block w-full px-3 py-3 rounded-md border-2 border-white shadow-sm focus:outline-none focus:border-pinkTail focus:ring-pinkTail hover:border-pinkTail placeholder-gray-400 placeholder-opacity-75 tracking-wide"
                        placeholder="Motivo de consulta o síntomas del paciente"
                        {...register('symptoms', {
                            required: '¡El campo es obligatorio!!',
                        })}
                    />
                    {errors.symptoms && (
                        <Error>{errors.symptoms?.message}</Error>
                    )}
                </div>

                <input
                    type="submit"
                    className="bg-pinkTail font-medium w-full p-3 rounded-lg text-white uppercase border-2 border-pinkTail hover:bg-background cursor-pointer transition-colors"
                    value="Guardar Paciente"
                />
            </form>
        </div>
    );
}
