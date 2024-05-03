import { Link } from 'react-router-dom';
import { Footer } from "@/widgets/layout";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { listCars } from '@/slices/car/thunks';
import { setCars } from '@/slices/car/carSlices';

export function ProjectList() {

  
  const { usuari,authToken } = useSelector (state => state.auth)
  const { cars } = useSelector (state => state.cars);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listCars(authToken));
  }, [])

  // const projects = [

  //   { 
  //     id: 1, name: 'Proyecto 1', color: 'Azul', bozina: 'Bosch', llanta: 'Pirelli', motor: 'V8', suspension: 'Deportiva', frenos: 'Brembo', escape: 'Akrapovic', faros: 'LED', aleron: 'Carbono', taloneras: 'Fibra de vidrio', author: 'Autor 1' 
  //   },
  //   { 
  //     id: 2, name: 'Proyecto 2', color: 'Rojo', bozina: 'Sony', llanta: 'Michelin', motor: 'V6', suspension: 'Normal', frenos: 'EBC', escape: 'Remus', faros: 'Xenon', aleron: 'Aluminio', taloneras: 'Plástico', author: 'Autor 2' 
  //   },

  // ];

  return (
    <>
      <section className="relative block h-[18vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8">Mis Proyectos</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Nombre</th>
                <th className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Color</th>
                <th className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Bozina</th>
                <th className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Llanta</th>
                <th className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Motor</th>
                <th className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Suspensión</th>
                <th className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Frenos</th>
                <th className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Escape</th>
                <th className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Faros</th>
                <th className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Alerón</th>
                <th className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Taloneras</th>
                <th className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Autor</th>
                <th className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cars.map(car => (
                <tr key={car.id} className="border-b">
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{car.name}</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{car.color}</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{car.bozina}</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{car.llanta}</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{car.motor}</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{car.suspension}</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{car.frenos}</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{car.escape}</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{car.faros}</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{car.aleron}</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{car.taloneras}</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{car.author}</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <Link to={`/cars/${car.id}`} className="text-cyan-600">👁️</Link>
                    {/* Agrega los botones de edición y eliminación aquí */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-white fixed bottom-0 left-0 right-0">
        <Footer />
      </div>

    </>
  );
}

export default ProjectList;
