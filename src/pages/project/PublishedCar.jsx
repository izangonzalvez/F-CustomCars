import { Link } from 'react-router-dom';
import { Footer } from "@/widgets/layout";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { listCars,  deleteCar as deleteCarAction } from '@/slices/car/thunks';

export function PublishedCar() {
  const { userId, authToken } = useSelector(state => state.auth);
  const { cars } = useSelector(state => state.cars);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(listCars(authToken));
  }, []);

  const deleteCar = (carId) => {
    dispatch(deleteCarAction(carId, authToken));
    dispatch(listCars(userId, authToken));
  };

  return (
    <>
      <section className="relative block h-[18vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8">Proyectos Publicados</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars ? (
            cars.map(car => (
              car.post && (
                <div key={car.id} className="bo rder rounded-lg shadow-md p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  <div className="flex flex-col">
                    <div className="text-lg font-semibold mb-2">{car.name}</div>
                    <div className="flex flex-col gap-2">
                      <div><span className="font-semibold">Color:</span> {car.color}</div>
                      <div><span className="font-semibold">Bozina:</span> {car.horn}</div>
                      <div><span className="font-semibold">Llanta:</span> {car.wheel.name}</div>
                      <div><span className="font-semibold">Motor:</span> {car.engine.name}</div>
                      <div><span className="font-semibold">Suspensión:</span> {car.suspension.name}</div>
                      <div><span className="font-semibold">Frenos:</span> {car.brake.name}</div>
                      <div><span className="font-semibold">Escape:</span> {car.exhaustpipe.type}</div>
                      <div><span className="font-semibold">Faros:</span> {car.light.name}</div>
                      <div><span className="font-semibold">Alerón:</span> {car.spoiler.type}</div>
                      <div><span className="font-semibold">Taloneras:</span> {car.sideskirt.material}</div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-4">
                    <Link to={`/project/${car.id}`} className="text-cyan-600">👁️</Link>
                    <button onClick={() => deleteCar(car.id)} className="text-red-600">Despublicar</button>
                  </div>
                </div>
              )
            ))
          ) : (
            <p className="text-center">Cargando...</p>
          )}
        </div>
      </div>
      <br/><br/>
      <div className="fixed bottom-0 left-0 right-0">
        <Footer />
      </div>
    </>
  );
}

export default PublishedCar;