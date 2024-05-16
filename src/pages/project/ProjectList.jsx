import { Link } from 'react-router-dom';
import { Footer } from "@/widgets/layout";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { listCars, deleteCar as deleteCarAction, publishCar as publishCarAction } from '@/slices/car/thunks';
import FloatingChatButton from '../chat/FloatingChatButton';

export function ProjectList() {
  const [deleteStatus, setDeleteStatus] = useState(null);
  const { authToken } = useSelector(state => state.auth);
  const { cars } = useSelector(state => state.cars);
  const dispatch = useDispatch();
  const email = localStorage.getItem("user");
  const isLoggedIn = authToken !== null;

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(listCars(authToken, email));
    }
  }, [authToken, email, isLoggedIn]);

  const deleteCar = async (carId) => {
    setDeleteStatus('eliminando');
    setTimeout(async () => {
      await dispatch(deleteCarAction(carId, authToken));
      await dispatch(listCars(authToken, email));
      setDeleteStatus('eliminado');
      setTimeout(() => setDeleteStatus(null), 2000);
    }, 2000);
  };

  const publishCar = (carId, post) => {
    dispatch(publishCarAction(carId, authToken, post));
    dispatch(listCars(authToken, email));
  }

  return (
    <>
      <div className="container mx-auto py-12">
        {isLoggedIn ? (
          <>
            <h1 className="text-3xl font-bold mb-8">Mis Proyectos</h1>
            <div className="mb-8">
              <Link to="/projectAdd">
                <button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded-full shadow-lg">
                  Crear Proyecto
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cars ? (
                cars.map(car => (
                  <div key={car.id} className="border rounded-lg shadow-md p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-white relative">
                    <div className="flex flex-col">
                      <div className="text-lg font-semibold mb-2">{car.name}</div>
                      <hr className="my-4 border-t border-gray-300" />
                      <div className="flex flex-col gap-2">
                        <div><span className="font-semibold">Color:</span> {car.color}</div>
                        <div><span className="font-semibold">Bocina:</span> {car.horn}</div>
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
                      <div className="flex items-center space-x-2">
                        <Link to={`/project/${car.id}`} className="text-cyan-600">👁️</Link>
                        <Link to={`/project/${car.id}/edit`} className="text-yellow-600">🖊️</Link>
                        <button onClick={() => deleteCar(car.id)} className="text-red-600">🗑️</button>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button onClick={() => publishCar(car.id, !car.post)} className={car.post ? 'text-green-600' : 'text-red-600'}>{car.post ? 'Publicado' : 'Publicar'}</button>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-b-lg"></div>
                  </div>
                ))
              ) : (
                <p className="text-center">Cargando...</p>
              )}
            </div>
          </>
        ) : (
          <div className="text-center text-gray-600">
            <p className="text-3xl mb-4">🔒</p>
            <p>Contenido solo para gente registrada</p>
          </div>
        )}
      </div>
      {deleteStatus && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white p-8 rounded-lg shadow-lg flex items-center justify-center">
            {deleteStatus === 'eliminando' ? (
              <>
                <div className="animate-spin h-10 w-10 border-t-2 border-b-2 border-green-600 rounded-full mr-4"></div>
                <div>Eliminando proyecto...</div>
              </>
            ) : (
              <>
                <div className="text-green-600 mr-4">✓</div>
                <div>Proyecto eliminado</div>
              </>
            )}
          </div>
        </div>
      )}
      <FloatingChatButton />
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default ProjectList;
