// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { ChromePicker } from 'react-color';
// import { updateCar, getCarById } from '@/slices/car/thunks';
// import { listWheels } from '@/slices/wheel/thunks';
// import { listEngines } from '@/slices/engine/thunks';
// import { listSuspensions } from '@/slices/suspension/thunks';
// import { listBrakes } from '@/slices/brake/thunks';
// import { listExhaustpipes } from '@/slices/exhaustpipe/thunks';
// import { listLights } from '@/slices/light/thunks';
// import { listSpoilers } from '@/slices/spoiler/thunks';
// import { listSideskirts } from '@/slices/sideskirt/thunks';
// import { Footer } from '@/widgets/layout';

// export function ProjectEdit({ match }) {
//   const dispatch = useDispatch();
//   const postId = match.params.id; // Obtén el ID del coche de los parámetros de la URL
//   const user_id = 1;

//   const car = useSelector(state => state.cars.car); // Obtén el coche actual del estado Redux

//   // Datos del coche para el formulario
//   const [name, setName] = useState('');
//   const [color, setColor] = useState('');
//   const [horn, setHorn] = useState('');
//   const [wheel, setWheel] = useState('');
//   const [engine, setEngine] = useState('');
//   const [suspension, setSuspension] = useState('');
//   const [brake, setBrake] = useState('');
//   const [exhaustpipe, setExhaustpipe] = useState('');
//   const [light, setLight] = useState('');
//   const [spoiler, setSpoiler] = useState('');
//   const [sideskirt, setSideskirt] = useState('');

//   // Estado para controlar la visualización del selector de color
//   const [showColorPicker, setShowColorPicker] = useState(false);

//   // Cargar datos del coche existente
//   useEffect(() => {
//     dispatch(getCarById(postId));
//     dispatch(listWheels());
//     dispatch(listEngines());
//     dispatch(listSuspensions());
//     dispatch(listBrakes());
//     dispatch(listExhaustpipes());
//     dispatch(listLights());
//     dispatch(listSpoilers());
//     dispatch(listSideskirts());
//   }, [dispatch, postId]);

//   // Actualizar el estado del formulario con los datos del coche
//   useEffect(() => {
//     if (car) {
//       setName(car.name);
//       setColor(car.color);
//       setHorn(car.horn);
//       setWheel(car.wheel);
//       setEngine(car.engine);
//       setSuspension(car.suspension);
//       setBrake(car.brake);
//       setExhaustpipe(car.exhaustpipe);
//       setLight(car.light);
//       setSpoiler(car.spoiler);
//       setSideskirt(car.sideskirt);
//     }
//   }, [car]);

//   // Manejar cambios en el color seleccionado
//   const handleChangeColor = (newColor) => {
//     setColor(newColor.hex);
//   };

//   // Manejar envío del formulario de edición
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const carData = {
//       id: postId,
//       name,
//       color,
//       horn,
//       wheel,
//       engine,
//       suspension,
//       brake,
//       exhaustpipe,
//       light,
//       spoiler,
//       sideskirt,
//       post,
//       user_id
//     };

//     try {
//       await dispatch(updateCar(carData)); // Llama a la acción para actualizar el coche
//       console.log('Car updated successfully!');
//     } catch (error) {
//       console.error('Failed to update car:', error.message);
//     }
//   };

//   return (
//     <>
//       <section className="relative block h-[18vh]">
//         <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
//         <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
//       </section>
//       <div className="container mx-auto py-12">
//         <h1 className="text-3xl font-bold mb-8">Editar Proyecto</h1>
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           {/* Renderiza los campos del formulario con los datos cargados del coche */}
//         </form>
//       </div>
//       <br />
//       <br />

//       <div className="bg-white fixed bottom-0 left-0 right-0">
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default ProjectEdit;
