import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChromePicker } from 'react-color';
import { createCar, listCars } from '@/slices/car/thunks';
import { listWheels } from '@/slices/wheel/thunks';
import { listEngines } from '@/slices/engine/thunks';
import { listSuspensions } from '@/slices/suspension/thunks';
import { listBrakes } from '@/slices/brake/thunks';
import { listExhaustpipes } from '@/slices/exhaustpipe/thunks';
import { listLights } from '@/slices/light/thunks';
import { listSpoilers } from '@/slices/spoiler/thunks';
import { listSideskirts } from '@/slices/sideskirt/thunks';
import { Footer } from '@/widgets/layout';
import { useNavigate } from 'react-router-dom';

export function ProjectAdd() {
  const dispatch = useDispatch();
  const post = 0;
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

  const handleChangeColor = (newColor) => {
    setColor(newColor.hex);
  };

  useEffect(() => {
    dispatch(listWheels());
    dispatch(listEngines());
    dispatch(listSuspensions());
    dispatch(listBrakes());
    dispatch(listExhaustpipes());
    dispatch(listLights());
    dispatch(listSpoilers());
    dispatch(listSideskirts());
    dispatch(listCars(authToken, email));
  }, [dispatch, authToken, email]);

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
      post,
      email
    };

    try {
      const response = await dispatch(createCar(carData));
      if (response) {
        console.log('Car created successfully!');
        navigate("/project");
      } else {
        console.error('Failed to create car:', response);
      }
    } catch (error) {
      console.error('Failed to create car:', error.message);
    }
  };

  return (
    <>
      <section className="relative block h-[18vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">Crear Proyecto</h1>
        <form className="bg-white rounded-lg shadow-lg p-8 space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-sm text-gray-900 font-medium">Nombre:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-900 font-medium">Color:</label>
            <div className="relative">
              <input
                type="text"
                value={color}
                onClick={() => setShowColorPicker(!showColorPicker)}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              {showColorPicker && (
                <div className="absolute top-[calc(100%+5px)] left-0 z-10">
                  <ChromePicker color={color} onChange={handleChangeColor} />
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-900 font-medium">Bozina:</label>
            <input
              type="text"
              value={horn}
              onChange={(e) => setHorn(e.target.value)}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-900 font-medium">Llanta:</label>
            <select
              value={wheel}
              onChange={(e) => setWheel(e.target.value)}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="">Seleccionar llanta</option>
              {wheels && wheels.map(wheel => <option key={wheel.id} value={wheel.id}>{wheel.name}</option>)}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-900 font-medium">Motor:</label>
            <select
              value={engine}
              onChange={(e) => setEngine(e.target.value)}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="">Seleccionar motor</option>
              {engines && engines.map(engine => <option key={engine.id} value={engine.id}>{engine.name}</option>)}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-900 font-medium">Suspensión:</label>
            <select
              value={suspension}
              onChange={(e) => setSuspension(e.target.value)}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="">Seleccionar suspensión</option>
              {suspensions && suspensions.map(suspension => <option key={suspension.id} value={suspension.id}>{suspension.name}</option>)}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-900 font-medium">Frenos:</label>
            <select
              value={brake}
              onChange={(e) => setBrake(e.target.value)}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="">Seleccionar frenos</option>
              {brakes && brakes.map(brake => <option key={brake.id} value={brake.id}>{brake.name}</option>)}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-900 font-medium">Escape:</label>
            <select
              value={exhaustpipe}
              onChange={(e) => setExhaustpipe(e.target.value)}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="">Seleccionar escape</option>
              {exhaustpipes && exhaustpipes.map(exhaustpipe => <option key={exhaustpipe.id} value={exhaustpipe.id}>{exhaustpipe.type}</option>)}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-900 font-medium">Faros:</label>
            <select
              value={light}
              onChange={(e) => setLight(e.target.value)}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="">Seleccionar faros</option>
              {lights && lights.map(light => <option key={light.id} value={light.id}>{light.name}</option>)}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-900 font-medium">Alerón:</label>
            <select
              value={spoiler}
              onChange={(e) => setSpoiler(e.target.value)}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="">Seleccionar alerón</option>
              {spoilers && spoilers.map(spoiler => <option key={spoiler.id} value={spoiler.id}>{spoiler.type}</option>)}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-900 font-medium">Taloneras:</label>
            <select
              value={sideskirt}
              onChange={(e) => setSideskirt(e.target.value)}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="">Seleccionar taloneras</option>
              {sideskirts && sideskirts.map(sideskirt => <option key={sideskirt.id} value={sideskirt.id}>{sideskirt.material}</option>)}
            </select>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Crear Proyecto
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default ProjectAdd;
