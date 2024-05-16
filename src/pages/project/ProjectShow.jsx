import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { showCars } from '@/slices/car/thunks';
import { Footer } from "@/widgets/layout";
import PDFButton from './PDFButton';
import PaypalButton from './PayPalButton';

export function ProjectShow() {
  const { projectId } = useParams();
  const { authToken } = useSelector(state => state.auth);
  const { car, isLoading, totalPrice } = useSelector(state => state.cars);
  const dispatch = useDispatch();

  const [order, setOrder] = useState(null);
  const [isOrderVisible, setIsOrderVisible] = useState(false);

  useEffect(() => {
    dispatch(showCars(projectId, authToken));
  }, [dispatch, projectId, authToken]);

  const handleOrderCapture = (capturedOrder) => {
    setOrder(capturedOrder);
    setIsOrderVisible(true);
    console.log("Captured order details:", capturedOrder);
  };

  const handleCloseAlert = () => {
    setIsOrderVisible(false);
  };

  console.log("Car object:", car);
  console.log("isLoading:", isLoading);

  return (
    <>
      <header>
        <section className="relative block h-[18vh]">
          <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105 " />
          <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        </section>
      </header>
      <div className="container mx-auto py-12 flex">
        <div className="w-1/2 pr-4 overflow-y-auto">
          <h1 className="text-3xl font-bold mb-8">Detalles del Proyecto</h1>
          {!isLoading && car && <PDFButton car={car} />}
          <br/><br/>
          {isLoading ? (
            <p>Cargando...</p>
          ) : car ? (
            <>
              <PaypalButton 
                totalValue={totalPrice} 
                invoice={'Presupuesto'} 
                onOrderCapture={handleOrderCapture} 
              />
              {isOrderVisible && order && order.status === "COMPLETED" && (
                <div className="relative bg-green-100 p-4 rounded-md mt-6 shadow-md border border-green-200">
                  <button
                    className="absolute top-2 right-2 text-green-800 font-bold"
                    onClick={handleCloseAlert}
                  >
                    ×
                  </button>
                  <h2 className="text-xl font-bold mb-2 text-green-800">Detalles de la Compra</h2>
                  <p className="text-green-700"><strong>Nombre:</strong> {order.payer.name.given_name} {order.payer.name.surname}</p>
                  <p className="text-green-700"><strong>Correo:</strong> {order.payer.email_address}</p>
                  <p className="text-green-700"><strong>ID:</strong> {order.id}</p>
                  <p className="text-green-700"><strong>Monto:</strong> {order.purchase_units[0].amount.value} {order.purchase_units[0].amount.currency_code}</p>
                </div>
              )}
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="bg-white divide-y divide-gray-200">
                  <TableRow title="Nombre" value={car.name} />
                  <TableRow title="Color" value={car.color} />
                  <TableRow title="Bozina" value={car.horn} />
                  <TableRowGroup title="Llanta">
                    <TableRow title="Nombre" value={car.wheel.name} />
                    <TableRow title="Tipo" value={car.wheel.type} />
                    <TableRow title="Pulgadas" value={car.wheel.inch} />
                    <TableRow title="Precio" value={car.wheel.price + "€"} />
                  </TableRowGroup>
                  <TableRowGroup title="Motor">
                    <TableRow title="Nombre" value={car.engine.name} />
                    <TableRow title="Potencia" value={car.engine.power} />
                    <TableRow title="Revoluciones" value={car.engine.revolutions} />
                    <TableRow title="Combustible" value={car.engine.fuel} />
                    <TableRow title="Precio" value={car.engine.price + "€"} />
                  </TableRowGroup>
                  <TableRowGroup title="Suspensión">
                    <TableRow title="Nombre" value={car.suspension.name} />
                    <TableRow title="Tipo" value={car.suspension.type} />
                    <TableRow title="Precio" value={car.suspension.price + "€"} />
                  </TableRowGroup>
                  <TableRowGroup title="Frenos">
                    <TableRow title="Nombre" value={car.brake.name} />
                    <TableRow title="Estilo" value={car.brake.style} />
                    <TableRow title="Modelo" value={car.brake.model} />
                    <TableRow title="Precio" value={car.brake.price + "€"} />
                  </TableRowGroup>
                  <TableRowGroup title="Escape">
                    <TableRow title="Tipo" value={car.exhaustpipe.type} />
                    <TableRow title="Tamaño" value={car.exhaustpipe.size} />
                    <TableRow title="Precio" value={car.exhaustpipe.price + "€"} />
                  </TableRowGroup>
                  <TableRowGroup title="Faros">
                    <TableRow title="Nombre" value={car.light.name} />
                    <TableRow title="Tipo" value={car.light.type} />
                    <TableRow title="Color" value={car.light.color} />
                    <TableRow title="Precio" value={car.light.price + "€"} />
                  </TableRowGroup>
                  <TableRowGroup title="Alerón">
                    <TableRow title="Tipo" value={car.spoiler.type} />
                    <TableRow title="Tamaño" value={car.spoiler.size} />
                    <TableRow title="Material" value={car.spoiler.material} />
                    <TableRow title="Precio" value={car.spoiler.price + "€"} />
                  </TableRowGroup>
                  <TableRowGroup title="Taloneras">
                    <TableRow title="Material" value={car.sideskirt.material} />
                    <TableRow title="Tamaño" value={car.sideskirt.size} />
                    <TableRow title="Tamaño" value={car.sideskirt.size} />
                    <TableRow title="Precio" value={car.sideskirt.price + "€"} />
                  </TableRowGroup> 
                </tbody>
              </table>
            </>
          ) : (
            <p>No se encontraron detalles del proyecto.</p>
          )}
        </div>
        <div className="w-1/2 flex justify-center items-center">
          {car && (
            <img src={car.photoUrl} alt="Foto del coche" className="max-w-full max-h-full object-cover" />
          )}
        </div>
      </div>
      <footer className="bg-white">
        <Footer />
      </footer>
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
