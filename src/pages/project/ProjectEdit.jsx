import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChromePicker } from 'react-color';
import { updateCar, listCars, showCars } from '@/slices/car/thunks';
import { listWheels } from '@/slices/wheel/thunks';
import { listEngines } from '@/slices/engine/thunks';
import { listSuspensions } from '@/slices/suspension/thunks';
import { listBrakes } from '@/slices/brake/thunks';
import { listExhaustpipes } from '@/slices/exhaustpipe/thunks';
import { listLights } from '@/slices/light/thunks';
import { listSpoilers } from '@/slices/spoiler/thunks';
import { listSideskirts } from '@/slices/sideskirt/thunks';
import { Footer } from '@/widgets/layout';
import { useNavigate, useParams } from 'react-router-dom';

function ProjectEdit() {
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const { authToken } = useSelector(state => state.auth);
  const wheels = useSelector(state => state.wheels.wheels);
  const engines = useSelector(state => state.engines.engines);
  const suspensions = useSelector(state => state.suspensions.suspensions);
  const brakes = useSelector(state => state.brakes.brakes);
  const exhaustpipes = useSelector(state => state.exhaustpipes.exhaustpipes);
  const lights = useSelector(state => state.lights.lights);
  const spoilers = useSelector(state => state.spoilers.spoilers);
  const sideskirts = useSelector(state => state.sideskirts.sideskirts);
  const email = localStorage.getItem('user');

  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [horn, setHorn] = useState('');
  const [wheel, setWheel] = useState('');
  const [engine, setEngine] = useState('');
  const [suspension, setSuspension] = useState('');
  const [brake, setBrake] = useState('');
  const [exhaustpipe, setExhaustpipe] = useState('');
  const [light, setLight] = useState('');
  const [spoiler, setSpoiler] = useState('');
  const [sideskirt, setSideskirt] = useState('');
  const navigate = useNavigate();
  const [showColorPicker, setShowColorPicker] = useState(false);

  const { car, isLoading } = useSelector(state => state.cars);

  useEffect(() => {
    dispatch(listWheels());
    dispatch(listEngines());
    dispatch(listSuspensions());
    dispatch(listBrakes());
    dispatch(listExhaustpipes());
    dispatch(listLights());
    dispatch(listSpoilers());
    dispatch(listSideskirts());
    dispatch(listCars(authToken));
    dispatch(showCars(projectId, authToken));
  }, [dispatch, authToken]);

  const handleChangeColor = (newColor) => {
    setColor(newColor.hex);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const carData = {
      name,
      color,
      horn,
      wheel,
      engine,
      suspension,
      brake,
      exhaustpipe,
      light,
      spoiler,
      sideskirt,
      email
    };

    try {
      carData.name ? "" : carData.name = car.name
      carData.color ? "" : carData.color = car.color
      carData.horn ? "" : carData.horn = car.horn
      carData.wheel ? "" : carData.wheel = car.wheel.id
      carData.engine ? "" : carData.engine = car.engine.id
      carData.suspension ? "" : carData.suspension = car.suspension.id
      carData.brake ? "" : carData.brake = car.brake.id
      carData.exhaustpipe ? "" : carData.exhaustpipe = car.exhaustpipe.id
      carData.light ? "" : carData.light = car.light.id
      carData.spoiler ? "" : carData.spoiler = car.spoiler.id
      carData.sideskirt ? "" : carData.sideskirt = car.sideskirt.id

      await dispatch(updateCar(projectId, carData, authToken));
      navigate("/project");
    } catch (error) {
      console.error('Failed to update car:', error.message);
    }
  };
  
  return (
    <>
      <section className="relative block h-[18vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8">Editar Proyecto</h1>
        {isLoading ? (
            <p>Cargando...</p>
          ) : car ? (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
              defaultValue={car.name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="color" className="block text-sm font-medium text-gray-700">
              Color
            </label>
            <div className="relative">
              <input
                type="text"
                id="color"
                name="color"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
                defaultValue={car.color}
                onChange={(e) => setColor(e.target.value)}
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <button
                  type="button"
                  className="text-gray-700 focus:outline-none focus:text-gray-600"
                  defaultValue={car.color}
                  onClick={() => setShowColorPicker(!showColorPicker)}
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M4 10a6 6 0 1112 0 6 6 0 01-12 0zm12-8a8 8 0 00-8 8c0 2.757 1.78 5.146 4.261 6.007l-1.408 2.112A1 1 0 008 18h4a1 1 0 00.147-1.993L11.739 16.1C14.22 15.247 16 12.858 16 10a8 8 0 00-8-8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {showColorPicker && (
                <div className="absolute top-10 z-10">
                  <ChromePicker
                    color={color}
                    onChange={handleChangeColor}
                  />
                </div>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="horn" className="block text-sm font-medium text-gray-700">
              Bocina
            </label>
            <input
              type="text"
              id="horn"
              name="horn"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
              defaultValue={car.horn}
              onChange={(e) => setHorn(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="wheel" className="block text-sm font-medium text-gray-700">
              Llanta
            </label>
            <select
              id="wheel"
              name="wheel"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
              defaultValue={car.wheel.id}
              onChange={(e) => setWheel(e.target.value)}
              required
            >
              <option value="">Seleccionar llanta</option>
              {wheels && wheels.map(wheel => <option key={wheel.id} value={wheel.id}>{wheel.name}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="engine" className="block text-sm font-medium text-gray-700">
              Motor
            </label>
            <select
              id="engine"
              name="engine"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
              defaultValue={car.engine.id}
              onChange={(e) => setEngine(e.target.value)}
              required
            >
              <option value="">Seleccionar motor</option>
              {engines && engines.map(engine => <option key={engine.id} value={engine.id} >{engine.name}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="suspension" className="block text-sm font-medium text-gray-700">
              Suspension
            </label>
            <select
              id="suspension"
              name="suspension"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
              defaultValue={car.suspension.id}
              onChange={(e) => setSuspension(e.target.value)}
              required
            >
              <option value="">Seleccionar suspension</option>
              {suspensions && suspensions.map(suspension => <option key={suspension.id} value={suspension.id}>{suspension.name}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="brake" className="block text-sm font-medium text-gray-700">
              Frenos
            </label>
            <select
              id="brake"
              name="brake"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
              defaultValue={car.brake.id}
              onChange={(e) => setBrake(e.target.value)}
              required
            >
              <option value="">Seleccionar frenos</option>
              {brakes && brakes.map(brake => <option key={brake.id} value={brake.id}>{brake.name}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="exhaustpipe" className="block text-sm font-medium text-gray-700">
              Escape
            </label>
            <select
              id="exhaustpipe"
              name="exhaustpipe"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
              defaultValue={car.exhaustpipe.id}
              onChange={(e) => setExhaustpipe(e.target.value)}
              required
            >
              <option value="">Seleccionar escape</option>
              {exhaustpipes && exhaustpipes.map(exhaustpipe => <option key={exhaustpipe.id} value={exhaustpipe.id}>{exhaustpipe.type}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="light" className="block text-sm font-medium text-gray-700">
              Faros
            </label>
            <select
              id="light"
              name="light"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
              defaultValue={car.light.id}
              onChange={(e) => setLight(e.target.value)}
              required
            >
              <option value="">Seleccionar faros</option>
              {lights && lights.map(light => <option key={light.id} value={light.id}>{light.name}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="spoiler" className="block text-sm font-medium text-gray-700">
              Alerón
            </label>
            <select
              id="spoiler"
              name="spoiler"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
              defaultValue={car.spoiler.id}
              onChange={(e) => setSpoiler(e.target.value)}
              required
            >
              <option value="">Seleccionar alerón</option>
              {spoilers && spoilers.map(spoiler => <option key={spoiler.id} value={spoiler.id}>{spoiler.type}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="sideskirt" className="block text-sm font-medium text-gray-700">
              Taloneras
            </label>
            <select
              id="sideskirt"
              name="sideskirt"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
              defaultValue={car.sideskirt.id}
              onChange={(e) => setSideskirt(e.target.value)}
              required
            >
              <option value="">Seleccionar taloneras</option>
              {sideskirts && sideskirts.map(sideskirt => <option key={sideskirt.id} value={sideskirt.id}>{sideskirt.material}</option>)}
            </select>
          </div>
          <button type="submit" className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded-full shadow-lg">
            Guardar Cambios
          </button>
        </form>
        ) : (
          <p>No se encontraron detalles del proyecto.</p>
        )}
      </div>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default ProjectEdit;
