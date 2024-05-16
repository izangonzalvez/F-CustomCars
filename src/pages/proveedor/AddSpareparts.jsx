import React, { useState } from 'react';
import BrakeList from './brake/BrakeList'; 
import BrakeAdd from './brake/BrakeAdd';
import EngineList from './engine/EngineList';
import EngineAdd from './engine/EngineAdd';
import ExhaustpipeList from './exhaustpipe/ExhaustpipeList';
import ExhaustpipeAdd from './exhaustpipe/ExhaustpipeAdd';
import LightList from './light/LightList';
import LightAdd from './light/LightAdd';
import SideskirtAdd from './sideskirt/SideskirtAdd';
import SideskirtList from './sideskirt/SideskirtList';
import SpoilerAdd from './spoiler/SpoilerAdd';
import SpoilerList from './spoiler/SpoilerList';
import SuspensionAdd from './suspension/SuspensionAdd';
import SuspensionList from './suspension/SuspensionList';
import WheelAdd from './wheel/WheelAdd';
import WheelList from './wheel/WheelList';

export function AddSpareparts() {
    const [showBrakeListPopup, setShowBrakeListPopup] = useState(false);
    const [showEngineListPopup, setShowEngineListPopup] = useState(false);
    const [showExhaustpipeListPopup, setShowExhaustpipeListPopup] = useState(false);
    const [showLightListPopup, setShowLightListPopup] = useState(false);
    const [showSideskirtsListPopup, setShowSideskirtsListPopup] = useState(false);
    const [showSpoilersListPopup, setShowSpoilersListPopup] = useState(false);
    const [showSuspensionsListPopup, setShowSuspensionsListPopup] = useState(false);
    const [showWheelsListPopup, setShowWheelsListPopup] = useState(false);

    return (
        <>
            <section className="relative block h-[18vh]">
                <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
                <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
            </section>
            <div className="container mx-auto py-12">
                <h1 className="text-3xl font-bold mb-8">Añade los nuevos recambios</h1>
                <div className="flex flex-wrap gap-8">
                    <section className="mb-8 max-w-[calc(33.33%-1rem)]">
                        <BrakeAdd />
                        <button onClick={() => setShowBrakeListPopup(true)} className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded-full shadow-lg">Listar</button>
                        {showBrakeListPopup && (
                            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
                                <div className="bg-white p-8 rounded-lg shadow-lg overflow-y-auto max-h-[80vh]">
                                    <h2 className="text-2xl font-bold mb-4">Lista</h2>
                                    <BrakeList />
                                    <button onClick={() => setShowBrakeListPopup(false)} className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded-full shadow-lg mt-4">Cerrar</button>
                                </div>
                            </div>
                        )}
                    </section>

                    <section className="mb-8 max-w-[calc(33.33%-1rem)]">
                        <EngineAdd />
                        <button onClick={() => setShowEngineListPopup(true)} className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded-full shadow-lg">Listar</button>
                        {showEngineListPopup && (
                            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
                                <div className="bg-white p-8 rounded-lg shadow-lg overflow-y-auto max-h-[80vh]">
                                    <h2 className="text-2xl font-bold mb-4">Lista</h2>
                                    <EngineList />
                                    <button onClick={() => setShowEngineListPopup(false)} className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded-full shadow-lg mt-4">Cerrar</button>
                                </div>
                            </div>
                        )}
                    </section>

                    <section className="mb-8 max-w-[calc(33.33%-1rem)]">
                        <ExhaustpipeAdd />
                        <button onClick={() => setShowExhaustpipeListPopup(true)} className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded-full shadow-lg">Listar</button>
                        {showExhaustpipeListPopup && (
                            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
                                <div className="bg-white p-8 rounded-lg shadow-lg overflow-y-auto max-h-[80vh]">
                                    <h2 className="text-2xl font-bold mb-4">Lista</h2>
                                    <ExhaustpipeList />
                                    <button onClick={() => setShowExhaustpipeListPopup(false)} className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded-full shadow-lg mt-4">Cerrar</button>
                                </div>
                            </div>
                        )}
                    </section>

                    <section className="mb-8 max-w-[calc(33.33%-1rem)]">
                        <LightAdd />
                        <button onClick={() => setShowLightListPopup(true)} className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded-full shadow-lg">Listar</button>
                        {showLightListPopup && (
                            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
                                <div className="bg-white p-8 rounded-lg shadow-lg overflow-y-auto max-h-[80vh]">
                                    <h2 className="text-2xl font-bold mb-4">Lista</h2>
                                    <LightList />
                                    <button onClick={() => setShowLightListPopup(false)} className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded-full shadow-lg mt-4">Cerrar</button>
                                </div>
                            </div>
                        )}
                    </section>

                    <section className="mb-8 max-w-[calc(33.33%-1rem)]">
                        <SideskirtAdd />
                        <button onClick={() => setShowSideskirtsListPopup(true)} className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded-full shadow-lg">Listar</button>
                        {showSideskirtsListPopup && (
                            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
                                <div className="bg-white p-8 rounded-lg shadow-lg overflow-y-auto max-h-[80vh]">
                                    <h2 className="text-2xl font-bold mb-4">Lista</h2>
                                    <SideskirtList />
                                    <button onClick={() => setShowSideskirtsListPopup(false)} className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded-full shadow-lg mt-4">Cerrar</button>
                                </div>
                            </div>
                        )}
                    </section>

                    <section className="mb-8 max-w-[calc(33.33%-1rem)]">
                        <SpoilerAdd />
                        <button onClick={() => setShowSpoilersListPopup(true)} className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded-full shadow-lg">Listar</button>
                        {showSpoilersListPopup && (
                            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
                                <div className="bg-white p-8 rounded-lg shadow-lg overflow-y-auto max-h-[80vh]">
                                    <h2 className="text-2xl font-bold mb-4">Lista</h2>
                                    <SpoilerList />
                                    <button onClick={() => setShowSpoilersListPopup(false)} className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded-full shadow-lg mt-4">Cerrar</button>
                                </div>
                            </div>
                        )}
                    </section>

                    <section className="mb-8 max-w-[calc(33.33%-1rem)]">
                        <SuspensionAdd />
                        <button onClick={() => setShowSuspensionsListPopup(true)} className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded-full shadow-lg">Listar</button>
                        {showSuspensionsListPopup && (
                            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
                                <div className="bg-white p-8 rounded-lg shadow-lg overflow-y-auto max-h-[80vh]">
                                    <h2 className="text-2xl font-bold mb-4">Lista</h2>
                                    <SuspensionList />
                                    <button onClick={() => setShowSuspensionsListPopup(false)} className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded-full shadow-lg mt-4">Cerrar</button>
                                </div>
                            </div>
                        )}
                    </section>

                    <section className="mb-8 max-w-[calc(33.33%-1rem)]">
                        <WheelAdd />
                        <button onClick={() => setShowWheelsListPopup(true)} className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded-full shadow-lg">Listar</button>
                        {showWheelsListPopup && (
                            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
                                <div className="bg-white p-8 rounded-lg shadow-lg overflow-y-auto max-h-[80vh]">
                                    <h2 className="text-2xl font-bold mb-4">Lista</h2>
                                    <WheelList />
                                    <button onClick={() => setShowWheelsListPopup(false)} className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded-full shadow-lg mt-4">Cerrar</button>
                                </div>
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </>
    );
}

export default AddSpareparts;
