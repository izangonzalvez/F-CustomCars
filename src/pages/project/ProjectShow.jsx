import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { showCars } from '@/slices/car/thunks';
import { Footer } from "@/widgets/layout";

export function ProjectShow() {
  const { projectId } = useParams();
  const { authToken } = useSelector(state => state.auth);
  const { car, isLoading } = useSelector(state => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showCars(projectId, authToken));
  }, [dispatch, projectId, authToken]);

  // Verificar el objeto car y el estado de carga
  console.log("Car object:", car);
  console.log("isLoading:", isLoading);

  return (
    <>
      <section className="relative block h-[18vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8">Detalles del Proyecto</h1>
        {isLoading ? (
          <p>Cargando...</p>
        ) : car ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="bg-white divide-y divide-gray-200">
                <TableRow title="Nombre" value={car.name} />
                <TableRow title="Color" value={car.color} />
                <TableRow title="Bozina" value={car.horn} />
                <TableRowGroup title="Llanta">
                  <TableRow title="Nombre" value={car.wheel.name} />
                  <TableRow title="Tipo" value={car.wheel.type} />
                  <TableRow title="Pulgadas" value={car.wheel.inch} />
                </TableRowGroup>
                <TableRowGroup title="Motor">
                  <TableRow title="Nombre" value={car.engine.name} />
                  <TableRow title="Potencia" value={car.engine.power} />
                  <TableRow title="Revoluciones" value={car.engine.revolutions} />
                  <TableRow title="Combustible" value={car.engine.fuel} />
                </TableRowGroup>
                <TableRowGroup title="Suspensión">
                  <TableRow title="Nombre" value={car.suspension.name} />
                  <TableRow title="Tipo" value={car.suspension.type} />
                </TableRowGroup>
                <TableRowGroup title="Frenos">
                  <TableRow title="Nombre" value={car.brake.name} />
                  <TableRow title="Estilo" value={car.brake.style} />
                  <TableRow title="Modelo" value={car.brake.model} />
                </TableRowGroup>
                <TableRowGroup title="Escape">
                  <TableRow title="Tipo" value={car.exhaustpipe.type} />
                  <TableRow title="Tamaño" value={car.exhaustpipe.size} />
                </TableRowGroup>
                <TableRowGroup title="Faros">
                  <TableRow title="Nombre" value={car.light.name} />
                  <TableRow title="Tipo" value={car.light.type} />
                  <TableRow title="Color" value={car.light.color} />
                </TableRowGroup>
                <TableRowGroup title="Alerón">
                  <TableRow title="Tipo" value={car.spoiler.type} />
                  <TableRow title="Tamaño" value={car.spoiler.size} />
                  <TableRow title="Material" value={car.spoiler.material} />
                </TableRowGroup>
                <TableRowGroup title="Taloneras">
                  <TableRow title="Material" value={car.sideskirt.material} />
                  <TableRow title="Tamaño" value={car.sideskirt.size} />
                </TableRowGroup>
              </tbody>
            </table>
          </div>
        ) : (
          <p>No se encontraron detalles del proyecto.</p>
        )}
      </div>
      {/* <div className="bg-white fixed bottom-0 left-0 right-0">
        <Footer />
      </div> */}
    </>
  );
}

const TableRow = ({ title, value }) => (
  <tr>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{title}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{value}</td>
  </tr>
);

const TableRowGroup = ({ title, children }) => (
  <tr>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{title}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      <table>
        <tbody>{children}</tbody>
      </table>
    </td>
  </tr>
);

export default ProjectShow;
