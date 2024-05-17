import { Link } from 'react-router-dom';
import { Footer } from "@/widgets/layout";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { listCars, deleteCar as deleteCarAction, publishCar as publishCarAction } from '@/slices/car/thunks';
import FloatingChatButton from '../chat/FloatingChatButton';
import { Transition } from '@headlessui/react';

export function ProjectList() {
  const [deleteStatus, setDeleteStatus] = useState(null);
  const [expandedCars, setExpandedCars] = useState([]);
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
  };

  const toggleExpand = (carId) => {
    setExpandedCars((prevExpandedCars) =>
      prevExpandedCars.includes(carId)
        ? prevExpandedCars.filter(id => id !== carId)
        : [...prevExpandedCars, carId]
    );
  };

  return (
    <>
      <section className="relative block h-[18vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>
      <div className="container mx-auto py-12">
        {isLoggedIn ? (
          <>
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Mis Proyectos</h1>
            <div className="flex justify-center mb-8">
              <Link to="/projectAdd">
                <button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
                  Crear Proyecto
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {cars ? (
                cars.map(car => (
                  <div
                    key={car.id}
                    className="relative bg-white rounded-lg shadow-2xl transition-transform transform hover:scale-105 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-gray-800">{car.name}</div>
                        <div>
                          <button onClick={() => toggleExpand(car.id)} className="text-gray-800 hover:text-gray-500">
                            {expandedCars.includes(car.id) ? '⬆️' : '⬇️'}
                          </button>
                        </div>
                      </div>
                      <div className="text-gray-600">{car.color}</div>
                    </div>
                    <Transition
                      show={expandedCars.includes(car.id)}
                      enter="transition-all duration-500 ease-in-out"
                      enterFrom="max-h-0 overflow-hidden"
                      enterTo="max-h-screen overflow-visible"
                      leave="transition-all duration-500 ease-in-out"
                      leaveFrom="max-h-screen overflow-visible"
                      leaveTo="max-h-0 overflow-hidden"
                    >
                      <div className="p-6 bg-yellow-50 rounded-b-lg shadow-inner">
                        <div className="grid grid-cols-2 gap-4">
                          <div><span className="font-semibold text-gray-700">Bocina:</span> {car.horn}</div>
                          <div><span className="font-semibold text-gray-700">Llanta:</span> {car.wheel.name}</div>
                          <div><span className="font-semibold text-gray-700">Motor:</span> {car.engine.name}</div>
                          <div><span className="font-semibold text-gray-700">Suspensión:</span> {car.suspension.name}</div>
                          <div><span className="font-semibold text-gray-700">Frenos:</span> {car.brake.name}</div>
                          <div><span className="font-semibold text-gray-700">Escape:</span> {car.exhaustpipe.type}</div>
                          <div><span className="font-semibold text-gray-700">Faros:</span> {car.light.name}</div>
                          <div><span className="font-semibold text-gray-700">Alerón:</span> {car.spoiler.type}</div>
                          <div><span className="font-semibold text-gray-700">Taloneras:</span> {car.sideskirt.material}</div>
                        </div>
                        <div className="flex justify-between mt-4">
                          <div className="flex items-center space-x-2">
                            <Link to={`/project/${car.id}`} className="text-cyan-600 hover:text-cyan-400">👁️</Link>
                            <Link to={`/project/${car.id}/edit`} className="text-yellow-600 hover:text-yellow-400">🖊️</Link>
                            <button onClick={() => deleteCar(car.id)} className="text-red-600 hover:text-red-400">🗑️</button>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button onClick={() => publishCar(car.id, !car.post)} className={car.post ? 'text-green-600 hover:text-green-400' : 'text-red-600 hover:text-red-400'}>{car.post ? 'Publicado' : 'Publicar'}</button>
                          </div>
                        </div>
                      </div>
                    </Transition>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"></div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-800">Cargando...</p>
              )}
              {deleteStatus && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg flex items-center justify-center">
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
      <FloatingChatButton />
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default ProjectList;
