import { ToastContainer} from "react-toastify";
import PatientForm from "./components/PatientForm"
import PatientList from "./components/PatientList"
import 'react-toastify/dist/ReactToastify.css'

function App() {
 

  return (
    <>
      <div className="container mx-auto mt-10">
        <h1 className="font-black text-white py-5 mb-10 text-5xl text-center md:w-2/4 md:mx-auto tracking-wider border-b border-pinkTail">
          Seguimiento de Pacientes {''}
          {/* <span className=""></span> */}
        </h1>

        <div className="mt-12 md:flex">
          <PatientForm/>
          <PatientList/>
        </div>
      </div>
      <ToastContainer/>
    </>
  )
}

export default App
