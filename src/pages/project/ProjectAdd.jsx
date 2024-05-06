import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createCar } from '@/slices/car/thunks';
import { listWheels } from '@/slices/wheel/thunks';
import { listEngines } from '@/slices/engine/thunks';
import { listSuspensions } from '@/slices/suspension/thunks';
import { listBrakes } from '@/slices/brake/thunks';
import { listExhaustpipes } from '@/slices/exhaustpipe/thunks';
import { listLights } from '@/slices/light/thunks';
import { listSpoilers } from '@/slices/spoiler/thunks';
import { listSideskirts } from '@/slices/sideskirt/thunks';
import { Footer } from '@/widgets/layout';

export function ProjectAdd({ wheels, engines, suspensions, brakes, exhaustpipes, lights, spoilers, sideskirts }) {
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(listWheels());
    dispatch(listEngines());
    dispatch(listSuspensions());
    dispatch(listBrakes());
    dispatch(listExhaustpipes());
    dispatch(listLights());
    dispatch(listSpoilers());
    dispatch(listSideskirts());
  }, [dispatch]);

  useEffect(() => {
    console.log("Wheels:", wheels);
    console.log("Engines:", engines);
    console.log("Suspensions:", suspensions);
    console.log("Brakes:", brakes);
    console.log("Exhaustpipes:", exhaustpipes);
    console.log("Lights:", lights);
    console.log("Spoilers:", spoilers);
    console.log("Sideskirts:", sideskirts);
  }, [wheels, engines, suspensions, brakes, exhaustpipes, lights, spoilers, sideskirts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, color, horn, wheel, engine, suspension, brake, exhaustpipe, light, spoiler, sideskirt });
    dispatch(createCar({ name, color, horn, wheel, engine, suspension, brake, exhaustpipe, light, spoiler, sideskirt }));
  };

  return (
    <>
      <section className="relative block h-[18vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8">Crear Proyecto</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-sm text-gray-900 font-light">Nombre:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="input" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-900 font-light">Color:</label>
            <input type="text" value={color} onChange={(e) => setColor(e.target.value)} className="input" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-900 font-light">Bozina:</label>
            <input type="text" value={horn} onChange={(e) => setHorn(e.target.value)} className="input" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-900 font-light">Llanta:</label>
            <select value={wheel} onChange={(e) => setWheel(e.target.value)} className="input">
              <option value="">Seleccionar llanta</option>
              {wheels && wheels.map(wheel => <option key={wheel.id} value={wheel.id}>{wheel.name}</option>)}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-900 font-light">Motor:</label>
            <select value={engine} onChange={(e) => setEngine(e.target.value)} className="input">
              <option value="">Seleccionar motor</option>
              {engines && engines.map(engine => <option key={engine.id} value={engine.id}>{engine.name}</option>)}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-900 font-light">Suspensión:</label>
            <select value={suspension} onChange={(e) => setSuspension(e.target.value)} className="input">
              <option value="">Seleccionar suspensión</option>
              {suspensions && suspensions.map(suspension => <option key={suspension.id} value={suspension.id}>{suspension.name}</option>)}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-900 font-light">Frenos:</label>
            <select value={brake} onChange={(e) => setBrake(e.target.value)} className="input">
              <option value="">Seleccionar frenos</option>
              {brakes && brakes.map(brake => <option key={brake.id} value={brake.id}>{brake.name}</option>)}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-900 font-light">Escape:</label>
            <select value={exhaustpipe} onChange={(e) => setExhaustpipe(e.target.value)} className="input">
              <option value="">Seleccionar escape</option>
              {exhaustpipes && exhaustpipes.map(exhaustpipe => <option key={exhaustpipe.id} value={exhaustpipe.id}>{exhaustpipe.type}</option>)}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-900 font-light">Faros:</label>
            <select value={light} onChange={(e) => setLight(e.target.value)} className="input">
              <option value="">Seleccionar faros</option>
              {lights && lights.map(light => <option key={light.id} value={light.id}>{light.name}</option>)}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-900 font-light">Alerón:</label>
            <select value={spoiler} onChange={(e) => setSpoiler(e.target.value)} className="input">
              <option value="">Seleccionar alerón</option>
              {spoilers && spoilers.map(spoiler => <option key={spoiler.id} value={spoiler.id}>{spoiler.type}</option>)}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-900 font-light">Taloneras:</label>
            <select value={sideskirt} onChange={(e) => setSideskirt(e.target.value)} className="input">
              <option value="">Seleccionar taloneras</option>
              {sideskirts && sideskirts.map(sideskirt => <option key={sideskirt.id} value={sideskirt.id}>{sideskirt.material}</option>)}
            </select>
          </div>
          <button type="submit" className="btn">Crear Proyecto</button>
        </form>
      </div>
      <div className="bg-white fixed bottom-0 left-0 right-0">
        <Footer />
      </div>
    </>
  );
}

export default ProjectAdd;
